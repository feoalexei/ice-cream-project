(() => {
    const refs = {
      openProductsModalBtn: document.querySelector("[data-ProductsModal-open]"),
      closeProductsModalBtn: document.querySelector("[data-ProductsModal-close]"),
      ProductsModal: document.querySelector("[data-ProductsModal]"),
    };
  
    refs.openProductsModalBtn.addEventListener("click", toggleProductsModal);
    refs.closeProductsModalBtn.addEventListener("click", toggleProductsModal);
  
    function toggleModal() {
      refs.ProductsModal.classList.toggle("is-hidden");
    }
  })();