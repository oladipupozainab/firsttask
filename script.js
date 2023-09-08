//indicate current day
const day= ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const days = today.getDay();
document.getElementById("days").textContent = day[days];
//Current UTC Time
function updateUTCTime() {
const now = new Date();
const hours = now.getUTCHours();
const minutes = now.getUTCMinutes();
const seconds = now.getUTCSeconds();
const milliseconds = now.getUTCMilliseconds();
const formattedTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
document.getElementById("time").textContent = formattedTime;
}
setInterval(updateUTCTime, 1000);
updateUTCTime();
