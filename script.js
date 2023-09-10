//indicate current day
const day= ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const days = today.getDay();
document.getElementById("days").textContent = day[days];
//Current UTC Time
const millisecondsElement = document.getElementById("milliseconds");

// Function to update the milliseconds
function updateMilliseconds() {
  // Get the current date and time
  const now = new Date();
  // Get the milliseconds of the current date
  const milliseconds = now.getMilliseconds();
  // Update the HTML element with the milliseconds
  millisecondsElement.textContent = ': ' + milliseconds;
}

// Update the milliseconds every millisecond
setInterval(updateMilliseconds, 1);


