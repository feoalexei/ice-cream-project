// PRODUCTS MODAL
(() => {
  const refs = {
    openProductsModalBtn: document.querySelectorAll("[data-products-modal-open]"),
    closeProductsModalBtn: document.querySelector("[data-products-modal-close]"),
    productsModal: document.querySelector("[data-products-modal]"),
  };
  refs.openProductsModalBtn.addEventListener('click', remove);
  refs.openProductsModalBtn.addEventListener('click', remove);
  refs.closeProductsModalBtn.addEventListener("click", add);

  function remove() {
    refs.product-modal.classList.remove('is-hidden');
  }

  function add() {
    refs.product-modal.classList.add('is-hidden');
  }


})();