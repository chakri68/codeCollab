"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCode = updateCode;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _codemirror = _interopRequireDefault(require("codemirror"));

require("../lib/codemirror.js");

require("../addon/edit/closeBrackets.js");

require("../addon/edit/matchBrackets.js");

require("../addon/edit/matchTags.js");

require("../addon/edit/fullScreen.js");

require("../addon/fold/xml-fold.js");

require("../addon/fold/foldcode.js");

require("../addon/fold/foldgutter.js");

require("../addon/fold/allfolds.js");

require("../addon/lint/lint.js");

require("../addon/edit/simple.js");

require("../addon/edit/closeTag.js");

require("../keymap/sublime.js");

require("../mode/xml/xml.js");

require("../mode/javascript/javascript.js");

require("../mode/css/css.js");

require("../addon/hint/show-hint.js");

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof3(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || (0, _typeof2["default"])(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Global varaibles!!
// const imageEvent = new CustomEvent("initOCR", {detail: }); -- Line 702
var types = ["image/jpeg", "image/png", "image/svg+xml"];
var hintLanguages = {
  css: "../addon/hint/css-hint.js",
  htmlmixed: "../addon/hint/html-hint.js",
  javascript: "../addon/hint/javascript-hint.js",
  sql: "../addon/hint/sql-hint.js",
  xml: "../addon/hint/xml-hint.js"
};
var popDownTime = 1500;
var Local = {
  code: "The code file",
  language: "langauge",
  title: "paste title",
  pgTheme: "The whole page theme"
};
var lightThemes = ["cobalt", "base16-light", "eclipse", "mdn-like"];
var pageThemeObj = {
  codeCollab: {
    primary: {
      h: "0",
      s: "0%",
      l: "13.3%"
    },
    dark: {
      h: "0",
      s: "0%",
      l: "7.8%"
    }
  },
  monokai: {
    primary: {
      h: "70",
      s: "8.1%",
      l: "14.5%"
    }
  },
  dracula: {
    primary: {
      h: "231",
      s: "14.9%",
      l: "18.4%"
    }
  },
  zenburn: {
    primary: {
      h: "0",
      s: "0%",
      l: "24.7%"
    }
  },
  "ayu-mirage": {
    primary: {
      h: "222",
      s: "21.5%",
      l: "15.5%"
    }
  },
  blackboard: {
    primary: {
      h: "229",
      s: "46.7%",
      l: "8.8%"
    }
  },
  cobalt: {
    primary: {
      h: "0",
      s: "0%",
      l: "100%"
    }
  },
  "base16-light": {
    primary: {
      h: "0",
      s: "0%",
      l: "96.1%"
    }
  },
  eclipse: {
    primary: {
      h: "0",
      s: "0%",
      l: "100%"
    }
  },
  "mdn-like": {
    primary: {
      h: "0",
      s: "0%",
      l: "99.6%"
    }
  },
  material: {
    primary: {
      h: "200",
      s: "19.1%",
      l: "18.4%"
    }
  }
};
var changeObj = {
  color: "#0cf07b",
  fontSize: "normal",
  fontStyle: "Fira Code, monospace" // keyMap: "default",

}; // let appendState = false;
// End

var lintLanguages = ["css", "javascript", "json", "yaml", "html"];
var myCodeMirror = [];
window.myCodeMirror = myCodeMirror;
var root = document.querySelector(":root");
var rs = getComputedStyle(root);
var pageTheme = document.getElementById("pageTheme");
var toggleLint = document.getElementById("lintToggleBtn");
var languageSelect = document.getElementById("language");
var themeSelect = document.getElementById("theme");
var pasteTitle = document.getElementById("pasteName");
var textArea = document.getElementById("code");
var errorPopUp = document.getElementById("errorPopUp");
var cpyBehaviour = document.getElementById("copyBehaviour");
var fontSize = document.getElementById("code-font-size");
var keyMap = document.getElementById("keyMap");
var tabSize = document.getElementById("tabSize");
var color = document.getElementById("prmyColorBtn");
var customToggle = document.getElementById("customToggle");
var saveBtn = document.getElementById("saveBtn");
var customModal = document.getElementById("customModal");
var hintToggle = document.getElementById("hintToggle");
var uploadBtn = document.getElementById("uploadBtn");
var expireTime = document.getElementById("expireTime");
var optionObj = {
  autoCloseBrackets: true,
  lineNumbers: true,
  theme: "monokai",
  matchBrackets: true,
  lineWrapping: true
};

function codeEditorinit(obj) {
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDF-nDiZ_u0yjSuTdSi6hbb8bggy7niKRY",
    authDomain: "codecollab-a2e1d.firebaseapp.com",
    projectId: "codecollab-a2e1d",
    storageBucket: "codecollab-a2e1d.appspot.com",
    messagingSenderId: "64159842752",
    appId: "1:64159842752:web:daa6df9315f568a7584825",
    measurementId: "G-EH4RFD9HVG",
    databaseURL: "https://codecollab-a2e1d-default-rtdb.firebaseio.com"
  }; // Initialize Firebase

  firebase.initializeApp(firebaseConfig); // Get Firebase Database reference.

  var firepadRef = firebase.database().ref();

  var codeMirror = _codemirror["default"].fromTextArea(obj, {
    autoCloseBrackets: true,
    lineNumbers: true,
    theme: themeSelect.value,
    matchBrackets: true,
    lineWrapping: true,
    autoCloseTags: true,
    matchTags: true,
    gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    foldGutter: true,
    highlightLines: true,
    indentUnit: parseInt(tabSize.value),
    cursorScrollMargin: 20,
    mode: languageSelect.value,
    extraKeys: {
      "Ctrl-Space": "autocomplete"
    }
  });

  myCodeMirror.push(codeMirror); // Create Firepad (with rich text toolbar and shortcuts enabled).

  console.log(codeMirror);
  var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror);
}

