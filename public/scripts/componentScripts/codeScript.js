const myTextArea = document.createElement("textarea");
console.log("codeScript");
myTextArea.id = "code";
document.getElementById("text-editor").appendChild(myTextArea);
let myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
  lineNumbers: true,
  mode: "javascript",
  theme: "monokai",
});
