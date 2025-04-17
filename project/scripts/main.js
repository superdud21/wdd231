document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navDropdown = document.getElementById("navDropdown");
  const closeBtn = document.getElementById("closeBtn");

  hamburger.addEventListener("click", () => {
    navDropdown.classList.toggle("open");
  });

  closeBtn.addEventListener("click", () => {
    navDropdown.classList.remove("open");
  });
});

const visitKey = "visitCount";
let visitCount = Number(localStorage.getItem(visitKey)) || 0;
visitCount++;
localStorage.setItem(visitKey, visitCount);

const visitDisplay = document.getElementById("visitCount");
if (visitDisplay) {
  visitDisplay.textContent = visitCount;
}