function updateCode(newCode) {
  myCodeMirror[0].setOption("value", newCode);
}

function handlePreviousSession() {
  if (localStorage.length != 0) {
    if (confirm("Restore the previous session?")) {
      Restore({
        language: function language(res) {
          languageSelect.value = res;
          languageSelect.dispatchEvent(new Event("change")); // Because we need to import some js files for certain languages
        },
        theme: function theme(res) {
          themeSelect.value = res;
          themeSelect.dispatchEvent(new Event("change"));
        },
        title: function title(res) {
          pasteTitle.value = res;
        },
        code: function code(res) {
          myCodeMirror[0].setOption("value", res);
        },
        pgTheme: function pgTheme(res) {
          pageTheme.value = res;
          pageTheme.dispatchEvent(new Event("change"));
        }
      });
    } else {
      localStorage.clear();
    }
  }
} // Adding an event listener:


textArea.addEventListener("change", function () {
  updateCode(textArea.value);
}); // Make fullscreen
// function changeVisibilityZero(e) {
//   e.currentTarget.style.opacity = "0.25";
// }
// function changeVisibilityOne(e) {
//   e.currentTarget.style.opacity = "1";
// }

var rgb2hex = function rgb2hex(rgb) {
  return "#".concat(rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(function (n) {
    return parseInt(n, 10).toString(16).padStart(2, "0");
  }).join(""));
};

function hexToHSL(H) {
  // Convert hex to RGB first
  var r = 0,
      g = 0,
      b = 0;

  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  } // Then to HSL


  r /= 255;
  g /= 255;
  b /= 255;
  var cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
  if (delta == 0) h = 0;else if (cmax == r) h = (g - b) / delta % 6;else if (cmax == g) h = (b - r) / delta + 2;else h = (r - g) / delta + 4;
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  return "hsl(" + h + "," + s + "%," + l + "%)";
}

function HSLToHex(hsl) {
  var sep = hsl.indexOf(",") > -1 ? "," : " ";
  hsl = hsl.substr(4).split(")")[0].split(sep);
  var h = hsl[0],
      s = hsl[1].substr(0, hsl[1].length - 1) / 100,
      l = hsl[2].substr(0, hsl[2].length - 1) / 100; // Strip label and convert to degrees (if necessary)

  if (h.indexOf("deg") > -1) h = h.substr(0, h.length - 3);else if (h.indexOf("rad") > -1) h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));else if (h.indexOf("turn") > -1) h = Math.round(h.substr(0, h.length - 4) * 360);
  if (h >= 360) h %= 360;
  var c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(h / 60 % 2 - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  } // Having obtained RGB, convert channels to hex


  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16); // Prepend 0s, if necessary

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;
  return "#" + r + g + b;
}

