
function result() {
    const from = document.getElementById("departure").value;
    const to = document.getElementById("arraival").value;
    const date = document.getElementById("departure-date").value;
    const flight_class = document.getElementById("flight_class").value;


    sessionStorage.setItem('FROM', from);
    sessionStorage.setItem('TO', to);
    sessionStorage.setItem('DATE', date);
    sessionStorage.setItem('flight_class', flight_class);



    return;
}

function incrementCount(inputId) {
    var input = document.getElementById(inputId);
    var value = parseInt(input.value);
    if (inputId === "adultCount" && value < 1) {
        value = 0;
    }
    input.value = value + 1;
}

function decrementCount(inputId) {
    var input = document.getElementById(inputId);
    var value = parseInt(input.value);
    if (inputId === "adultCount" && value === 1) {
        return; // Prevent decrementing below 1 for adult counter
    }
    if (value > 0) {
        input.value = value - 1;
    }
}




function showPrompt() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "flex";

}

function closePrompt() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}


function submitPrompt() {
  var nameInput = document.getElementById("nameInput");
  var ageInput = document.getElementById("ageInput");
  var genderInput = document.getElementById("genderInput");
  var mobileInput = document.getElementById("mobileInput");
  var adultCountInput = document.getElementById("adultCount");
  var childCountInput = document.getElementById("childCount");

  if (nameInput.checkValidity() && ageInput.checkValidity() && genderInput.checkValidity() && mobileInput.checkValidity()) {
    var name = nameInput.value;
    var age = ageInput.value;
    var gender = genderInput.value;
    var mobile = mobileInput.value;
    var adultCount = parseInt(adultCountInput.value);
    var childCount = parseInt(childCountInput.value);

    // Generate a random ticket number
    var ticketNumber = generateRandomTicketNumber();

    // Store values in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("gender", gender);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("adultCount", adultCount);
    localStorage.setItem("childCount", childCount);
    localStorage.setItem("ticketNumber", ticketNumber);

    // Display the captured values and ticket number
    alert(
      "Successfully Booked!" +
      "\n\nName: " + name +
      "\nAge: " + age +
      "\nGender: " + gender +
      "\nMobile No: " + mobile +
      "\nAdults: " + adultCount +
      "\nChildren: " + childCount +
      "\nTicket Number: " + ticketNumber
    );

    setTimeout(function() {
      // Redirect to another page
      window.location.href = "ticketshow.html";
    }, 100);
  } else {
    // Display validation error messages
    nameInput.reportValidity();
    ageInput.reportValidity();
    genderInput.reportValidity();
    mobileInput.reportValidity();
  }
}

function generateRandomTicketNumber() {
  var ticketNumber = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var length = 6;

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    ticketNumber += characters.charAt(randomIndex);
  }

  return ticketNumber;
}
