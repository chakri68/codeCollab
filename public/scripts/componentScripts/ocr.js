import { updateCode } from "./codeScript.js";
// import detectLang from "../lang-detect/index.js";
const fileUpload = document.getElementById("selectFile");
const customModal = document.getElementById("customModal");
const modalTitle = document.querySelector("#customModal .modalTitle");
const modalBody = document.querySelector("#customModal .modalBody");
const types = ["image/jpeg", "image/png", "image/svg+xml"];
// const worker = new Tesseract.TesseractWorker();
// worker
//   .recognize(file, $("#langsel").val())
//   .progress(function (packet) {
//     console.info(packet);
//     progressUpdate(packet);
//   })
//   .then(function (data) {
//     console.log(data);
//     progressUpdate({ status: "done", data: data });
//   });
function recogFile(files) {
  if (files.length == 0) return;
  let file = files[0];
  let rxTitle = /(.+)\..+$/g;
  let title = rxTitle.exec(file.name)[1];
  if (title) document.getElementById("pasteName").value = title;
  if (types.includes(file.type)) {
    return 1;
  } else return 0;
}

function openStatusModal(title) {
  modalTitle.textContent = title;
  modalBody.innerHTML =
    "<p>Status: <span class='status'>Initializing...</span></p><progress class='progress is-small' value='0' max='1'>0%</progress>";
  openModal(customModal);
}

function updateLoadingBar({ status, progress }) {
  document.querySelector("#customModal .status").textContent = status;
  document.querySelector("#customModal progress").value = progress;
  document.querySelector("#customModal progress").textContent = `${
    progress * 100
  }%`;
}

function setLanguage(text) {
  let lang = detectLang(text);
  if (lang != "Unknown") {
    document.getElementById("language").value = lang;
    document.getElementById("language").dispatchEvent(new Event("change"));
  }
}

function initTesseract() {
  if (recogFile(this.files)) {
    openStatusModal("Recognising text");
    Tesseract.recognize(this.files[0], "eng", {
      logger: (m) => {
        updateLoadingBar(m);
      },
    }).then(({ data: { text } }) => {
      updateCode(text);
      //   setLanguage(text);
      closeModal(customModal);
    });
  }
}

fileUpload.addEventListener("change", initTesseract, true);
