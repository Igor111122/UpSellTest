document.addEventListener("DOMContentLoaded", function () {
  const buyNowButtons = document.querySelectorAll(".buy-now-button");

  buyNowButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productId = this.closest(".product-card").dataset.productId;
      this.classList.add("loading");
      // Симулюємо додавання продукту в кошик
      setTimeout(() => {
        this.classList.remove("loading");
        alert("Product added to cart");
        // Можете додати логіку для додавання продукту в кошик тут
      }, 1000);
    });
  });

  const productCards = document.querySelectorAll(".product-card");
  if (productCards.length > 3) {
    // Ініціалізація слайдера, якщо продуктів більше 3
    const swiperContainer = document.createElement("div");
    swiperContainer.classList.add("swiper-container");
    const swiperWrapper = document.createElement("div");
    swiperWrapper.classList.add("swiper-wrapper");

    productCards.forEach((card) => {
      const swiperSlide = document.createElement("div");
      swiperSlide.classList.add("swiper-slide");
      swiperSlide.appendChild(card);
      swiperWrapper.appendChild(swiperSlide);
    });

    swiperContainer.appendChild(swiperWrapper);
    document.querySelector(".products-grid").replaceWith(swiperContainer);

    new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
});