var modalName = "customModal";
var modalTitle = document.querySelector("#".concat(modalName, " .modalTitle"));
var modalBody = document.querySelector("#".concat(modalName, " .modalBody"));
var modalBorder = document.querySelector("#".concat(modalName, " .modalBorder"));

function openCustomModal(title, bodyJSX) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      _ref$isClosable = _ref.isClosable,
      isClosable = _ref$isClosable === void 0 ? true : _ref$isClosable,
      _ref$autoClose = _ref.autoClose,
      autoClose = _ref$autoClose === void 0 ? null : _ref$autoClose;

  modalTitle.textContent = title;
  modalBody.innerHTML = bodyJSX;
  modalBorder.style.borderColor = color;
  if (color) modalTitle.style.color = color;
  if (autoClose != null) openModal(customModal, {
    isClosable: isClosable,
    autoClose: autoClose
  });else openModal(customModal, {
    isClosable: isClosable
  });
}

function Save(obj, popup) {
  var flag = false;

  for (var i in obj) {
    try {
      localStorage.setItem(i, obj[i].trim());
    } catch (error) {
      flag = true;
      console.log(error);
    }
  }

  if (popup) {
    if (flag) openCustomModal("Not Saved", "<p>Saving failed...</p>", "red", {
      autoClose: popDownTime
    });else openCustomModal("Saved", "<p>Saved succesfully!</p>", "green", {
      autoClose: popDownTime
    });
  }
}

function Restore(obj) {
  console.log(languageSelect.value);
  var flag = false;

  for (var i in obj) {
    try {
      if (localStorage.hasOwnProperty(i)) obj[i](localStorage.getItem(i));
    } catch (error) {
      flag = true;
      console.log(error);
    }
  }

  if (flag) openCustomModal("Restoration failed", "<p>The code couldn't be restored properly...</p>", "red", {
    autoClose: popDownTime
  });else openCustomModal("Restored", "<p>Restored succesfully!</p>", "green", {
    autoClose: popDownTime
  });
}

function handleSave() {
  var popup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  Save({
    code: myCodeMirror[0].getDoc().getValue(),
    language: languageSelect.value,
    theme: themeSelect.value,
    title: pasteTitle.value,
    pgTheme: pageTheme.value
  }, popup);
}

function handleTabSize(e) {
  myCodeMirror[0].setOption("indentUnit", parseInt(e.target.value));
  myCodeMirror[0].setOption("tabSize", parseInt(e.target.value));
}

function handleCustomToggle(e) {
  if (e.target.checked) {
    // color.disabled = false;
    root.style.setProperty("--link-primary", color.value);
  } else {
    // color.disabled = true;
    root.style.setProperty("--link-primary", "hsl(var(--text-h), var(--text-s), var(--text-l))"); // try {
    //   color.value = rgb2hex(
    //     window
    //       .getComputedStyle(document.querySelector(".btn"))
    //       .getPropertyValue("background-color")
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  }
}

function setTheme(obj, theme) {
  root.style.setProperty("--bg-rgbh1", obj["".concat(theme)].primary.h);
  root.style.setProperty("--bg-rgbs1", obj["".concat(theme)].primary.s);
  root.style.setProperty("--bg-rgbl1", obj["".concat(theme)].primary.l);

  if (obj["".concat(theme)].hasOwnProperty("dark")) {
    root.style.setProperty("--bg-rgbh2", obj["".concat(theme)].dark.h);
    root.style.setProperty("--bg-rgbs2", obj["".concat(theme)].dark.s);
    root.style.setProperty("--bg-rgbl2", obj["".concat(theme)].dark.l);
    root.style.setProperty("--bg-a", "0%");
  } else {
    root.style.setProperty("--bg-rgbh2", obj["".concat(theme)].primary.h);
    root.style.setProperty("--bg-rgbs2", obj["".concat(theme)].primary.s);
    root.style.setProperty("--bg-rgbl2", obj["".concat(theme)].primary.l);
    root.style.setProperty("--bg-a", "10%");
  }

  if (lightThemes.includes(theme)) {
    root.style.setProperty("--text-primary", "black");
    root.style.setProperty("--text-h", "var(--bg-rgbh1)");
    root.style.setProperty("--text-s", "calc(var(--bg-rgbs1) / 4.5)");
    root.style.setProperty("--text-l", "calc(var(--bg-rgbl1) / 25)");
  } else {
    {
      root.style.setProperty("--text-primary", "white");
      root.style.setProperty("--text-h", "var(--bg-rgbh1)");
      root.style.setProperty("--text-s", "calc(var(--bg-rgbs1) * 4)");
      root.style.setProperty("--text-l", "calc(var(--bg-rgbl1) * 3.75)");
    }
  } // if (!customToggle.ariaChecked) {
  //   try {
  //     color.value = rgb2hex(
  //       window
  //         .getComputedStyle(document.querySelector(".btn"))
  //         .getPropertyValue("background-color")
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

}

