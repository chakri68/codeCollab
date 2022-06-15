import "../lib/codemirror.js";
import "../addon/closeBrackets.js";
import "../addon/matchBrackets.js";
import "../addon/matchTags.js";
import "../addon/fullScreen.js";
import "../addon/xml-fold.js";
import "../addon/fold/foldcode.js";
import "../addon/fold/foldgutter.js";
import "../addon/fold/allfolds.js";
import "../addon/lint/lint.js";
import "../addon/simple.js";
import "../addon/closeTag.js";
import "../keymap/sublime.js";
import "../mode/xml/xml.js";
import "../mode/javascript/javascript.js";
import "../mode/css/css.js";

// Global varaibles!!

const lightThemes = ["cobalt", "base16-light", "eclipse", "mdn-like"];

const pageThemeObj = {
  codeCollab: {
    primary: {
      h: "0",
      s: "0%",
      l: "13.3%",
    },
    dark: {
      h: "0",
      s: "0%",
      l: "7.8%",
    },
  },
  monokai: {
    primary: {
      h: "70",
      s: "8.1%",
      l: "14.5%",
    },
  },
  dracula: {
    primary: {
      h: "231",
      s: "14.9%",
      l: "18.4%",
    },
  },
  zenburn: {
    primary: {
      h: "0",
      s: "0%",
      l: "24.7%",
    },
  },
  "ayu-mirage": {
    primary: {
      h: "222",
      s: "21.5%",
      l: "15.5%",
    },
  },
  blackboard: {
    primary: {
      h: "229",
      s: "46.7%",
      l: "8.8%",
    },
  },
  cobalt: {
    primary: {
      h: "0",
      s: "0%",
      l: "100%",
    },
  },
  "base16-light": {
    primary: {
      h: "0",
      s: "0%",
      l: "96.1%",
    },
  },
  eclipse: {
    primary: {
      h: "0",
      s: "0%",
      l: "100%",
    },
  },
  "mdn-like": {
    primary: {
      h: "0",
      s: "0%",
      l: "99.6%",
    },
  },
  material: {
    primary: {
      h: "200",
      s: "19.1%",
      l: "18.4%",
    },
  },
};

let changeObj = {
  color: "#0cf07b",
  fontSize: "normal",
  fontStyle: "Fira Code, monospace",
  // keyMap: "default",
};

// let appendState = false;

// End

const lintLanguages = ["css", "javascript", "json", "yaml", "html"];
var myCodeMirror = [];
const root = document.querySelector(":root");
let rs = getComputedStyle(root);
const pageTheme = document.getElementById("pageTheme");
const toggleLint = document.getElementById("lintToggleBtn");
const languageSelect = document.getElementById("language");
const themeSelect = document.getElementById("theme");
const pasteTitle = document.getElementById("pasteName");
const textArea = document.getElementById("code");
const errorPopUp = document.getElementById("errorPopUp");
const cpyBehaviour = document.getElementById("copyBehaviour");
const fontSize = document.getElementById("code-font-size");
const keyMap = document.getElementById("keyMap");
let optionObj = {
  autoCloseBrackets: true,
  lineNumbers: true,
  theme: "monokai",
  matchBrackets: true,
  lineWrapping: true,
};
function codeEditorinit(obj) {
  myCodeMirror.push(
    CodeMirror.fromTextArea(obj, {
      autoCloseBrackets: true,
      lineNumbers: true,
      theme: "monokai",
      matchBrackets: true,
      lineWrapping: true,
      autoCloseTags: true,
      matchTags: true,
      gutters: [
        "CodeMirror-lint-markers",
        "CodeMirror-linenumbers",
        "CodeMirror-foldgutter",
      ],
      foldGutter: true,
      highlightLines: true,
      keyMap: "sublime",
    })
  );
}

// Make fullscreen

// function changeVisibilityZero(e) {
//   e.currentTarget.style.opacity = "0.25";
// }

// function changeVisibilityOne(e) {
//   e.currentTarget.style.opacity = "1";
// }

