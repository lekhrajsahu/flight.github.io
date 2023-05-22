window.addEventListener('load', () => {
  const from = sessionStorage.getItem('FROM');
  const to = sessionStorage.getItem('TO');
  const date = sessionStorage.getItem('DATE');
  const flight_class = sessionStorage.getItem('flight_class');

  const generateRandomTime = () => {
    const hours = Math.floor(Math.random() * 12);
    const minutes = Math.floor(Math.random() * 60);
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  };
  

  const generateRandomAmount = () => {
    const x = Math.floor(Math.random() * 1000) + 4000;
    return x;
  };

  
  const populateFlightDetails = (index) => {
    const departureElem = document.getElementById(`departure${index}`);
    const arraivalElem = document.getElementById(`arraival${index}`);
    const departureDateElem = document.getElementById(`departure-date${index}`);
    const fClassElem = document.getElementById(`f_class${index}`);
    const departureTimeElem = document.getElementById(`departure-time${index}`);
    const arraivalTimeElem = document.getElementById(`arraival-time${index}`);
    const arraivalDateElem = document.getElementById(`arraival-date${index}`);
    const amountElem = document.getElementById(`amount${index}`);

    departureElem.textContent = from;
    arraivalElem.textContent = to;
    departureDateElem.textContent = date;
    fClassElem.textContent = flight_class;

    const departureTime = generateRandomTime();
    const arraivalTime = generateRandomTime();
    departureTimeElem.textContent = departureTime;
    arraivalTimeElem.textContent = arraivalTime; 
    arraivalDateElem.textContent = date;

    const amount = generateRandomAmount();
    amountElem.textContent = amount;
    sessionStorage.setItem(`fare${index}`, amount);

    
    
    
  };

  for (let i = 1; i <= 6; i++) {
    populateFlightDetails(i);
  }
});

function storeFlightInformation(index) {
  const departureElem = document.getElementById(`departure${index}`);
  const arrivalElem = document.getElementById(`arraival${index}`);
  const departureDateElem = document.getElementById(`departure-date${index}`);
  const departureTimeElem = document.getElementById(`departure-time${index}`);
  const arrivalTimeElem = document.getElementById(`arraival-time${index}`);
  const amountElem = document.getElementById(`amount${index}`);
  const flightClassElem = document.getElementById(`f_class${index}`);
  
  // Update the airline value based on the flight index
  let airline;
  if (index === 1) {
    airline = "VISTARA";
  } else if (index === 2) {
    airline = "AIR ASIA";
  } else if (index === 3) {
    airline = "INDIGO";
  } else if (index === 4) {
    airline = "SPICEJET";
  } else if (index === 5) {
    airline = "AKASA";
  } else if (index === 6) {
    airline = "AIR INDIA";
  }

  const departure = departureElem.textContent;
  const arrival = arrivalElem.textContent;
  const departureDate = departureDateElem.textContent;
  const departureTime = departureTimeElem.textContent;
  const arrivalTime = arrivalTimeElem.textContent;
  const amount = amountElem.textContent;
  const flightClass = flightClassElem.textContent;

  // Store the flight information in local storage
  localStorage.setItem('departure', departure);
  localStorage.setItem('arrival', arrival);
  localStorage.setItem('departureDate', departureDate);
  localStorage.setItem('departureTime', departureTime);
  localStorage.setItem('arrivalTime', arrivalTime);
  localStorage.setItem('amount', amount);
  localStorage.setItem('flightClass', flightClass);
  localStorage.setItem('airline', airline);

  // Redirect to the desired page
  showPrompt();
}

