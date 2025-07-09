document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang-btn");
  const langMenu = document.getElementById("lang-menu");

  // Toggle dropdown visibility
  if (langBtn && langMenu) {
    langBtn.addEventListener("click", () => {
      langMenu.classList.toggle("visible");
    });

    // Hide when clicking outside
    document.addEventListener("click", (e) => {
      if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.classList.remove("visible");
      }
    });

    // Handle language selection
    langMenu.addEventListener("click", function (e) {
      if (e.target && e.target.matches("li[data-lang]")) {
        const selectedLang = e.target.getAttribute("data-lang");
        loadLanguage(selectedLang);

        // Update button label
        langBtn.textContent = e.target.textContent + " ▾";

        // Close dropdown
        langMenu.classList.remove("visible");
      }
    });
  }
});

function loadLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Language file not found: ${lang}`);
      }
      return res.json();
    })
    .then((data) => {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (data[key]) el.textContent = data[key];
      });

      document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (data[key]) el.setAttribute("placeholder", data[key]);
      });
    })
    .catch((err) => {
      console.error("Translation error:", err);
    });
}
