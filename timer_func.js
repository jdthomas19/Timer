let timerMillsec;
let timerSec;
let timerMins;
let timerIsOn = false;

export function toggleTimer() {
  timerIsOn ? startTimer() : stopTimer();
}

export function setTimer() {
  timerIsOn = false;
  let timeInput = prompt("Please enter the time you would like to set in this format (Mins:Seconds:Milliseconds)", "00:00:00");
  let desiredTimeInput = /^\d{2}:\d{2}:\d{2}$/;
  let timeSet = timeInput.split(":").map(Number);
  timerMins = timeSet[0];
  timerSec = timeSet[1];
  timerMillsec = timeSet[2];

  if (!timeInput.match(desiredTimeInput)) {
    alert("Invalid time, please enter in the format 00:00:00");
  } else {
    changeTimerLabel();
  }
}

export function startTimer() {
  timerIsOn = true;
  if (timerMillsec != 0 && timerSec == 0 && timerMins == 0) {
    timerMillsec--;
  } else if (timerMillsec == 0 && timerSec != 0) {
    timerMillsec = 100;
    timerMillsec--;
    timerSec--;
  } else if (timerMillsec == 0 && timerMins != 0 && timerSec == 0) {
    timerMins -= 1;
    timerMillsec = 100;
    timerSec = 60;
    timerMillsec--;
  } else if (timerMillsec != 0 && timerSec != 0) {
    timerMillsec--;
  } else if (timerMillsec != 0 && timerMins != 0) {
    timerMillsec--;
  }
  changeTimerLabel();
}

export function stopTimer() {
  timerIsOn = false;
}

function changeTimerLabel() {
  let minuteStr = `${timerMins}`;
  let secondStr = `:${timerSec}`;
  let millsecStr = `:${timerMillsec}`;

  if (timerMillsec < 10) {
    millsecStr = `:0${timerMillsec}`;
  }
  if (timerSec < 10) {
    secondStr = `:0${timerSec}`;
  }
  if (timerMins < 10) {
    minuteStr = `0${timerMins}`;
  }

  document.getElementById('timer').innerHTML = minuteStr + secondStr + millsecStr;
}