function setTheme(obj, theme) {
  root.style.setProperty("--bg-rgbh1", obj[`${theme}`].primary.h);
  root.style.setProperty("--bg-rgbs1", obj[`${theme}`].primary.s);
  root.style.setProperty("--bg-rgbl1", obj[`${theme}`].primary.l);
  if (obj[`${theme}`].hasOwnProperty("dark")) {
    root.style.setProperty("--bg-rgbh2", obj[`${theme}`].dark.h);
    root.style.setProperty("--bg-rgbs2", obj[`${theme}`].dark.s);
    root.style.setProperty("--bg-rgbl2", obj[`${theme}`].dark.l);
    root.style.setProperty("--bg-a", "0%");
  } else {
    root.style.setProperty("--bg-rgbh2", obj[`${theme}`].primary.h);
    root.style.setProperty("--bg-rgbs2", obj[`${theme}`].primary.s);
    root.style.setProperty("--bg-rgbl2", obj[`${theme}`].primary.l);
    root.style.setProperty("--bg-a", "10%");
  }
  if (lightThemes.includes(theme))
    root.style.setProperty("--text-primary", "black");
  else {
    root.style.setProperty("--text-primary", "white");
  }
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
  import(`../keymap/${e.target.value}.js`).then(() => {
    myCodeMirror[0].setOption("keyMap", e.target.value);
  });
}
function fullScreen(box, hover, isFullScreen) {
  if (isFullScreen) {
    box.classList.add("full-screen-invisible");
    hover.classList.add("full-screen-visible");
  } else {
    box.classList.remove("full-screen-invisible");
    hover.classList.remove("full-screen-visible");
  }
}

// Make an element a drop zone
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

  const dt = e.dataTransfer;
  const files = dt.files;

  let flag = flagRead(files);
  if (!flag) openModal(errorPopUp);
}
// Linking a compiler

const COMP_URL = "https://www.jdoodle.com/api/redirect-to-post/";

const urlObj = {
  cpp: `${COMP_URL}online-compiler-c++/`,
  python: `${COMP_URL}python3-programming-online/`,
  java: `${COMP_URL}online-java-compiler/`,
  c: `${COMP_URL}c-online-compiler/`,
  csharp: `${COMP_URL}compile-c-sharp-online/`,
  javascript: `${COMP_URL}execute-rhino-online/`,
  lua: `${COMP_URL}execute-lua-online/`,
  ruby: `${COMP_URL}execute-ruby-online/`,
  rust: `${COMP_URL}execute-rust-online/`,
  html: `${COMP_URL}html-css-javascript-online-editor/`,
  css: `${COMP_URL}html-css-javascript-online-editor/`,
  cobol: `${COMP_URL}execute-cobol-online/`,
  fortran: `${COMP_URL}execute-fortran-online/`,
  shell: `${COMP_URL}test-bash-shell-script-online/`,
  verilog: `${COMP_URL}execute-verilog-online/`,
};

let extensionsObj = {
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
  csharp: "cs",
};

