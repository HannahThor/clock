function moveSecondHand() {
  const hand = document.querySelector(".hand");
  const date = new Date();
  const seconds = date.getSeconds();
  const rotation = seconds * 6; // 6 degrees per second
  hand.style.transform = `rotate(${rotation}deg)`;
}
setInterval(moveSecondHand, 1000);

function moveMinuteHand() {
  const minuteHand = document.querySelector(".minuteHand");
  const date = new Date();
  const minutes = date.getMinutes();
  const rotation = minutes * 6; // 6 degrees per minute
  minuteHand.style.transform = `rotate(${rotation}deg)`;
}
setInterval(moveMinuteHand, 1000);

function moveHourHand() {
  const hourHand = document.querySelector(".hourHand");
  const date = new Date();
  const hours = date.getHours();
  const rotation = hours * 30; // 30 degrees per hour
  hourHand.style.transform = `rotate(${rotation}deg)`;
}
setInterval(moveHourHand, 1000);
