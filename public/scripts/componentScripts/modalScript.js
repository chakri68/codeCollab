let customModalName = "customModal";

// Functions to open and close a modal
function openModal($el) {
  $el.classList.add("is-active");
  document.getElementsByTagName("html")[0].classList.add("is-clipped");
}

function closeModal($el) {
  $el.classList.remove("is-active");
  document.getElementsByTagName("html")[0].classList.remove("is-clipped");
}

function closeAllModals() {
  (document.querySelectorAll(".modal") || []).forEach(($modal) => {
    closeModal($modal);
  });
}

// Add a click event on buttons to open a specific modal
(document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
  const modal = $trigger.getAttribute("data-target");
  const $target = document.getElementById(modal);

  $trigger.addEventListener("click", () => {
    openModal($target);
  });
});

// Add a click event on various child elements to close the parent modal
(
  document.querySelectorAll(
    ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
  ) || []
).forEach(($close) => {
  const $target = $close.closest(`.modal:not(#${customModalName})`);

  $close.addEventListener("click", () => {
    if ($target) closeModal($target);
  });
});

// Add a keyboard event to close all modals
document.addEventListener("keydown", (event) => {
  const e = event || window.event;

  if (e.keyCode === 27) {
    // Escape key
    closeAllModals();
  }
});

// For dropdowns

var $dropdowns = document.querySelectorAll(
  ".dropdown-trigger:not(.is-hoverable)"
);

if ($dropdowns.length > 0) {
  $dropdowns.forEach(function ($el) {
    $el.addEventListener("click", function (event) {
      event.stopPropagation();
      $el.classList.toggle("is-active");
    });
  });

  // document.addEventListener("click", function (event) {
  //   closeDropdowns();
  // });
}

function closeDropdowns() {
  $dropdowns.forEach(function ($el) {
    $el.classList.remove("is-active");
  });
}
