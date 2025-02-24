const openLoginBtn = document.getElementById("open-popup");
const modalOverlay = document.getElementById("popup-overlay");
const closeModalBtn = document.getElementById("close-popup-btn");

// Öffnen des Popups
openLoginBtn.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
});

// Schließen des Popups über den Close-Button
closeModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

// Schließen des Popups, wenn außerhalb geklickt wird
window.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});