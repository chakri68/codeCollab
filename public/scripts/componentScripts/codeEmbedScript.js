import "../lib/codemirror.js";
import "../addon/xml-fold.js";
import "../addon/fold/foldcode.js";
import "../addon/fold/foldgutter.js";
import "../addon/fold/allfolds.js";
import "../addon/simple.js";
import "../mode/xml/xml.js";
import "../mode/javascript/javascript.js";
import "../mode/css/css.js";

const language = document.getElementById("viewLanguage");

// let appendState = false;

// End
let languageColors = {
  text: { primary: "#2766a0", light: false },
  python: { primary: "#ffde4f", light: true },
  cpp: { primary: "#004481", light: false },
  java: { primary: "#e76f00", light: false },
  c: { primary: "#293595", light: false },
  javascript: { primary: "#f0db4f", light: true },
  lua: { primary: "#010080", light: false },
  ruby: { primary: "#910d04", light: false },
  rust: { primary: "#f74b00", light: false },
  htmlmixed: { primary: "#e44d26", light: false },
  xml: { primary: "#b826b8", light: false },
  jsx: { primary: "#eeda49", light: true },
  css: { primary: "#264de4", light: false },
  sass: { primary: "#264de4", light: false },
  cobol: { primary: "#005ca5", light: false },
  fortran: { primary: "#725196", light: false },
  shell: { primary: "#293036", light: false },
  verilog: { primary: "#0000aa", light: false },
  csharp: { primary: "#290065", light: false },
};
var myCodeMirror = [];
const languageSelect = document.getElementById("viewLanguage");
const textArea = document.getElementById("codeView");
const tabSize = document.getElementById("tabSize");
const cpyCode = document.getElementById("cpyCode");
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
      lineNumbers: true,
      theme: "monokai",
      lineWrapping: true,
      gutters: [
        "CodeMirror-lint-markers",
        "CodeMirror-linenumbers",
        "CodeMirror-foldgutter",
      ],
      foldGutter: true,
      indentUnit: tabSize ? parseInt(tabSize.value) : 4,
      mode: language,
      readOnly: true,
      cursorBlinkRate: -1,
    })
  );
}

window.myCodeMirror = myCodeMirror;

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
  julia: "jl",
};

function handleLanguageSelect() {
  let currLanguage = language.innerText;
  let path;
  if (!urlObj.hasOwnProperty(currLanguage)) {
    document.getElementById("compilerBtn").disabled = true;
  } else {
    document.getElementById("compilerBtn").disabled = false;
  }
  if (["c", "cpp", "java", "text", "csharp"].includes(currLanguage)) {
    path = `../mode/clike/clike.js`;
  } else {
    path = `../mode/${currLanguage}/${currLanguage}.js`;
  }
  import(path).then(() => {
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
      case "julia":
        optionObj.mode = "text/x-julia";
        break;
      default:
        optionObj.mode = currLanguage;
        break;
    }
    myCodeMirror[0].setOption("mode", optionObj.mode);
    document
      .getElementById("codeForm")
      .setAttribute("action", urlObj[currLanguage]);
  });
}

async function copyToClipboard(str) {
  return navigator.clipboard.writeText(str);
}

function setLanguageColor() {
  if (languageColors.hasOwnProperty(languageSelect.innerText)) {
    let obj = languageColors[languageSelect.innerText];
    languageSelect.style.setProperty(
      "background-color",
      obj.primary,
      "important"
    );
    if (!obj.light)
      languageSelect.style.setProperty(
        "color",
        "var(--text-primary)",
        "important"
      );
    else
      languageSelect.style.setProperty("color", "var(--bg-dark)", "important");
  }
}

function codeDownload() {
  let name = document.getElementById("pasteTitle").innerText;
  console.save(
    myCodeMirror[0].getDoc().getValue(),
    `${name ? name : "untitled"}.${
      extensionsObj.hasOwnProperty(languageSelect.innerText)
        ? extensionsObj[languageSelect.innerText]
        : languageSelect.innerText
    }`
  );
}

function init() {
  codeEditorinit(textArea);
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
  cpyCode.addEventListener("click", () => {
    copyToClipboard(myCodeMirror[0].getValue()).then(() => {
      alert("Copied!");
    });
  });
  document
    .getElementById("codeDownloadBtn")
    .addEventListener("click", codeDownload);
  setLanguageColor();
  handleLanguageSelect();
  // Edit styles
  document.body.style.padding = "5px 5px 15px 5px";
  document.querySelector(".CodeMirror").style.height = "150vh";
  document.querySelector(".CodeMirror").scrollIntoView();
}
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
