let changePage = (page) => {
  const cards = document.querySelectorAll(".product-card");
  const pages = document.querySelectorAll(".page");

  cards.forEach((card) => {
    card.style.display = card.classList.contains(`page-${page}`)
      ? "block"
      : "none";
  });

  pages.forEach((p) => p.classList.remove("active"));
  pages[page - 1].classList.add("active");
};
