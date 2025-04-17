export const events = [
    {
      title: "Monthly Net Check-in",
      date: "2025-05-15",
      location: "Rivertown Repeater 147.000 MHz",
      description: "Check-in net for members and emergency readiness."
    },
    {
      title: "Field Day Prep Meeting",
      date: "2025-05-20",
      location: "Clubhouse Basement",
      description: "Organizing setup and station assignments for Field Day."
    },
    {
      title: "Digital Modes Workshop",
      date: "2025-05-25",
      location: "Community Hall Room 3",
      description: "Intro to FT8, JS8Call, and Winlink."
    },
    {
      title: "Fox Hunt Challenge",
      date: "2025-06-01",
      location: "City Park South Entrance",
      description: "Practice radio direction finding with hidden transmitters."
    },
    {
      title: "ARES Coordination Drill",
      date: "2025-06-05",
      location: "Emergency Operations Center",
      description: "Simulated emergency drill with CERT and public safety."
    },
    {
      title: "General License Study Session",
      date: "2025-06-07",
      location: "Library Conference Room B",
      description: "Q&A and review for hams upgrading to General Class."
    },
    {
      title: "Club BBQ and Swap Meet",
      date: "2025-06-10",
      location: "Riverbend Pavilion",
      description: "Potluck BBQ and used equipment swap. Families welcome!"
    },
    {
      title: "Portable Antenna Building Workshop",
      date: "2025-06-14",
      location: "Clubhouse Back Lot",
      description: "Build your own 2m/70cm portable antenna. Materials provided."
    },
    {
      title: "ARRL Field Day 2025",
      date: "2025-06-22",
      location: "City Park North Field",
      description: "24-hour operation, public demo, and emergency power test."
    },
    {
      title: "Satellites and ISS Comms Night",
      date: "2025-06-26",
      location: "Observatory Hill",
      description: "Try working satellites and catch the ISS pass overhead."
    },
    {
      title: "Monthly Net Check-in",
      date: "2025-07-01",
      location: "Rivertown Repeater 147.000 MHz",
      description: "Check-in net and updates from club leadership."
    },
    {
      title: "Introduction to CW (Morse Code)",
      date: "2025-07-04",
      location: "Community Hall Room 2",
      description: "Learn to send and receive Morse code. Keys provided."
    },
    {
      title: "Summer Field Op at Lookout Hill",
      date: "2025-07-10",
      location: "Lookout Hill Overlook",
      description: "Operate HF portable stations with great elevation."
    },
    {
      title: "Tech Talk: QSL Cards & Logging",
      date: "2025-07-12",
      location: "Online via Zoom",
      description: "Digital and paper QSLs, plus best logging practices."
    },
    {
      title: "Monthly Member Spotlight",
      date: "2025-07-15",
      location: "Club Website + Radio Net",
      description: "Highlighting KD8XYZ’s shack setup and DX adventures."
    }
  ];

export function renderEvents(eventsArray, container) {
  container.innerHTML = eventsArray.map((event, index) => `
    <div class="event-card">
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Location:</strong> ${event.location}</p>
      <button class="modal-trigger" data-index="${index}">More Info</button>
    </div>
  `).join('');
}

export function showModal(event, eventsArray) {
  const index = event.target.dataset.index;
  const data = eventsArray[index];

  const modal = document.getElementById("event-modal");
  const modalContent = modal.querySelector(".modal-content");

  modalContent.innerHTML = `
    <h3>${data.title}</h3>
    <p><strong>Date:</strong> ${data.date}</p>
    <p><strong>Location:</strong> ${data.location}</p>
    <p>${data.description}</p>
    <button class="close-modal">Close</button>
  `;

  modal.classList.add("open");
}
  