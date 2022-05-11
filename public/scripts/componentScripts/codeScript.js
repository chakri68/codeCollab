const myTextArea = document.createElement("textarea");
myTextArea.id = "code";
document.getElementById("text-editor").appendChild(myTextArea);
var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
  autoCloseBrackets: true,
  lineNumbers: true,
  mode: "javascript",
  theme: "monokai",
  matchBrackets: true,
});
