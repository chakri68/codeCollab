import "../lib/codemirror.js";
import "../addon/closeBrackets.js";
import "../addon/matchBrackets.js";
import "../addon/matchTags.js";
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
import "../addon/hint/show-hint.js";

const hintLanguages = {
  css: "../addon/hint/css-hint.js",
  htmlmixed: ["../addon/hint/html-hint.js", "../addon/hint/xml-hint.js"],
  javascript: "../addon/hint/javascript-hint.js",
  sql: "../addon/hint/sql-hint.js",
  xml: "../addon/hint/xml-hint.js",
};

const popDownTime = 1500;

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
const tabSize = document.getElementById("tabSize");
const color = document.getElementById("prmyColorBtn");
const customToggle = document.getElementById("customToggle");
const saveBtn = document.getElementById("saveBtn");
const customModal = document.getElementById("customModal");
const hintToggle = document.getElementById("hintToggle");
const uploadBtn = document.getElementById("uploadBtn");
const expireTime = document.getElementById("expireTime");
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
      theme: themeSelect.value,
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
      indentUnit: tabSize ? parseInt(tabSize.value) : 4,
      cursorScrollMargin: 20,
      mode: languageSelect.value,
      extraKeys: { "Ctrl-Space": "autocomplete" },
    })
  );
}

window.myCodeMirror = myCodeMirror;

export function updateCode(newCode) {
  myCodeMirror[0].setOption("value", newCode);
}

function handlePreviousSession() {
  if (localStorage.length != 0) {
    if (confirm("Restore the previous session?")) {
      Restore({
        language: function (res) {
          languageSelect.value = res;
          languageSelect.dispatchEvent(new Event("change")); // Because we need to import some js files for certain languages
        },
        theme: function (res) {
          themeSelect.value = res;
          themeSelect.dispatchEvent(new Event("change"));
        },
        title: function (res) {
          pasteTitle.value = res;
        },
        code: function (res) {
          myCodeMirror[0].setOption("value", res);
        },
        pgTheme: function (res) {
          if (pageTheme) {
            pageTheme.value = res;
            pageTheme.dispatchEvent(new Event("change"));
          }
        },
      });
    } else {
      localStorage.clear();
    }
  }
}

// Adding an event listener:
textArea.addEventListener("change", () => {
  updateCode(textArea.value);
});

const modalName = "customModal";
const modalTitle = document.querySelector(`#${modalName} .modalTitle`);
const modalBody = document.querySelector(`#${modalName} .modalBody`);
const modalBorder = document.querySelector(`#${modalName} .modalBorder`);
function openCustomModal(
  title,
  bodyJSX,
  color = null,
  { isClosable = true, autoClose = null } = {}
) {
  modalTitle.textContent = title;
  modalBody.innerHTML = bodyJSX;
  modalBorder.style.borderColor = color;
  if (color) modalTitle.style.color = color;
  if (autoClose != null)
    openModal(customModal, { isClosable: isClosable, autoClose: autoClose });
  else openModal(customModal, { isClosable: isClosable });
}

function Save(obj, popup) {
  let flag = false;
  for (let i in obj) {
    try {
      localStorage.setItem(i, obj[i].trim());
    } catch (error) {
      flag = true;
      console.log(error);
    }
  }
  if (popup) {
    if (flag)
      openCustomModal("Not Saved", "<p>Saving failed...</p>", "red", {
        autoClose: popDownTime,
      });
    else
      openCustomModal("Saved", "<p>Saved succesfully!</p>", "green", {
        autoClose: popDownTime,
      });
  }
}

function Restore(obj) {
  console.log(languageSelect.value);
  let flag = false;
  for (let i in obj) {
    try {
      if (localStorage.hasOwnProperty(i)) obj[i](localStorage.getItem(i));
    } catch (error) {
      flag = true;
      console.log(error);
    }
  }
  if (flag)
    openCustomModal(
      "Restoration failed",
      "<p>The code couldn't be restored properly...</p>",
      "red",
      { autoClose: popDownTime }
    );
  else
    openCustomModal("Restored", "<p>Restored succesfully!</p>", "green", {
      autoClose: popDownTime,
    });
}

function handleSave(popup = true) {
  Save(
    {
      code: myCodeMirror[0].getDoc().getValue(),
      language: languageSelect.value,
      theme: themeSelect.value,
      title: pasteTitle.value,
      pgTheme: pageTheme ? pageTheme.value : "codeEditor",
    },
    popup
  );
}

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
  if (!flag) openModal(errorPopUp, { isClosable: true });
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
  julia: "jl",
};

