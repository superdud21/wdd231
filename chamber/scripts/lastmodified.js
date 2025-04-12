document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.getElementById("lastModified");
    if (lastModified) {
      lastModified.textContent = document.lastModified;
    }
  
    const timestamp = document.getElementById("timestamp");
    if (timestamp) {
      timestamp.value = new Date().toISOString();
    }
  
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
    }
  
    document.querySelectorAll('.card a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const modal = document.querySelector(this.getAttribute('href'));
        if (modal) modal.showModal();
      });
    });
  });
  