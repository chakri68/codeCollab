import "../lib/codemirror.js";
import "../addon/fullScreen.js";
import "../addon/fold/foldcode.js";
import "../addon/fold/foldgutter.js";
import "../addon/fold/allfolds.js";
import "../addon/simple.js";

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
const languageSelect = document.getElementById("viewLanguage");
const themeSelect = document.getElementById("theme");
const textArea = document.getElementById("codeView");
const fontSize = document.getElementById("code-font-size");
const color = document.getElementById("prmyColorBtn");
const customToggle = document.getElementById("customToggle");
const cpyLink = document.getElementById("cpyLink");
const embed = document.getElementById("embed");
const cpyCode = document.getElementById("cpyCode");

let optionObj = {
  autoCloseBrackets: true,
  lineNumbers: true,
  theme: "monokai",
  matchBrackets: true,
  lineWrapping: true,
};
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

function codeEditorinit(obj) {
  myCodeMirror.push(
    CodeMirror.fromTextArea(obj, {
      lineNumbers: true,
      theme: themeSelect.value,
      lineWrapping: true,
      gutters: [
        "CodeMirror-lint-markers",
        "CodeMirror-linenumbers",
        "CodeMirror-foldgutter",
      ],
      foldGutter: true,
      highlightLines: true,
      cursorScrollMargin: 20,
      readOnly: true,
      cursorBlinkRate: -1,
      extraKeys: { "Ctrl-Space": "autocomplete" },
    })
  );
}

window.myCodeMirror = myCodeMirror;

export function updateCode(newCode) {
  myCodeMirror[0].setOption("value", newCode);
}

// Adding an event listener:
textArea.addEventListener("change", () => {
  updateCode(textArea.value);
});

function handleCustomToggle(e) {
  if (e.target.checked) {
    // color.disabled = false;
    root.style.setProperty("--link-primary", color.value);
  } else {
    // color.disabled = true;
    root.style.setProperty(
      "--link-primary",
      "hsl(var(--text-h), var(--text-s), var(--text-l))"
    );
    // try {
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

function handleFontSize(e) {
  if (e.target.value != rs.getPropertyValue("--code-font-size")) {
    if (
      confirm(
        `Are you sure you want to chnage the font size to ${e.target.value}?`
      )
    ) {
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

function handleLanguageSelect() {
  let currLanguage = languageSelect.innerText;
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
      default:
        optionObj.mode = languageSelect.innerText;
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
      .setAttribute("action", urlObj[currLanguage]);
  });
}

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

async function copyToClipboard(str) {
  navigator.clipboard.writeText(str).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
      return true;
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
      return false;
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

function init() {
  codeEditorinit(textArea);
  handleLanguageSelect();
  document.querySelector(".CodeMirror").style.height = "auto";
  document.getElementById("compilerBtn").addEventListener("click", () => {
    myCodeMirror[0].save();
  });
  themeSelect.addEventListener("change", () => {
    myCodeMirror[0].setOption("theme", themeSelect.value);
  });
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

  // JS for the primary color toggle
  customToggle.addEventListener("change", handleCustomToggle);

  color.addEventListener("change", () => {
    if (customToggle.ariaChecked) {
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
  // themeChange
  pageTheme.addEventListener("change", handlePageTheme);

  document
    .getElementById("codeDownloadBtn")
    .addEventListener("click", codeDownload);
  cpyLink.addEventListener("click", () => {
    copyToClipboard(window.location.href).then((res) => {
      if (res) alert("Link copied!");
    });
  });
  cpyCode.addEventListener("click", () => {
    copyToClipboard(myCodeMirror[0].getValue()).then((res) => {
      if (res) alert("Copied!");
    });
  });
  setLanguageColor();
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
