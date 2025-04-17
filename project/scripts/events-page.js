import { events, renderEvents, showModal } from "../modules/events.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("events-container");
  renderEvents(events, container);

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-trigger")) {
      showModal(e, events);
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("close-modal") || e.target.id === "event-modal") {
      document.getElementById("event-modal").classList.remove("open");
    }
  });
});
