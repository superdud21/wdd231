const container = document.getElementById("discover-cards");

fetch("data/discover.json")
  .then((response) => response.json())
  .then((items) => {
    items.forEach((item, index) => {
      const card = document.createElement("div");
      card.classList.add("card", `card${index + 1}`);

      card.innerHTML = `
        <h2>${item.title}</h2>
        <figure>
          <img src="${item.img}" alt="${item.title}">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button onclick="location.href='${item.link}'">Learn More</button>
      `;

      container.appendChild(card);
    });
  })
  .catch((err) => console.error("Failed to load discover data:", err));

  const sidebarMessage = document.getElementById("sidebar-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();
  
  if (!lastVisit) {
    sidebarMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysPassed = Math.floor((now - Number(lastVisit)) / msPerDay);
  
    if (daysPassed < 1) {
      sidebarMessage.textContent = "Back so soon! Awesome!!";
    } else if (daysPassed === 1) {
      sidebarMessage.textContent = "You last visited 1 day ago.";
    } else {
      sidebarMessage.textContent = `You last visited ${daysPassed} days ago.`;
    }
  }
  
  localStorage.setItem("lastVisit", now);
  