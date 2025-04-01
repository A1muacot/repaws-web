document.addEventListener("DOMContentLoaded", () => {
    const productImages = document.querySelectorAll(".product-card img");
  
    productImages.forEach((img) => {
        let i = 1;
        img.addEventListener("click", () => {
          window.location.href = `/product/${i}`;
          i++;
          if (i == 4) i = 1;
        });
    });
  });