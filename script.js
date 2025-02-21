const stepsData = [
    {
      number: "01",
      title: "Secure Account Registration",
      description: "Begin by registering for a secure user account on our homepage. \
                    Our robust registration process safeguards your personal data while \
                    granting you full access to our comprehensive dashboard for managing your rewards."
    },
    {
      number: "02",
      title: "Profile Setup",
      description: "Our powerful analytics tools track every interaction, giving you real-time insights \
                    into your performance, audience growth, and earning potential."
    },
    {
      number: "03",
      title: "Verification",
      description: "We verify your identity quickly and securely."
    },
    {
      number: "04",
      title: "Account Activation",
      description: "Activate your account and start enjoying our services."
    },
    {
      number: "05",
      title: "Get Started",
      description: "Begin your journey and unlock exclusive benefits."
    }
  ];
  
  let currentStep = 0;
  const markerPrev = document.querySelector('.marker-prev');
  const markerActive = document.querySelector('.marker-active');
  const markerNext = document.querySelector('.marker-next');
  const stepTitle = document.querySelector('.step-title');
  const stepDescription = document.querySelector('.step-description');
  const nextBtn = document.querySelector('.next-btn');
  
  function updateMarkers() {
    // Aktueller Schritt im aktiven Marker
    markerActive.innerText = stepsData[currentStep].number;
    
    // Vorheriger Marker: Kreisindex (bei 0 wird der letzte Schritt angezeigt)
    const prevIndex = (currentStep - 1 + stepsData.length) % stepsData.length;
    markerPrev.innerText = stepsData[prevIndex].number;
    
    // Nächster Marker: Kreisindex (bei letztem Schritt wird der erste angezeigt)
    const nextIndex = (currentStep + 1) % stepsData.length;
    markerNext.innerText = stepsData[nextIndex].number;
    
    // Aktualisiere den Inhalt in der rechten Spalte
    stepTitle.innerText = stepsData[currentStep].title;
    stepDescription.innerText = stepsData[currentStep].description;
  }
  
  // Button "Nächster Schritt" aktualisiert den Zähler zyklisch
  nextBtn.addEventListener('click', function() {
    currentStep = (currentStep + 1) % stepsData.length;
    updateMarkers();
  });
  
  // Initialer Aufruf, um die Anzeige zu setzen
  updateMarkers();
  