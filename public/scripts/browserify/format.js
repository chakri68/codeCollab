var beautify = require("js-beautify").js;
const tabSize = document.getElementById("tabSize");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
  window.myCodeMirror[0].setOption(
    "value",
    beautify(window.myCodeMirror[0].getDoc().getValue(), {
      indent_size: parseInt(tabSize.value),
    })
  );
});
