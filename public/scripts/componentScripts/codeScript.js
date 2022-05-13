import("../mode/xml/xml.js");
import("../mode/javascript/javascript.js");
import("../mode/css/css.js");

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
  })
);

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
  if (["c", "cpp", "java", "text"].includes(languageSelect.value)) {
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
  });
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
