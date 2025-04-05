document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    // Toggle the navigation menu on small screens
    menuToggle.addEventListener("click", () => {
        navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
    });

    // Highlight the active link for wayfinding
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll("nav ul li a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});