function currentTheme(e) {
  setTheme(pageThemeObj, e.target.value);
}

function handlePageTheme(e) {
  switch (e.target.value) {
    case "codeEditor":
      setTheme(pageThemeObj, themeSelect.value);
      themeSelect.addEventListener("change", currentTheme);
      break;

    case "codeCollab":
      setTheme(pageThemeObj, e.target.value);
      themeSelect.removeEventListener("change", currentTheme);
      break;

    case "current":
      setTheme(pageThemeObj, themeSelect.value);
      themeSelect.removeEventListener("change", currentTheme);
      break;
  }
}

function handleKeyMaps(e) {
  if (e.target.value == "default") {
    myCodeMirror[0].setOption("keyMap", e.target.value);
    return;
  }

  Promise.resolve("../keymap/".concat(e.target.value, ".js")).then(function (s) {
    return _interopRequireWildcard(require(s));
  }).then(function () {
    myCodeMirror[0].setOption("keyMap", e.target.value);
  });
}

function handleFontSize(e) {
  if (e.target.value != rs.getPropertyValue("--code-font-size")) {
    if (confirm("Are you sure you want to chnage the font size to ".concat(e.target.value, "?"))) {
      changeObj.fontSize = e.target.value;
      root.style.setProperty("--code-font-size", e.target.value);
    } else {
      e.target.value = changeObj.fontSize;
    }
  }
}

function fullScreen(box, hover, isFullScreen) {
  if (isFullScreen) {
    box.classList.add("full-screen-invisible");
    hover.classList.add("full-screen-visible");
  } else {
    box.classList.remove("full-screen-invisible");
    hover.classList.remove("full-screen-visible");
  }
} // Make an element a drop zone


function makeDropZone(el) {
  el.addEventListener("dragenter", dragenter, false);
  el.addEventListener("dragover", dragover, false);
  el.addEventListener("drop", drop, false);
}

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();
  var dt = e.dataTransfer;
  var files = dt.files;
  var flag = flagRead(files);
  if (!flag) openModal(errorPopUp, {
    isClosable: true
  });
} // Linking a compiler


var COMP_URL = "https://www.jdoodle.com/api/redirect-to-post/";
var urlObj = {
  cpp: "".concat(COMP_URL, "online-compiler-c++/"),
  python: "".concat(COMP_URL, "python3-programming-online/"),
  java: "".concat(COMP_URL, "online-java-compiler/"),
  c: "".concat(COMP_URL, "c-online-compiler/"),
  csharp: "".concat(COMP_URL, "compile-c-sharp-online/"),
  javascript: "".concat(COMP_URL, "execute-rhino-online/"),
  lua: "".concat(COMP_URL, "execute-lua-online/"),
  ruby: "".concat(COMP_URL, "execute-ruby-online/"),
  rust: "".concat(COMP_URL, "execute-rust-online/"),
  html: "".concat(COMP_URL, "html-css-javascript-online-editor/"),
  css: "".concat(COMP_URL, "html-css-javascript-online-editor/"),
  cobol: "".concat(COMP_URL, "execute-cobol-online/"),
  fortran: "".concat(COMP_URL, "execute-fortran-online/"),
  shell: "".concat(COMP_URL, "test-bash-shell-script-online/"),
  verilog: "".concat(COMP_URL, "execute-verilog-online/")
};
var extensionsObj = {
  text: "txt",
  python: "py",
  cpp: "cpp",
  java: "java",
  c: "c",
  javascript: "js",
  lua: "lua",
  ruby: "rb",
  rust: "rs",
  htmlmixed: "html",
  xml: "xml",
  jsx: "jsx",
  css: "css",
  sass: "scss",
  cobol: "cbl",
  fortran: "f60",
  shell: "sh",
  verilog: "v",
  csharp: "cs"
};

