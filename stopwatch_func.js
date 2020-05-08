let seconds = 0;
let minutes = 0;
let millsecs = 0;
let stopwatchOnOrOff = false;

export function runOrStop() {
  stopwatchOnOrOff ? start() : stop();
}

export function start() {
  changeStopwatch();
  millsecs++;
  stopwatchOnOrOff = true;
  if (millsecs == 100) {
    seconds++;
    millsecs = 0;
  }
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
}

export function stop() {
  stopwatchOnOrOff = false;
  changeStopwatch();
}

export function reset() {
  seconds = 0;
  millsecs = 0;
  minutes = 0;
  stopwatchOnOrOff = false;
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
  document.getElementById('stopwatch').innerHTML = minuteStr + secondStr + millsecStr;
}