function handleLanguageSelect() {
  let path;
  if (!urlObj.hasOwnProperty(languageSelect.value)) {
    document.getElementById("compilerBtn").disabled = true;
  } else {
    document.getElementById("compilerBtn").disabled = false;
  }
  if (["c", "cpp", "java", "text", "csharp"].includes(languageSelect.value)) {
    path = `../mode/clike/clike.js`;
  } else {
    path = `../mode/${languageSelect.value}/${languageSelect.value}.js`;
  }
  import(path).then(() => {
    // const myTextArea = document.createElement("textarea");
    // myTextArea.id = "code";
    // document.getElementById("text-editor").appendChild(myTextArea);
    switch (languageSelect.value) {
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
    }

    // optionObj.value = myCodeMirror[0].getValue();
    // console.log(optionObj);
    // document.getElementsByClassName("CodeMirror")[0].remove();
    // myCodeMirror[0] = CodeMirror.fromTextArea(
    //   document.getElementById("code"),
    //   optionObj
    // );
    // myCodeMirror[0].setValue(optionObj.value);
    myCodeMirror[0].setOption("mode", optionObj.mode);
    document
      .getElementById("codeForm")
      .setAttribute("action", urlObj[languageSelect.value]);
  });
  if (lintLanguages.includes(languageSelect.value)) {
    import(`../addon/lint/${languageSelect.value}-lint.js`).then(() => {
      if (toggleLint.checked) {
        myCodeMirror[0].setOption("lint", true);
      }
    });
  }
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

// FullScreen Toggle

function toggleScreenSize(e) {
  if (e.key == "Escape") {
    e.key.preventDefault();
    // myCodeMirror[0].setOption("fullScreen", false);
    window.removeEventListener("keydown", toggleScreenSize);
  }
}

function readFile(file) {
  const reader = new FileReader();
  reader.onload = (evt) => {
    switch (cpyBehaviour.value) {
      case "append":
        let pvText = myCodeMirror[0].getValue();
        myCodeMirror[0].setValue(`${pvText}\n${evt.target.result}`);
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
  if (files.length == 0) return;
  console.log(files);
  const fileList = files;
  const file = fileList[0];
  // let type = "file.name.py";
  let rxExtension = /.+\.(.+)$/g;
  let rxTitle = /(.+)\..+$/g;
  let type = rxExtension.exec(file.name)[1];
  let title = rxTitle.exec(file.name)[1];
  if (type) {
    type = getKeyByValue(extensionsObj, type);
    if (type) languageSelect.value = type;
    else return;
  } else return;
  if (title) pasteTitle.value = title;
  readFile(file);
  return 1;
}

function handleFile() {
  let flag = flagRead(this.files);
  if (!flag) openModal(errorPopUp);
}

function init() {
  codeEditorinit(textArea);
  document
    .getElementById("selectFile")
    .addEventListener("change", handleFile, false);
  document.getElementById("compilerBtn").addEventListener("click", () => {
    myCodeMirror[0].save();
  });
  themeSelect.addEventListener("change", () => {
    myCodeMirror[0].setOption("theme", themeSelect.value);
  });
  languageSelect.addEventListener("change", handleLanguageSelect);
  document.getElementById("fullScreenToggle").addEventListener("click", (e) => {
    if (e.target.checked) {
      // myCodeMirror[0].setOption("fullScreen", "true");
      // document.getElementsByClassName("CodeMirror")[0].requestFullscreen();
      document.getElementById("fullScreen").requestFullscreen();
      myCodeMirror[0].setSize(null, "calc(92vh - 20px)");
    } else {
      document.exitFullscreen();
    }
  });

  document
    .getElementById("fullScreen")
    .addEventListener("fullscreenchange", () => {
      fullScreen(
        document.getElementById("menu"),
        document.getElementsByClassName("toggleButtons")[0],
        document.fullscreenElement
      );
      if (!document.fullscreenElement) {
        document.getElementById("fullScreenToggle").checked = false;
        myCodeMirror[0].setSize(null, 400); // Default height
      }
    });

  // Word Wrap toggle
  const wordWrapToggle = document.getElementById("wordWrapToggle");
  wordWrapToggle.addEventListener("click", (e) => {
    if (e.target.checked) {
      myCodeMirror[0].setOption("lineWrapping", true);
    } else {
      myCodeMirror[0].setOption("lineWrapping", false);
    }
  });
  // JS for settings
  const toggleLint = document.getElementById("lintToggleBtn");
  toggleLint.addEventListener("change", () => {
    if (toggleLint.checked) {
      myCodeMirror[0].setOption("lint", true);
    } else {
      myCodeMirror[0].setOption("lint", false);
    }
  });
  // JS for the primary color toggle
  const root = document.querySelector(":root");
  let rs = getComputedStyle(root);
  const color = document.getElementById("prmyColorBtn");
  color.addEventListener("change", () => {
    if (color.value != rs.getPropertyValue("--link-primary")) {
      if (
        confirm(`Are you sure you want to change the color to ${color.value}?`)
      ) {
        changeObj.color = color.value;
        root.style.setProperty("--link-primary", color.value);
      } else {
        color.value = changeObj.color;
      }
    }
  });
  // Font family setting
  const fontStyle = document.getElementById("fontStyleBtn");

  fontStyle.addEventListener("change", () => {
    if (fontStyle.value != rs.getPropertyValue("--font-family")) {
      if (
        confirm(
          `Are you sure you want to change the font style to ${fontStyle.value}?`
        )
      ) {
        changeObj.fontStyle = fontStyle.value;
        root.style.setProperty("--font-family", fontStyle.value);
      } else {
        fontStyle.value = changeObj.fontStyle;
      }
    }
  });
  // Font size
  fontSize.addEventListener("change", handleFontSize);
  // keyMaps
  keyMap.addEventListener("change", handleKeyMaps);
  // themeChange
  pageTheme.addEventListener("change", handlePageTheme);

  document.getElementById("codeDownloadBtn").addEventListener("click", () => {
    console.save(
      myCodeMirror[0].getDoc().getValue(),
      `${
        document.getElementById("pasteName").value
          ? document.getElementById("pasteName").value
          : "untitled"
      }.${
        extensionsObj.hasOwnProperty(languageSelect.value)
          ? extensionsObj[languageSelect.value]
          : languageSelect.value
      }`
    );
  });
  // Warn before closing
  window.addEventListener("beforeunload", function (e) {
    var confirmationMessage =
      "It looks like you have been editing something. " +
      "If you leave before saving, your changes will be lost.";

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
  });
}

// document.getElementById("codeForm").addEventListener("submit", (e) => {
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

    if (typeof data === "object") {
      data = JSON.stringify(data, undefined, 4);
    }

    var blob = new Blob([data], { type: "text/json" }),
      e = document.createEvent("MouseEvents"),
      a = document.createElement("a");

    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
    e.initMouseEvent(
      "click",
      true,
      false,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
    a.dispatchEvent(e);
  };
})(console);

init();
makeDropZone(document.getElementById("text-editor"));
