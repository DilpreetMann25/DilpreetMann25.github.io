document.addEventListener("DOMContentLoaded", () => {
  // Scroll to the "Home" section on page load
  const homeSection = document.getElementById("home");
  window.scrollTo({
    top: homeSection.offsetTop,
    behavior: "auto", // Instantly scroll to the top without animation
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      // Smooth scrolling to the target section
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth", // Smooth scrolling
      });
    });
  });
});