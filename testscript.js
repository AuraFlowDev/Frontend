let currentStep = 1;
const steps = document.querySelectorAll('.step-text');
const dots = document.querySelectorAll('.step-dot');
const title = document.getElementById('step-title');
const description = document.getElementById('step-description');

document.getElementById('next-step').addEventListener('click', () => {
    // Entferne active-Klasse von Texten und Punkten
    steps.forEach(step => step.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Erhöhe den Schritt (zyklisch)
    currentStep = currentStep < 5 ? currentStep + 1 : 1;

    // Setze active auf den neuen Schritt
    document.querySelector(`.step-text[data-step="${currentStep}"]`).classList.add('active');
    document.querySelector(`.step-dot[data-step="${currentStep}"]`).classList.add('active');

    title.textContent = `Step 0${currentStep}`;
    description.textContent = `Description for Step 0${currentStep}`;
});
