import("../mode/xml/xml.js");
import("../mode/javascript/javascript.js");
import("../mode/css/css.js");

const lintLanguages = ["css", "javascript", "json", "yaml", "html"];
var myCodeMirror = [];

myCodeMirror.push(
  CodeMirror.fromTextArea(document.getElementById("code"), {
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
  })
);

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
document.getElementById("compilerBtn").addEventListener("click", () => {
  myCodeMirror[0].save();
});

// document.getElementById("codeForm").addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (document.getElementById("code").value != "") {
//     document.getElementById("codeForm").submit();
//   }
// });

//  End

const languageSelect = document.getElementById("language");
const themeSelect = document.getElementById("theme");
let optionObj = {
  autoCloseBrackets: true,
  lineNumbers: true,
  theme: "monokai",
  matchBrackets: true,
  lineWrapping: true,
};

themeSelect.addEventListener("change", () => {
  myCodeMirror[0].setOption("theme", themeSelect.value);
});

languageSelect.addEventListener("change", () => {
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
});

// FullScreen Toggle

function toggleScreenSize(e) {
  if (e.key == "Escape") {
    e.key.preventDefault();
    // myCodeMirror[0].setOption("fullScreen", false);
    window.removeEventListener("keydown", toggleScreenSize);
  }
}

const toggleFullScreen = document.getElementById("fullScreenToggle");
toggleFullScreen.addEventListener("click", (e) => {
  if (e.target.checked) {
    e.target.checked = false;
    // myCodeMirror[0].setOption("fullScreen", "true");
    document.getElementsByClassName("CodeMirror")[0].requestFullscreen();
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
      console.log("Changed");
      root.style.setProperty("--link-primary", color.value);
    }
  }
});

// Local Storage

let extensionsObj = {
  python: "py",
  text: "txt",
  javascript: "js",
  ruby: "rb",
  rust: "rs",
  sass: "scss",
  cobol: "cbl",
  fortran: "f60",
  shell: "sh",
  verilog: "v",
  csharp: "cs",
};

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

document.getElementById("codeDownloadBtn").addEventListener("click", () => {
  console.save(
    myCodeMirror[0].getDoc().getValue(),
    `cE-${document.getElementById("pasteName").value}.${
      extensionsObj.hasOwnProperty(optionObj.mode)
        ? extensionsObj[optionObj.mode]
        : optionObj.mode
    }`
  );
});
