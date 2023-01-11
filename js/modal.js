(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    header: document.querySelector(".header"),
    main: document.querySelector(".main"),
    footer: document.querySelector(".footer"),
  };

  refs.openModalBtn.addEventListener("click", toggleModalOpen);
  refs.closeModalBtn.addEventListener("click", toggleModalClose);

  function toggleModalOpen() {
    refs.modal.classList.toggle("is-hidden");

    refs.header.setAttribute("inert", "enabled");
    refs.main.setAttribute("inert", "enabled");
    refs.footer.setAttribute("inert", "enabled");
    refs.modal.removeAttribute("inert");
  }

  function toggleModalClose() {
    refs.modal.classList.toggle("is-hidden");
    
    refs.header.removeAttribute("inert");
    refs.main.removeAttribute("inert");
    refs.footer.removeAttribute("inert");
    refs.modal.setAttribute("inert", "enabled");
  }

})();