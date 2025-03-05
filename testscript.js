// Wir haben 6 Schritte: 00 bis 05
const totalSteps = 6;
const angleStep = 360 / totalSteps; // => 60° Abstand pro Schritt
const radius = 270; // So liegen die Step-Punkte auf dem Kreisumfang (~300 - etwas Abstand)

// Beispieltexte pro Schritt
const stepTexts = [
  "Beschreibung für Schritt 00 ...",
  "Beschreibung für Schritt 01 ...",
  "Beschreibung für Schritt 02 ...",
  "Beschreibung für Schritt 03 ...",
  "Beschreibung für Schritt 04 ...",
  "Beschreibung für Schritt 05 ..."
];

// HTML-Referenzen
const rotatorEl = document.getElementById('rotator');
const stepEls = document.querySelectorAll('.step');
const bigStepEl = document.getElementById('big-step-number');
const stepTitleEl = document.getElementById('step-title');
const stepDescEl = document.getElementById('step-description');
const btnNext = document.getElementById('btnNext');

// Wir starten mit activeIndex=1 => Anfang ist "01" rechts
let activeIndex = 1;

// (A) Alle Schritt-Elemente kreisförmig anordnen
stepEls.forEach((stepEl, i) => {
  const angle = i * angleStep;
  // "rotate(angle) translateX(radius) rotate(-angle)"
  // => Der Schritt dreht sich an die Position "angle",
  //     wandert radius Pixel nach rechts,
  //     dann drehen wir die Beschriftung wieder zurück 
  //     (damit sie nicht schräg steht).
  stepEl.style.transform = `
    rotate(${angle}deg)
    translateX(${radius}px)
    rotate(${-angle}deg)
  `;
});

// (B) Erste Darstellung
render();

// (C) Button => Nächster Schritt
btnNext.addEventListener('click', () => {
  activeIndex = (activeIndex + 1) % totalSteps;
  render();
});

function render() {
  // 1) Rotator drehen => 
  //    so dass "activeIndex" nach rechts zeigt: offset = -activeIndex*angleStep
  const offsetDeg = -activeIndex * angleStep;
  rotatorEl.style.transform = `translate(-50%, -50%) rotate(${offsetDeg}deg)`;

  // 2) Aktiven Schritt markieren
  stepEls.forEach(el => el.classList.remove('active'));
  stepEls[activeIndex].classList.add('active');

  // 3) Großen Step + Text aktualisieren
  const currentLabel = stepEls[activeIndex].textContent;
  bigStepEl.textContent = currentLabel;
  stepTitleEl.textContent = `Secure Account Registration (Schritt ${currentLabel})`;
  stepDescEl.textContent = stepTexts[activeIndex];
}



//==============

const pointCount = 10;
const circleRadius = 160;
const startAnimDelta = 5;
const circumference = Math.PI * circleRadius * 2;
var selectedItemIndex = -1;
var circlePath = document.getElementById("mask-circle");
const onMouseLeave = () => {
  let index = selectedItemIndex !== -1 ? selectedItemIndex : 0;
  calculateOffset(index);
};
const onClick = (index) => {
  selectedItemIndex = selectedItemIndex === index ? -1 : index;
  calculateOffset(index);
  let activeListItem = document.querySelectorAll(
    ".navigation-circle-list-item.active"
  );
  if (activeListItem.length > 0) activeListItem[0].classList.remove("active");
  let listItem = document.querySelectorAll(
    ".navigation-circle-list-item:nth-of-type(" + selectedItemIndex + ")"
  );
  if (listItem.length > 0) listItem[0].classList.add("active");
};
const calculateOffset = (index = 0) => {
  let offset = 0;
  if (index !== 0) offset = (circumference / pointCount) * (pointCount - index);
  circlePath.style.strokeDashoffset = `jQuery{offset}px`;
};
let buffer = 500;
let delay =
  1000 * (1 + pointCount / startAnimDelta - 1 / startAnimDelta) + buffer;
setTimeout(() => onClick(1), delay);

