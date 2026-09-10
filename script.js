const launchDate = new Date("2026-09-23T00:00:00+05:30").getTime();

const daysElement = document.getElementById("days");

const hoursElement = document.getElementById("hours");

const minutesElement = document.getElementById("minutes");

const secondsElement = document.getElementById("seconds");

const popup = document.getElementById("livePopup");

const closePopup = document.getElementById("closePopup");

const visitClick = document.getElementById("visitClick");

function addZero(number) {
  return String(number).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date().getTime();

  const difference = launchDate - now;

  /*
  =========================
  LAUNCH REACHED
  =========================
  */

  if (difference <= 0) {
    daysElement.textContent = "00";

    hoursElement.textContent = "00";

    minutesElement.textContent = "00";

    secondsElement.textContent = "00";

    /*
    Show live popup
    */

    if (popup) {
      popup.style.display = "grid";
    }

    return;
  }

  /*
  =========================
  CALCULATE TIME
  =========================
  */

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  const seconds = Math.floor((difference / 1000) % 60);

  /*
  =========================
  UPDATE UI
  =========================
  */

  daysElement.textContent = addZero(days);

  hoursElement.textContent = addZero(hours);

  minutesElement.textContent = addZero(minutes);

  secondsElement.textContent = addZero(seconds);
}

/*
=========================================
START COUNTDOWN
=========================================
*/

updateCountdown();

setInterval(updateCountdown, 1000);

/*
=========================================
CLOSE LIVE POPUP
=========================================
*/

if (closePopup) {
  closePopup.addEventListener("click", function () {
    popup.style.display = "none";
  });
}

if(visitClick) {
  visitClick.addEventListener("click", function () {
    popup.style.display = "none";
  });
}

/*
=========================================
CLICK OUTSIDE POPUP
=========================================
*/

if (popup) {
  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
}
