let timerMillsec;
let timerSec;
let timeMins;
let timeInput;
let timerOnOrOff;

export function timerGoOrNo() {
  if (timerOnOrOff === false) {
    timerStop();
  } else if (timerOnOrOff === true) {
    timerStart();
  }
}

export function timerSet() {
  timerOnOrOff = false;
  let timeInput = prompt("Please enter the time you would like to set in this format (Mins:Seconds:Milliseconds)", "00:00:00");
  let desiredTimeInput = /^\d{2}:\d{2}:\d{2}$/;
  let timeSet = timeInput.split(":").map(Number);
  timeMins = timeSet[0];
  timerSec = timeSet[1];
  timerMillsec = timeSet[2];
  if (!timeInput.match(desiredTimeInput)) {
    alert("Invalid time, please enter in the format 00:00:00");
  } else {
    changeTimer();
  }
}

export function timerStart() {
  timerOnOrOff = true;
  if (timerMillsec != 0 && timerSec == 0 && timeMins == 0) {
    timerMillsec--;
  } else if (timerMillsec == 0 && timerSec != 0) {
    timerMillsec = 100;
    timerMillsec--;
    timerSec--;
  } else if (timerMillsec == 0 && timeMins != 0 && timerSec == 0) {
    timeMins -= 1;
    timerMillsec = 100;
    timerSec = 60;
    timerMillsec--;
  } else if (timerMillsec != 0 && timerSec != 0) {
    timerMillsec--;
  } else if (timerMillsec != 0 && timeMins != 0) {
    timerMillsec--;
  }
  changeTimer();
}

export function timerStop() {
  timerOnOrOff = false;
  changeTimer();
}

function changeTimer() {
  let minuteStr;
  let secondStr;
  let millsecStr;
  if (timerMillsec < 10) {
    millsecStr = `:0${timerMillsec}`;
  } else {
    millsecStr = `:${timerMillsec}`;
  }
  if (timerSec < 10) {
    secondStr = `:0${timerSec}`;
  } else {
    secondStr = `:${timerSec}`;
  }
  if (timeMins < 10) {
    minuteStr = `0${timeMins}`;
  } else {
    minuteStr = `${timeMins}`;
  }
  document.getElementById('timer').innerHTML = minuteStr + secondStr + millsecStr;
}
