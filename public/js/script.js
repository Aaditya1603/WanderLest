// Disable form submissions if there are invalid fields
(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false,
    );
  });
})();

// Custom Interaction Features
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const priceFilterBtn = document.getElementById("price-filter-btn");

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
    if (themeToggleBtn) themeToggleBtn.innerHTML = "☀️ Light Mode";
  } else {
    document.body.classList.remove("dark-theme");
    if (themeToggleBtn) themeToggleBtn.innerHTML = "🌙 Dark Mode";
  }

  // 2. Add click event listener to toggle the theme dynamically
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");

      // Update button text and save preference to localStorage
      if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        themeToggleBtn.innerHTML = "☀️ Light Mode";
      } else {
        localStorage.setItem("theme", "light");
        themeToggleBtn.innerHTML = "🌙 Dark Mode";
      }
    });
  }

  if (priceFilterBtn) {
    priceFilterBtn.addEventListener("click", () => {
      const container = document.querySelector(".row");
      const items = Array.from(document.querySelectorAll("[data-price]"));
      if (container && items.length > 0) {
        items.sort((itemA, itemB) => {
          const valA = parseFloat(itemA.getAttribute("data-price")) || 0;
          const valB = parseFloat(itemB.getAttribute("data-price")) || 0;
          return valA - valB;
        });
        container.innerHTML = "";
        items.forEach((orderedItem) => container.appendChild(orderedItem));
      }
    });
  }
});
