document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Navbar Scroll Styling
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile Drawer Menu Toggle
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const menuIconOpen = document.getElementById("menu-icon-open");
  const menuIconClose = document.getElementById("menu-icon-close");
  const drawerLinks = document.querySelectorAll(".drawer-link");

  function toggleMenu() {
    const isOpen = mobileDrawer.classList.contains("open");
    if (isOpen) {
      mobileDrawer.classList.remove("open");
      menuIconOpen.classList.remove("hidden");
      menuIconClose.classList.add("hidden");
      document.body.style.overflow = ""; // Enable scroll
    } else {
      mobileDrawer.classList.add("open");
      menuIconOpen.classList.add("hidden");
      menuIconClose.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // Disable scroll when menu is open
    }
  }

  mobileToggle.addEventListener("click", toggleMenu);

  // Close drawer when a link is clicked
  drawerLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileDrawer.classList.remove("open");
      menuIconOpen.classList.remove("hidden");
      menuIconClose.classList.add("hidden");
      document.body.style.overflow = "";
    });
  });

  // Smooth Scroll offset adjustment (optional, CSS scroll-padding-top: 80px takes care of this)
  
  // Custom Smooth Toggle for FAQ Details/Summary (Optional Enhancement)
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const summary = item.querySelector("summary");
    summary.addEventListener("click", (e) => {
      // Close other open items if desired (accordion style)
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.hasAttribute("open")) {
          otherItem.removeAttribute("open");
        }
      });
    });
  });
});
