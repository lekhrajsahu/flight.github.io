document.addEventListener('DOMContentLoaded', function() {
    // Get ticket details from local storage
const airline = localStorage.getItem('airline').toUpperCase();
const departure = localStorage.getItem('departure').toUpperCase();
const arrival = localStorage.getItem('arrival').toUpperCase();
const departureDate = localStorage.getItem('departureDate').toUpperCase();
const departureTime = localStorage.getItem('departureTime').toUpperCase();
const arrivalTime = localStorage.getItem('arrivalTime').toUpperCase();
const amount = localStorage.getItem('amount');
const flightClass = localStorage.getItem('flightClass').toUpperCase();
const name = localStorage.getItem('name').toUpperCase();
const age = localStorage.getItem('age').toUpperCase();
const gender = localStorage.getItem('gender').toUpperCase();
const mobile = localStorage.getItem('mobile').toUpperCase();
const adultCount = localStorage.getItem('adultCount');
const childCount = localStorage.getItem('childCount');
const ticketNumber = localStorage.getItem('ticketNumber').toUpperCase();


var amount1 = amount*adultCount;
var amount2=  amount*childCount;
const amount3 = amount2 * 0.75;
var famount = amount1+amount3;
  
    // Display ticket details in the HTML
    document.getElementById('airline').textContent = airline;
    document.getElementById('departure').textContent = departure;
    document.getElementById('arrival').textContent = arrival;
    document.getElementById('departureDate').textContent = departureDate;
    document.getElementById('departureTime').textContent = departureTime;
    document.getElementById('arrivalTime').textContent = arrivalTime;
    document.getElementById('amount').textContent = famount;
    document.getElementById('name').textContent = name;
    document.getElementById('age').textContent = age;
    document.getElementById('gender').textContent = gender;
    document.getElementById('mobile').textContent = mobile;
    document.getElementById('adultCount').textContent = adultCount;
    document.getElementById('childCount').textContent = childCount;
    document.getElementById('ticketNumber').textContent = ticketNumber;
  
    // Print button event listener
    document.getElementById('printButton').addEventListener('click', function() {
      window.print();
    });
  
    // Home button event listener
    document.getElementById('homeButton').addEventListener('click', function() {
      window.location.href = '../index.html';

    });
  });
  