function handleLanguageSelect() {
  var currLanguage = languageSelect.value;

  if (hintLanguages.hasOwnProperty(currLanguage)) {
    Promise.resolve("".concat(hintLanguages[currLanguage])).then(function (s) {
      return _interopRequireWildcard(require(s));
    }).then(function () {
      console.log("Hints for ".concat(currLanguage, " loaded"));
    });
  }

  var path;

  if (!urlObj.hasOwnProperty(currLanguage)) {
    document.getElementById("compilerBtn").disabled = true;
  } else {
    document.getElementById("compilerBtn").disabled = false;
  }

  if (["c", "cpp", "java", "text", "csharp"].includes(currLanguage)) {
    path = "../mode/clike/clike.js";
  } else {
    path = "../mode/".concat(currLanguage, "/").concat(currLanguage, ".js");
  }

  Promise.resolve("".concat(path)).then(function (s) {
    return _interopRequireWildcard(require(s));
  }).then(function () {
    // const myTextArea = document.createElement("textarea");
    // myTextArea.id = "code";
    // document.getElementById("text-editor").appendChild(myTextArea);
    switch (currLanguage) {
      case "cpp":
        optionObj.mode = "text/x-c++src";
        break;

      case "c":
        optionObj.mode = "text/x-csrc";
        break;

      case "java":
        optionObj.mode = "text/x-java";
        break;

      case "csharp":
        optionObj.mode = "text/x-csharp";
        break;

      default:
        optionObj.mode = languageSelect.value;
        break;
    } // optionObj.value = myCodeMirror[0].getValue();
    // console.log(optionObj);
    // document.getElementsByClassName("CodeMirror")[0].remove();
    // myCodeMirror[0] = CodeMirror.fromTextArea(
    //   document.getElementById("code"),
    //   optionObj
    // );
    // myCodeMirror[0].setValue(optionObj.value);


    myCodeMirror[0].setOption("mode", optionObj.mode);
    document.getElementById("codeForm").setAttribute("action", urlObj[currLanguage]);
  });

  if (lintLanguages.includes(currLanguage)) {
    Promise.resolve("../addon/lint/".concat(currLanguage, "-lint.js")).then(function (s) {
      return _interopRequireWildcard(require(s));
    }).then(function () {
      if (toggleLint.checked) {
        if (currLanguage == "javascript") {
          myCodeMirror[0].setOption("lint", {
            esversion: "10"
          });
        } else myCodeMirror[0].setOption("lint", true);
      }
    });
  }
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(function (key) {
    return object[key] === value;
  });
} // FullScreen Toggle


function toggleScreenSize(e) {
  if (e.key == "Escape") {
    e.key.preventDefault(); // myCodeMirror[0].setOption("fullScreen", false);

    window.removeEventListener("keydown", toggleScreenSize);
  }
}

function readFile(file) {
  var reader = new FileReader();

  reader.onload = function (evt) {
    switch (cpyBehaviour.value) {
      case "append":
        var pvText = myCodeMirror[0].getValue();
        myCodeMirror[0].setValue("".concat(pvText, "\n").concat(evt.target.result));
        break;

      case "replace":
        myCodeMirror[0].setValue(evt.target.result);
        break;
    }

    handleLanguageSelect();
  };

  reader.readAsText(file);
}

function flagRead(files) {
  if (files.length == 0) return 0;
  var fileList = files;
  var file = fileList[0]; // let type = "file.name.py";

  var rxExtension = /.+\.(.+)$/g;
  var rxTitle = /(.+)\..+$/g;
  var type = rxExtension.exec(file.name)[1];
  var title = rxTitle.exec(file.name)[1];

  if (type) {
    type = getKeyByValue(extensionsObj, type);
    if (type) languageSelect.value = type;else {
      console.log(file.type);

      if (types.includes(file.type)) {
        var imageEvent = new CustomEvent("initOCR", {
          detail: files
        });
        document.getElementById("selectFile").dispatchEvent(imageEvent);
        return 2;
      }

      return 0;
    }
  } else return 0;

  if (title) pasteTitle.value = title;
  readFile(file);
  return 1;
}

