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




document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  document.querySelectorAll(".product-card img").forEach((img) => {
    img.addEventListener("click", (e) => {
      e.preventDefault(); // ⛔ Prevent link
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector(".lightbox-img");

  document.querySelectorAll(".lightbox-trigger").forEach((img) => {
    img.addEventListener("click", (e) => {
      e.preventDefault();
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
});
