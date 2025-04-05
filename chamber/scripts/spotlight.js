const spotlightIDs = ["spotlight1", "spotlight2", "spotlight3"];

async function loadSpotlights() {
  const response = await fetch("data/members.json");
  const members = await response.json();

  const eligible = members.filter(m => m.membership === 2 || m.membership === 3);
  const selected = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);

  selected.forEach((member, i) => {
    const container = document.getElementById(spotlightIDs[i]);
    container.innerHTML = `
      <div class="logo-wrapper">
        <img src="images/${member.logo}" alt="${member.name} Logo">
      </div>
      <div class="info">
        <h4>${member.name}</h4>
        <p><em>${member.tagline}</em></p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        <p><strong>Membership:</strong> ${member.membership === 3 ? "Gold" : "Silver"}</p>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", loadSpotlights);