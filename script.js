// Start-Skript – wird bei Seitenaufruf geladen
console.log("Website wurde erfolgreich geladen!");

// Beispiel: Feedback, wenn jemand auf einen CTA-Button klickt
document.addEventListener("DOMContentLoaded", function () {
  const ctaButtons = document.querySelectorAll(".cta-button");

  ctaButtons.forEach(button => {
    button.addEventListener("click", function () {
      console.log("CTA-Button geklickt:", this.textContent);
      // Später z. B. Tracking, Animation, Scroll etc.
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("kontaktformular");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nachrichtInput = document.getElementById("nachricht");
  const meldung = document.getElementById("formular-meldung");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Formular nicht abschicken

    // Eingaben prüfen
    let fehler = [];

    if (nameInput.value.trim() === "") {
      fehler.push("Bitte gib deinen Namen ein.");
      nameInput.style.borderColor = "red";
    } else {
      nameInput.style.borderColor = "#ccc";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      fehler.push("Bitte gib eine gültige E-Mail-Adresse ein.");
      emailInput.style.borderColor = "red";
    } else {
      emailInput.style.borderColor = "#ccc";
    }

    const nachrichtText = nachrichtInput.value.trim();
if (nachrichtText === "") {
  fehler.push("Bitte gib eine Nachricht ein.");
  nachrichtInput.style.borderColor = "red";
} else if (nachrichtText.length < 20) {
  fehler.push("Die Nachricht muss mindestens 20 Zeichen enthalten.");
  nachrichtInput.style.borderColor = "red";
} else {
  nachrichtInput.style.borderColor = "#ccc";
}

    if (fehler.length > 0) {
      meldung.innerHTML = `<p style="color:red;">${fehler.join("<br>")}</p>`;
meldung.classList.add("visible");
    } else {
      meldung.innerHTML = `<p style="color:green;">Vielen Dank für deine Nachricht!</p>`;
meldung.classList.add("visible");
form.reset();
    }
  });
});

// Lightbox Funktion
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.createElement("div");
  overlay.classList.add("lightbox-overlay");
  document.body.appendChild(overlay);

  const img = document.createElement("img");
  overlay.appendChild(img);

  // Bild öffnen
  document.querySelectorAll(".lightbox-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      img.src = trigger.src;
      overlay.classList.add("active");
    });
  });

  // Bild schließen
  overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
    img.src = "";
  });
});