function handleFile() {
  var flag = flagRead(this.files);

  if (!flag) {
    openModal(errorPopUp, {
      isClosable: true
    });
  }
}

function handleHints(e) {
  if (!e.target.checked) {
    myCodeMirror[0].setOption("extraKeys", {});
  } else {
    myCodeMirror[0].setOption("extraKeys", {
      "Ctrl-Space": "autocomplete"
    });
  }
} // CLoud Save Handler


function checkCode() {
  var code = myCodeMirror[0].getValue();

  if (code.length != 0 && code != localStorage.getItem("cloudSave")) {
    return true;
  } else {
    if (code == localStorage.getItem("cloudSave")) openCustomModal("Multiple saves", "<p>Code with the same contents was just saved</p>", "red", {
      autoClose: popDownTime
    });else openCustomModal("No code to save", "<p>No code to save</p>", "red", {
      autoClose: popDownTime
    });
    return false;
  }
}

function checkTitle() {
  var pattern = /$#@!^/i;
  return !pattern.test(pasteTitle.value);
}

function checkExpireTime() {
  return true;
}

function checkAll(funcArr) {
  var _iterator = _createForOfIteratorHelper(funcArr),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var i = _step.value;
      if (!i()) return false;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return true;
}

function uploadCode() {
  return _uploadCode.apply(this, arguments);
}

