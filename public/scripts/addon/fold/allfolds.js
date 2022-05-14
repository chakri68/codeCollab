// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function (mod) {
  if (typeof exports == "object" && typeof module == "object")
    // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd)
    // AMD
    define(["../../lib/codemirror"], mod);
  // Plain browser env
  else mod(CodeMirror);
})(function (CodeMirror) {
  "use strict";

  function bracketFolding(pairs) {
    return function (cm, start) {
      var line = start.line,
        lineText = cm.getLine(line);

      function findOpening(pair) {
        var tokenType;
        for (var at = start.ch, pass = 0; ; ) {
          var found = at <= 0 ? -1 : lineText.lastIndexOf(pair[0], at - 1);
          if (found == -1) {
            if (pass == 1) break;
            pass = 1;
            at = lineText.length;
            continue;
          }
          if (pass == 1 && found < start.ch) break;
          tokenType = cm.getTokenTypeAt(CodeMirror.Pos(line, found + 1));
          if (!/^(comment|string)/.test(tokenType))
            return { ch: found + 1, tokenType: tokenType, pair: pair };
          at = found - 1;
        }
      }

      function findRange(found) {
        var count = 1,
          lastLine = cm.lastLine(),
          end,
          startCh = found.ch,
          endCh;
        outer: for (var i = line; i <= lastLine; ++i) {
          var text = cm.getLine(i),
            pos = i == line ? startCh : 0;
          for (;;) {
            var nextOpen = text.indexOf(found.pair[0], pos),
              nextClose = text.indexOf(found.pair[1], pos);
            if (nextOpen < 0) nextOpen = text.length;
            if (nextClose < 0) nextClose = text.length;
            pos = Math.min(nextOpen, nextClose);
            if (pos == text.length) break;
            if (
              cm.getTokenTypeAt(CodeMirror.Pos(i, pos + 1)) == found.tokenType
            ) {
              if (pos == nextOpen) ++count;
              else if (!--count) {
                end = i;
                endCh = pos;
                break outer;
              }
            }
            ++pos;
          }
        }

        if (end == null || line == end) return null;
        return {
          from: CodeMirror.Pos(line, startCh),
          to: CodeMirror.Pos(end, endCh),
        };
      }

      var found = [];
      for (var i = 0; i < pairs.length; i++) {
        var open = findOpening(pairs[i]);
        if (open) found.push(open);
      }
      found.sort(function (a, b) {
        return a.ch - b.ch;
      });
      for (var i = 0; i < found.length; i++) {
        var range = findRange(found[i]);
        if (range) return range;
      }
      return null;
    };
  }

  CodeMirror.registerHelper(
    "fold",
    "brace",
    bracketFolding([
      ["{", "}"],
      ["[", "]"],
    ])
  );

  CodeMirror.registerHelper(
    "fold",
    "brace-paren",
    bracketFolding([
      ["{", "}"],
      ["[", "]"],
      ["(", ")"],
    ])
  );

  CodeMirror.registerHelper("fold", "import", function (cm, start) {
    function hasImport(line) {
      if (line < cm.firstLine() || line > cm.lastLine()) return null;
      var start = cm.getTokenAt(CodeMirror.Pos(line, 1));
      if (!/\S/.test(start.string))
        start = cm.getTokenAt(CodeMirror.Pos(line, start.end + 1));
      if (start.type != "keyword" || start.string != "import") return null;
      // Now find closing semicolon, return its position
      for (var i = line, e = Math.min(cm.lastLine(), line + 10); i <= e; ++i) {
        var text = cm.getLine(i),
          semi = text.indexOf(";");
        if (semi != -1)
          return { startCh: start.end, end: CodeMirror.Pos(i, semi) };
      }
    }

    var startLine = start.line,
      has = hasImport(startLine),
      prev;
    if (
      !has ||
      hasImport(startLine - 1) ||
      ((prev = hasImport(startLine - 2)) && prev.end.line == startLine - 1)
    )
      return null;
    for (var end = has.end; ; ) {
      var next = hasImport(end.line + 1);
      if (next == null) break;
      end = next.end;
    }
    return {
      from: cm.clipPos(CodeMirror.Pos(startLine, has.startCh + 1)),
      to: end,
    };
  });

  CodeMirror.registerHelper("fold", "include", function (cm, start) {
    function hasInclude(line) {
      if (line < cm.firstLine() || line > cm.lastLine()) return null;
      var start = cm.getTokenAt(CodeMirror.Pos(line, 1));
      if (!/\S/.test(start.string))
        start = cm.getTokenAt(CodeMirror.Pos(line, start.end + 1));
      if (start.type == "meta" && start.string.slice(0, 8) == "#include")
        return start.start + 8;
    }

    var startLine = start.line,
      has = hasInclude(startLine);
    if (has == null || hasInclude(startLine - 1) != null) return null;
    for (var end = startLine; ; ) {
      var next = hasInclude(end + 1);
      if (next == null) break;
      ++end;
    }
    return {
      from: CodeMirror.Pos(startLine, has + 1),
      to: cm.clipPos(CodeMirror.Pos(end)),
    };
  });
});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function (mod) {
  if (typeof exports == "object" && typeof module == "object")
    // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd)
    // AMD
    define(["../../lib/codemirror"], mod);
  // Plain browser env
  else mod(CodeMirror);
})(function (CodeMirror) {
  "use strict";

  CodeMirror.registerGlobalHelper(
    "fold",
    "comment",
    function (mode) {
      return mode.blockCommentStart && mode.blockCommentEnd;
    },
    function (cm, start) {
      var mode = cm.getModeAt(start),
        startToken = mode.blockCommentStart,
        endToken = mode.blockCommentEnd;
      if (!startToken || !endToken) return;
      var line = start.line,
        lineText = cm.getLine(line);

      var startCh;
      for (var at = start.ch, pass = 0; ; ) {
        var found = at <= 0 ? -1 : lineText.lastIndexOf(startToken, at - 1);
        if (found == -1) {
          if (pass == 1) return;
          pass = 1;
          at = lineText.length;
          continue;
        }
        if (pass == 1 && found < start.ch) return;
        if (
          /comment/.test(cm.getTokenTypeAt(CodeMirror.Pos(line, found + 1))) &&
          (found == 0 ||
            lineText.slice(found - endToken.length, found) == endToken ||
            !/comment/.test(cm.getTokenTypeAt(CodeMirror.Pos(line, found))))
        ) {
          startCh = found + startToken.length;
          break;
        }
        at = found - 1;
      }

      var depth = 1,
        lastLine = cm.lastLine(),
        end,
        endCh;
      outer: for (var i = line; i <= lastLine; ++i) {
        var text = cm.getLine(i),
          pos = i == line ? startCh : 0;
        for (;;) {
          var nextOpen = text.indexOf(startToken, pos),
            nextClose = text.indexOf(endToken, pos);
          if (nextOpen < 0) nextOpen = text.length;
          if (nextClose < 0) nextClose = text.length;
          pos = Math.min(nextOpen, nextClose);
          if (pos == text.length) break;
          if (pos == nextOpen) ++depth;
          else if (!--depth) {
            end = i;
            endCh = pos;
            break outer;
          }
          ++pos;
        }
      }
      if (end == null || (line == end && endCh == startCh)) return;
      return {
        from: CodeMirror.Pos(line, startCh),
        to: CodeMirror.Pos(end, endCh),
      };
    }
  );
});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function (mod) {
  if (typeof exports == "object" && typeof module == "object")
    // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd)
    // AMD
    define(["../../lib/codemirror"], mod);
  // Plain browser env
  else mod(CodeMirror);
})(function (CodeMirror) {
  "use strict";

  function lineIndent(cm, lineNo) {
    var text = cm.getLine(lineNo);
    var spaceTo = text.search(/\S/);
    if (
      spaceTo == -1 ||
      /\bcomment\b/.test(cm.getTokenTypeAt(CodeMirror.Pos(lineNo, spaceTo + 1)))
    )
      return -1;
    return CodeMirror.countColumn(text, null, cm.getOption("tabSize"));
  }

  CodeMirror.registerHelper("fold", "indent", function (cm, start) {
    var myIndent = lineIndent(cm, start.line);
    if (myIndent < 0) return;
    var lastLineInFold = null;

    // Go through lines until we find a line that definitely doesn't belong in
    // the block we're folding, or to the end.
    for (var i = start.line + 1, end = cm.lastLine(); i <= end; ++i) {
      var indent = lineIndent(cm, i);
      if (indent == -1) {
      } else if (indent > myIndent) {
        // Lines with a greater indent are considered part of the block.
        lastLineInFold = i;
      } else {
        // If this line has non-space, non-comment content, and is
        // indented less or equal to the start line, it is the start of
        // another block.
        break;
      }
    }
    if (lastLineInFold)
      return {
        from: CodeMirror.Pos(start.line, cm.getLine(start.line).length),
        to: CodeMirror.Pos(lastLineInFold, cm.getLine(lastLineInFold).length),
      };
  });
});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function (mod) {
  if (typeof exports == "object" && typeof module == "object")
    // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd)
    // AMD
    define(["../../lib/codemirror"], mod);
  // Plain browser env
  else mod(CodeMirror);
})(function (CodeMirror) {
  "use strict";

  CodeMirror.registerHelper("fold", "markdown", function (cm, start) {
    var maxDepth = 100;

    function isHeader(lineNo) {
      var tokentype = cm.getTokenTypeAt(CodeMirror.Pos(lineNo, 0));
      return tokentype && /\bheader\b/.test(tokentype);
    }

    function headerLevel(lineNo, line, nextLine) {
      var match = line && line.match(/^#+/);
      if (match && isHeader(lineNo)) return match[0].length;
      match = nextLine && nextLine.match(/^[=\-]+\s*$/);
      if (match && isHeader(lineNo + 1)) return nextLine[0] == "=" ? 1 : 2;
      return maxDepth;
    }

    var firstLine = cm.getLine(start.line),
      nextLine = cm.getLine(start.line + 1);
    var level = headerLevel(start.line, firstLine, nextLine);
    if (level === maxDepth) return undefined;

    var lastLineNo = cm.lastLine();
    var end = start.line,
      nextNextLine = cm.getLine(end + 2);
    while (end < lastLineNo) {
      if (headerLevel(end + 1, nextLine, nextNextLine) <= level) break;
      ++end;
      nextLine = nextNextLine;
      nextNextLine = cm.getLine(end + 2);
    }

    return {
      from: CodeMirror.Pos(start.line, firstLine.length),
      to: CodeMirror.Pos(end, cm.getLine(end).length),
    };
  });
});

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function (mod) {
  if (typeof exports == "object" && typeof module == "object")
    // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd)
    // AMD
    define(["../../lib/codemirror"], mod);
  // Plain browser env
  else mod(CodeMirror);
})(function (CodeMirror) {
  "use strict";

  var Pos = CodeMirror.Pos;
  function cmp(a, b) {
    return a.line - b.line || a.ch - b.ch;
  }

  var nameStartChar =
    "A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
  var nameChar = nameStartChar + "-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
  var xmlTagStart = new RegExp(
    "<(/?)([" + nameStartChar + "][" + nameChar + "]*)",
    "g"
  );

  function Iter(cm, line, ch, range) {
    this.line = line;
    this.ch = ch;
    this.cm = cm;
    this.text = cm.getLine(line);
    this.min = range ? Math.max(range.from, cm.firstLine()) : cm.firstLine();
    this.max = range ? Math.min(range.to - 1, cm.lastLine()) : cm.lastLine();
  }

  function tagAt(iter, ch) {
    var type = iter.cm.getTokenTypeAt(Pos(iter.line, ch));
    return type && /\btag\b/.test(type);
  }

  function nextLine(iter) {
    if (iter.line >= iter.max) return;
    iter.ch = 0;
    iter.text = iter.cm.getLine(++iter.line);
    return true;
  }
  function prevLine(iter) {
    if (iter.line <= iter.min) return;
    iter.text = iter.cm.getLine(--iter.line);
    iter.ch = iter.text.length;
    return true;
  }

  function toTagEnd(iter) {
    for (;;) {
      var gt = iter.text.indexOf(">", iter.ch);
      if (gt == -1) {
        if (nextLine(iter)) continue;
        else return;
      }
      if (!tagAt(iter, gt + 1)) {
        iter.ch = gt + 1;
        continue;
      }
      var lastSlash = iter.text.lastIndexOf("/", gt);
      var selfClose =
        lastSlash > -1 && !/\S/.test(iter.text.slice(lastSlash + 1, gt));
      iter.ch = gt + 1;
      return selfClose ? "selfClose" : "regular";
    }
  }
  function toTagStart(iter) {
    for (;;) {
      var lt = iter.ch ? iter.text.lastIndexOf("<", iter.ch - 1) : -1;
      if (lt == -1) {
        if (prevLine(iter)) continue;
        else return;
      }
      if (!tagAt(iter, lt + 1)) {
        iter.ch = lt;
        continue;
      }
      xmlTagStart.lastIndex = lt;
      iter.ch = lt;
      var match = xmlTagStart.exec(iter.text);
      if (match && match.index == lt) return match;
    }
  }

  function toNextTag(iter) {
    for (;;) {
      xmlTagStart.lastIndex = iter.ch;
      var found = xmlTagStart.exec(iter.text);
      if (!found) {
        if (nextLine(iter)) continue;
        else return;
      }
      if (!tagAt(iter, found.index + 1)) {
        iter.ch = found.index + 1;
        continue;
      }
      iter.ch = found.index + found[0].length;
      return found;
    }
  }
  function toPrevTag(iter) {
    for (;;) {
      var gt = iter.ch ? iter.text.lastIndexOf(">", iter.ch - 1) : -1;
      if (gt == -1) {
        if (prevLine(iter)) continue;
        else return;
      }
      if (!tagAt(iter, gt + 1)) {
        iter.ch = gt;
        continue;
      }
      var lastSlash = iter.text.lastIndexOf("/", gt);
      var selfClose =
        lastSlash > -1 && !/\S/.test(iter.text.slice(lastSlash + 1, gt));
      iter.ch = gt + 1;
      return selfClose ? "selfClose" : "regular";
    }
  }

  function findMatchingClose(iter, tag) {
    var stack = [];
    for (;;) {
      var next = toNextTag(iter),
        end,
        startLine = iter.line,
        startCh = iter.ch - (next ? next[0].length : 0);
      if (!next || !(end = toTagEnd(iter))) return;
      if (end == "selfClose") continue;
      if (next[1]) {
        // closing tag
        for (var i = stack.length - 1; i >= 0; --i)
          if (stack[i] == next[2]) {
            stack.length = i;
            break;
          }
        if (i < 0 && (!tag || tag == next[2]))
          return {
            tag: next[2],
            from: Pos(startLine, startCh),
            to: Pos(iter.line, iter.ch),
          };
      } else {
        // opening tag
        stack.push(next[2]);
      }
    }
  }
  function findMatchingOpen(iter, tag) {
    var stack = [];
    for (;;) {
      var prev = toPrevTag(iter);
      if (!prev) return;
      if (prev == "selfClose") {
        toTagStart(iter);
        continue;
      }
      var endLine = iter.line,
        endCh = iter.ch;
      var start = toTagStart(iter);
      if (!start) return;
      if (start[1]) {
        // closing tag
        stack.push(start[2]);
      } else {
        // opening tag
        for (var i = stack.length - 1; i >= 0; --i)
          if (stack[i] == start[2]) {
            stack.length = i;
            break;
          }
        if (i < 0 && (!tag || tag == start[2]))
          return {
            tag: start[2],
            from: Pos(iter.line, iter.ch),
            to: Pos(endLine, endCh),
          };
      }
    }
  }

  CodeMirror.registerHelper("fold", "xml", function (cm, start) {
    var iter = new Iter(cm, start.line, 0);
    for (;;) {
      var openTag = toNextTag(iter);
      if (!openTag || iter.line != start.line) return;
      var end = toTagEnd(iter);
      if (!end) return;
      if (!openTag[1] && end != "selfClose") {
        var startPos = Pos(iter.line, iter.ch);
        var endPos = findMatchingClose(iter, openTag[2]);
        return endPos && cmp(endPos.from, startPos) > 0
          ? { from: startPos, to: endPos.from }
          : null;
      }
    }
  });
  CodeMirror.findMatchingTag = function (cm, pos, range) {
    var iter = new Iter(cm, pos.line, pos.ch, range);
    if (iter.text.indexOf(">") == -1 && iter.text.indexOf("<") == -1) return;
    var end = toTagEnd(iter),
      to = end && Pos(iter.line, iter.ch);
    var start = end && toTagStart(iter);
    if (!end || !start || cmp(iter, pos) > 0) return;
    var here = { from: Pos(iter.line, iter.ch), to: to, tag: start[2] };
    if (end == "selfClose") return { open: here, close: null, at: "open" };

    if (start[1]) {
      // closing tag
      return {
        open: findMatchingOpen(iter, start[2]),
        close: here,
        at: "close",
      };
    } else {
      // opening tag
      iter = new Iter(cm, to.line, to.ch, range);
      return {
        open: here,
        close: findMatchingClose(iter, start[2]),
        at: "open",
      };
    }
  };

  CodeMirror.findEnclosingTag = function (cm, pos, range, tag) {
    var iter = new Iter(cm, pos.line, pos.ch, range);
    for (;;) {
      var open = findMatchingOpen(iter, tag);
      if (!open) break;
      var forward = new Iter(cm, pos.line, pos.ch, range);
      var close = findMatchingClose(forward, open.tag);
      if (close) return { open: open, close: close };
    }
  };

  // Used by addon/edit/closetag.js
  CodeMirror.scanForClosingTag = function (cm, pos, name, end) {
    var iter = new Iter(
      cm,
      pos.line,
      pos.ch,
      end ? { from: 0, to: end } : null
    );
    return findMatchingClose(iter, name);
  };
});
