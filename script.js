document.addEventListener("DOMContentLoaded", () => {
    const productImages = document.querySelectorAll(".product-card img");
  
    productImages.forEach((img, index) => {
      if (index < 3) {
        img.style.cursor = "pointer";
        img.addEventListener("click", () => {
          window.location.href = `/product/${index + 1}`;
        });
      }
    });
  });