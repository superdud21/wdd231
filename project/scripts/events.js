document.addEventListener("DOMContentLoaded", () => {
    const events = [
      {
        title: "Field Day 2025",
        date: "June 22, 2025",
        time: "10:00 AM – 6:00 PM",
        location: "Rivertown Park Pavilion",
        description: "Join us for a day of portable operations, public outreach, and fun!"
      },
      {
        title: "Monthly Club Meeting",
        date: "July 1, 2025",
        time: "7:00 PM",
        location: "Library Conference Room",
        description: "We’ll be discussing repeater improvements and upcoming tech nights."
      },
      {
        title: "Digital Modes Workshop",
        date: "July 15, 2025",
        time: "6:30 PM",
        location: "Community Center",
        description: "Learn FT8, JS8Call, and how to set up your own digital rig with hands-on demos."
      }
    ];
  
    const container = document.getElementById("events-container");
  
    if (!container) return;
  
    container.innerHTML = events.map(event => {
      return `
        <div class="event-card">
          <h3>${event.title}</h3>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Time:</strong> ${event.time}</p>
          <p><strong>Location:</strong> ${event.location}</p>
          <p>${event.description}</p>
        </div>
      `;
    }).join("");
  });
  