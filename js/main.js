function setupHeader() {
  const langBtn = document.getElementById("lang-btn");
  const langMenu = document.getElementById("lang-menu");

  if (langBtn && langMenu) {
    langBtn.addEventListener("click", () => {
      langMenu.style.display = langMenu.style.display === "block" ? "none" : "block";
    });

    langMenu.querySelectorAll("li").forEach((item) => {
      item.addEventListener("click", () => {
        langBtn.textContent = item.textContent + " ▾";
        langMenu.style.display = "none";
        // language switching logic here
      });
    });
  }

  const burgerBtn = document.getElementById("burger-btn");
  const closeBtn = document.getElementById("close-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = mobileMenu?.querySelectorAll("a") || [];

  if (burgerBtn && closeBtn && mobileMenu) {
    const openMenu = () => {
      mobileMenu.classList.add("active");
      mobileMenu.setAttribute("aria-hidden", "false");
      burgerBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
      burgerBtn.focus();
      mobileMenu.classList.remove("active");
      mobileMenu.setAttribute("aria-hidden", "true");
      burgerBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };

    burgerBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

    mobileLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
        closeMenu();
      }
    });
  }
}
