const openLoginBtn = document.getElementById("open-popup");
const modalOverlay = document.getElementById("popup-overlay");
const closeModalBtn = document.getElementById("close-popup-btn");
const form = document.getElementById("login-form");
const email_input = document.getElementById("email");
const password_input = document.getElementById("password");

// Öffnen des Popups
openLoginBtn.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
});

function openLogin() {
  modalOverlay.style.display = "flex";
}

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

form.addEventListener("submit", (e) => {
  let errors = [];

  errors = getLoginFormErrors(
    email_input.value.trim(),
    password_input.value.trim()
  );

  if (errors.length > 0) {
    e.preventDefault();
    error_message.innerText = errors.join(" ");
    console.log("Fehler!");
    return;
  }

  // Wenn keine Fehler -> Daten ans Backend schicken
  const payload = {
    email: email_input.value.trim(),
    password: password_input.value.trim(),
  };

  fetch("http://167.172.165.97:80/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) {
        // Falls der Server einen Fehler meldet (z.B. 400 )
        throw new Error(`Server error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Hier kannst du den erfolgreichen Response verarbeiten
      console.log("ErfolgJWT: ", data);

      localStorage.setItem("jwt", data.token);
      // z.B. weiterleiten oder Meldung anzeigen
      //window.location.href='index.html';
    })
    .catch((error) => {
      console.error("Fehler: ", error);
    });

  e.preventDefault();
});

function getLoginFormErrors(email, password) {
  let errors = [];

  if (email === "" || email == null) {
    errors.push("Email is required");
    email_input.parentElement.classList.add("incorrect");
  }

  if (password === "" || password == null) {
    errors.push("Password is required");
    password_input.parentElement.classList.add("incorrect");
  } else if (password.length < 8) {
    errors.push("Password must have at least 8 characters");
    password_input.parentElement.classList.add("incorrect");
  } else if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter");
    password_input.parentElement.classList.add("incorrect");
  } else if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter");
    password_input.parentElement.classList.add("incorrect");
  } else if (!/[0-9]/.test(password)) {
    errors.push("Password must contain at least one number");
    password_input.parentElement.classList.add("incorrect");
  } else if (!/[\W_]/.test(password)) {
    errors.push("Password must contain at least one special character");
    password_input.parentElement.classList.add("incorrect");
  }

  return errors;
}
