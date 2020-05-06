'use strict';

let seconds = 0;
let minutes = 0;
let millsecs = 0;
let bebop;

function runOrStop() {
  if (bebop === false) {
    stop();
  } else if (bebop === true) {
    start();
  }
}

setInterval(runOrStop, 10);

function start() {
  changeStopwatch();
  millsecs++;
  bebop = true;
  if (millsecs == 100) {
    seconds++;
    millsecs = 0;
  }
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
}

function stop() {
  bebop = false;
  changeStopwatch();
}

function reset() {
  seconds = 0;
  millsecs = 0;
  minutes = 0;
  bebop = false;
}

function changeStopwatch() {
  let minuteStr;
  let secondStr;
  let millsecStr;
  if (millsecs < 10) {
    millsecStr = `:0${millsecs}`;
  } else {
    millsecStr = `:${millsecs}`;
  }
  if (seconds < 10) {
    secondStr = `:0${seconds}`;
  } else {
    secondStr = `:${seconds}`;
  }
  if (minutes < 10) {
    minuteStr = `0${minutes}`;
  } else {
    minuteStr = `${minutes}`;
  }
  document.getElementById('stopwatch').innerHTML = minuteStr + secondStr + millsecStr
}

let timerMillsec;
let timerSec;
let timeMins;
let timeInput;
let timerOnOrOff;

function timerGoOrNo() {
  if (timerOnOrOff === false) {
    timerStop();
  } else if (timerOnOrOff === true) {
    timerStart();
  }
}

setInterval(timerGoOrNo, 10);

function timerSet() {
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

function timerStart() {
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

function timerStop() {
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
