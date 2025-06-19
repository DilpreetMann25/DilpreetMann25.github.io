document.addEventListener("DOMContentLoaded", () => {
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const description = item.querySelector("p");
      if (description) {
        description.style.opacity = "1";
        description.style.pointerEvents = "auto";
      }
    });

    item.addEventListener("mouseleave", () => {
      const description = item.querySelector("p");
      if (description) {
        description.style.opacity = "0";
        description.style.pointerEvents = "none";
      }
    });
  });
});