//indicate current day
const day= ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const days = today.getDay();
document.getElementById("days").textContent = day[days];
//Current UTC Time
const millisecondsElement = document.getElementById("milliseconds");
function updateMilliseconds() {
  const now = new Date();
  const milliseconds = now.getMilliseconds();
  millisecondsElement.textContent = ': ' + milliseconds;
}
setInterval(updateMilliseconds, 1);


