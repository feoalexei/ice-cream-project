(() => {
    const refs = {
      openProductsModalBtn: document.querySelector("[data-products-modal-open]"),
      closeProductsModalBtn: document.querySelector("[data-products-modal-close]"),
      modal: document.querySelector("[data-products-modal]"),
    };
  
    refs.openProductsModalBtn.addEventListener("click", toggleProductsModal);
    refs.closeProductsModalBtn.addEventListener("click", toggleProductsModal);
  
    function toggleModal() {
      refs.ProductsModal.classList.toggle("is-hidden");
    }
  })();