function _uploadCode() {
  _uploadCode = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var author, postObj, response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            handleSave(false);
            openCustomModal("Cloud Save", "<p>Saving...</p>", "var(--link-primary)", {
              isClosable: false
            });

            if (!checkAll([checkCode, checkTitle, checkExpireTime])) {
              _context.next = 18;
              break;
            }

            // All checks completed
            // Ask for author
            author = prompt("Enter the author name", "Anonymous");

            if (!(author == null)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            postObj = {
              title: pasteTitle.value,
              language: languageSelect.value,
              code: myCodeMirror[0].getValue(),
              author: author,
              expire: Date.now() + parseInt(expireTime.value) * 1000 // expire: Date.now() + 60 * 1000,

            };
            console.log(postObj);
            _context.next = 10;
            return fetch("/api/code", {
              method: "POST",
              body: JSON.stringify(postObj),
              headers: {
                "Content-Type": "application/json"
              }
            });

          case 10:
            response = _context.sent;
            _context.next = 13;
            return response.json();

          case 13:
            data = _context.sent;
            console.log(data);

            if (data.success) {
              localStorage.setItem("cloudSave", myCodeMirror[0].getValue());
              console.log("NOICEE!");
              closeModal(customModal);
              window.open("/".concat(data.pasteId), "_self");
            } else {
              closeModal(customModal);
              openModal(errorPopUp, {
                isClosable: true
              });
              console.log("SOO CLOSEE");
            }

            _context.next = 21;
            break;

          case 18:
            // Error
            closeModal(customModal);
            openModal(errorPopUp, {
              isClosable: true
            });
            console.log("ERRORR!");

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _uploadCode.apply(this, arguments);
}

function init() {
  codeEditorinit(textArea);
  document.getElementById("selectFile").addEventListener("change", handleFile, false);
  document.getElementById("compilerBtn").addEventListener("click", function () {
    myCodeMirror[0].save();
  });
  themeSelect.addEventListener("change", function () {
    myCodeMirror[0].setOption("theme", themeSelect.value);
  });
  languageSelect.addEventListener("change", handleLanguageSelect);
  document.getElementById("fullScreenToggle").addEventListener("click", function (e) {
    if (e.target.checked) {
      // myCodeMirror[0].setOption("fullScreen", "true");
      // document.getElementsByClassName("CodeMirror")[0].requestFullscreen();
      document.getElementById("fullScreen").requestFullscreen();
      myCodeMirror[0].setSize(null, "calc(92vh - 20px)");
    } else {
      document.exitFullscreen();
    }
  }); // Add ctrl + s event listener

  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "s") {
      // Prevent the Save dialog to open
      e.preventDefault(); // Place your code here

      console.log("CTRL + S");
      handleSave(true);
    }
  });
  document.getElementById("fullScreen").addEventListener("fullscreenchange", function () {
    fullScreen(document.getElementById("menu"), document.getElementsByClassName("toggleButtons")[0], document.fullscreenElement);

    if (!document.fullscreenElement) {
      document.getElementById("fullScreenToggle").checked = false;
      myCodeMirror[0].setSize(null, 400); // Default height
    }
  }); // Word Wrap toggle

  var wordWrapToggle = document.getElementById("wordWrapToggle");
  wordWrapToggle.addEventListener("click", function (e) {
    if (e.target.checked) {
      myCodeMirror[0].setOption("lineWrapping", true);
    } else {
      myCodeMirror[0].setOption("lineWrapping", false);
    }
  }); // JS for settings

  var toggleLint = document.getElementById("lintToggleBtn");
  toggleLint.addEventListener("change", function () {
    if (toggleLint.checked) {
      if (languageSelect.value == "javascript") myCodeMirror[0].setOption("lint", {
        esversion: "10"
      });else myCodeMirror[0].setOption("lint", true);
    } else {
      myCodeMirror[0].setOption("lint", false);
    }
  }); // JS for the primary color toggle

  customToggle.addEventListener("change", handleCustomToggle);
  color.addEventListener("change", function () {
    if (customToggle.ariaChecked) {
      if (confirm("Are you sure you want to change the color to ".concat(color.value, "?"))) {
        changeObj.color = color.value;
        root.style.setProperty("--link-primary", color.value);
      } else {
        color.value = changeObj.color;
      }
    }
  }); // Font family setting

  var fontStyle = document.getElementById("fontStyleBtn");
  fontStyle.addEventListener("change", function () {
    if (fontStyle.value != rs.getPropertyValue("--font-family")) {
      if (confirm("Are you sure you want to change the font style to ".concat(fontStyle.value, "?"))) {
        changeObj.fontStyle = fontStyle.value;
        root.style.setProperty("--font-family", fontStyle.value);
      } else {
        fontStyle.value = changeObj.fontStyle;
      }
    }
  }); // Hints

  hintToggle.addEventListener("change", handleHints); // Font size

  fontSize.addEventListener("change", handleFontSize); // keyMaps

  keyMap.addEventListener("change", handleKeyMaps); // themeChange

  pageTheme.addEventListener("change", handlePageTheme); // tabSize

  tabSize.addEventListener("change", handleTabSize); // Handling save btn

  saveBtn.addEventListener("click", handleSave);
  document.getElementById("codeDownloadBtn").addEventListener("click", function () {
    console.save(myCodeMirror[0].getDoc().getValue(), "".concat(document.getElementById("pasteName").value ? document.getElementById("pasteName").value : "untitled", ".").concat(extensionsObj.hasOwnProperty(languageSelect.value) ? extensionsObj[languageSelect.value] : languageSelect.value));
  }); // Add cloud save

  uploadBtn.addEventListener("click", uploadCode); // Warn before closing

  window.addEventListener("beforeunload", function (e) {
    if (this.localStorage.getItem("code") && myCodeMirror[0].getDoc().getValue() && !(myCodeMirror[0].getDoc().getValue().trim() == this.localStorage.getItem("code").trim())) {
      var confirmationMessage = "It looks like you have been editing something. " + "If you leave before saving, your changes will be lost.";
      (e || window.event).returnValue = confirmationMessage; //Gecko + IE

      return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
    }
  });
} // document.getElementById("codeForm").addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (document.getElementById("code").value != "") {
//     document.getElementById("codeForm").submit();
//   }
// });
//  End
// Local Storage
// localStorage.setItem("code", myCodeMirror[0].getDoc().getValue());
// let myCode = localStorage.getItem("code");
// chrome.downloads.download(
//   {
//     url: "data:text/plain," + myName,
//     filename: "data.txt",
//     conflictAction: "uniquify",
//     saveAs: true,
//   },
//   function (downloadId) {
//     console.log("downloaded with ID", downloadId);
//   }
// );


(function (console) {
  console.save = function (data, filename) {
    if (!data) {
      console.error("Console.save: No data");
      return;
    }

    if (!filename) filename = "console.json";

    if ((0, _typeof2["default"])(data) === "object") {
      data = JSON.stringify(data, undefined, 4);
    }

    var blob = new Blob([data], {
      type: "text/json"
    }),
        e = document.createEvent("MouseEvents"),
        a = document.createElement("a");
    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
    e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
  };
})(console);

init();
makeDropZone(document.getElementById("text-editor"));
handlePreviousSession();
