const languageSelect = document.getElementById("language");
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
    let optionObj = {
      autoCloseBrackets: true,
      lineNumbers: true,
      theme: "monokai",
      matchBrackets: true,
    };
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
    document.getElementsByClassName("CodeMirror")[0].remove();
    var myCodeMirror = CodeMirror.fromTextArea(
      document.getElementById("code"),
      optionObj
    );
  });
});

var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("code"), {
  autoCloseBrackets: true,
  lineNumbers: true,
  theme: "monokai",
  matchBrackets: true,
});