function handleLanguageSelect() {
  let currLanguage = languageSelect.value;
  if (hintLanguages.hasOwnProperty(currLanguage)) {
    if (!Array.isArray(hintLanguages[currLanguage])) {
      import(hintLanguages[currLanguage]).then(() => {
        console.log(`Hints for ${currLanguage} loaded`);
      });
    } else {
      for (let i of hintLanguages[currLanguage]) {
        import(i).then(() => {
          console.log(`Hints for ${currLanguage} loaded`);
        });
      }
    }
  }
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
        optionObj.mode = languageSelect.value;
        break;
    }
    myCodeMirror[0].setOption("mode", optionObj.mode);
    document
      .getElementById("codeForm")
      .setAttribute("action", urlObj[currLanguage]);
  });
  if (lintLanguages.includes(currLanguage)) {
    import(`../addon/lint/${currLanguage}-lint.js`).then(() => {
      if (!toggleLint || toggleLint.checked) {
        if (currLanguage == "javascript") {
          myCodeMirror[0].setOption("lint", { esversion: "10" });
        } else myCodeMirror[0].setOption("lint", true);
      }
    });
  }
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function handleHints(e) {
  if (!e.target.checked) {
    myCodeMirror[0].setOption("extraKeys", {});
  } else {
    myCodeMirror[0].setOption("extraKeys", { "Ctrl-Space": "autocomplete" });
  }
}

// CLoud Save Handler

function checkCode() {
  let code = myCodeMirror[0].getValue();
  if (code.length != 0 && code != localStorage.getItem("cloudSave")) {
    return true;
  } else {
    if (code == localStorage.getItem("cloudSave"))
      openCustomModal(
        "Multiple saves",
        "<p>Code with the same contents was just saved</p>",
        "red",
        { autoClose: popDownTime }
      );
    else
      openCustomModal("No code to save", "<p>No code to save</p>", "red", {
        autoClose: popDownTime,
      });
    return false;
  }
}

function checkTitle() {
  let pattern = /$#@!^/i;
  return !pattern.test(pasteTitle.value);
}

function checkExpireTime() {
  return true;
}

function checkAll(funcArr) {
  for (let i of funcArr) {
    if (!i()) return false;
  }
  return true;
}

async function uploadCode() {
  handleSave(false);
  openCustomModal("Cloud Save", "<p>Saving...</p>", "var(--link-primary)", {
    isClosable: false,
  });
  if (checkAll([checkCode, checkTitle, checkExpireTime])) {
    // All checks completed

    // Ask for author
    const author = prompt("Enter the author name", "Anonymous");
    if (author == null) {
      closeModal(customModal);
      return;
    }
    let postObj = {
      title: pasteTitle.value,
      language: languageSelect.value,
      code: myCodeMirror[0].getValue(),
      author: author,
      expire: Date.now() + parseInt(expireTime.value) * 1000,
      // expire: Date.now() + 60 * 1000,
    };
    console.log(postObj);
    const response = await fetch("/api/code", {
      method: "POST",
      body: JSON.stringify(postObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data);
    if (data.success) {
      localStorage.setItem("cloudSave", myCodeMirror[0].getValue());
      console.log("NOICEE!");
      closeModal(customModal);
      window.open(`/${data.pasteId}`, "_self");
    } else {
      closeModal(customModal);
      openModal(errorPopUp, { isClosable: true });
      console.log("SOO CLOSEE");
    }
  } else {
    // Error
    closeModal(customModal);
    openModal(errorPopUp, { isClosable: true });
    console.log("ERRORR!");
  }
}

function init() {
  codeEditorinit(textArea);
  document.getElementById("compilerBtn").addEventListener("click", () => {
    myCodeMirror[0].save();
  });
  themeSelect.addEventListener("change", () => {
    myCodeMirror[0].setOption("theme", themeSelect.value);
  });
  setTheme(pageThemeObj, themeSelect.value);
  themeSelect.addEventListener("change", currentTheme);
  languageSelect.addEventListener("change", handleLanguageSelect);

  // Add ctrl + s event listener
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "s") {
      // Prevent the Save dialog to open
      e.preventDefault();
      // Place your code here
      console.log("CTRL + S");
      handleSave(true);
    }
  });

  // JS for settings
  //   const toggleLint = document.getElementById("lintToggleBtn");
  //   toggleLint.addEventListener("change", () => {
  //     if (toggleLint.checked) {
  //       if (languageSelect.value == "javascript")
  //         myCodeMirror[0].setOption("lint", { esversion: "10" });
  //       else myCodeMirror[0].setOption("lint", true);
  //     } else {
  //       myCodeMirror[0].setOption("lint", false);
  //     }
  //   });
  // JS for the primary color toggle

  // Hints
  //   hintToggle.addEventListener("change", handleHints);
  // Font size
  //   fontSize.addEventListener("change", handleFontSize);
  // keyMaps
  //   keyMap.addEventListener("change", handleKeyMaps);
  // themeChange
  //   pageTheme.addEventListener("change", handlePageTheme);
  // tabSize
  //   tabSize.addEventListener("change", handleTabSize);
  // Handling save btn
  //   saveBtn.addEventListener("click", handleSave);

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
  // Add cloud save
  uploadBtn.addEventListener("click", uploadCode);
  // Warn before closing
  window.addEventListener("beforeunload", function (e) {
    if (
      this.localStorage.getItem("code") &&
      myCodeMirror[0].getDoc().getValue() &&
      !(
        myCodeMirror[0].getDoc().getValue().trim() ==
        this.localStorage.getItem("code").trim()
      )
    ) {
      var confirmationMessage =
        "It looks like you have been editing something. " +
        "If you leave before saving, your changes will be lost.";

      (e || window.event).returnValue = confirmationMessage; //Gecko + IE
      return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
    }
  });
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
makeDropZone(document.getElementById("text-editor"));
handlePreviousSession();
