// PRODUCTS MODAL
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-products-modal-open]"),
    openModalBtn2: document.querySelector("[data-products-modal-open2]"),
    openModalBtn3: document.querySelector("[data-products-modal-open3]"),
    closeModalBtn: document.querySelector("[data-products-modal-close]"),
    modal: document.querySelector("[data-products-modal]"),
  };

  refs.openModalBtn.addEventListener('click', remove);
  refs.openModalBtn2.addEventListener('click', remove);
  refs.openModalBtn3.addEventListener('click', remove);
  refs.closeModalBtn.addEventListener("click", add);

  function remove() {
    refs.modal.classList.remove('is-hidden');
  }

  function add() {
    refs.modal.classList.add('is-hidden');
  }

})();