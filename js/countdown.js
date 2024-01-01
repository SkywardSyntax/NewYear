// Get the countdown element from the HTML
var countdownElement = document.getElementById('countdown');

// Get the countdown elements
var daysElement = document.getElementById('days');
var hoursElement = document.getElementById('hours');
var minutesElement = document.getElementById('minutes');
var secondsElement = document.getElementById('seconds');

// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var countdownFunction = setInterval(function() {


  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Create a new paragraph element
  var countdownText = document.createElement('p');

  // Set the content of the paragraph to the countdown
  countdownText.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // Remove any existing content in the countdown element
  countdownElement.innerHTML = '';

  // Append the new paragraph to the countdown element
  countdownElement.appendChild(countdownText);

  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(countdownFunction);
    countdownElement.innerHTML = "HAPPY NEW YEAR!";
  }

  daysElement.style.display = 'block';
  hoursElement.style.display = 'block';
  minutesElement.style.display = 'block';
  secondsElement.style.display = 'block';
}, 1000);