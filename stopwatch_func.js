let seconds = 0;
let minutes = 0;
let millsecs = 0;
let stopwatchIsOn = false;

export function toggleStopwatch() {
  stopwatchIsOn ? startStopwatch() : stopStopwatch();
}

export function startStopwatch() {
  changeStopwatchLabel();
  millsecs++;
  stopwatchIsOn = true;

  if (millsecs == 100) {
    seconds++;
    millsecs = 0;
  }
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
}

export function stopStopwatch() {
  stopwatchIsOn = false;
}

export function resetStopwatch() {
  seconds = 0;
  millsecs = 0;
  minutes = 0;
  stopwatchIsOn = false;
  changeStopwatchLabel();
}

function changeStopwatchLabel() {
  let minuteStr = `${minutes}`;
  let secondStr = `:${seconds}`;
  let millsecStr = `:${millsecs}`;

  if (millsecs < 10) {
    millsecStr = `:0${millsecs}`;
  }
  if (seconds < 10) {
    secondStr = `:0${seconds}`;
  }
  if (minutes < 10) {
    minuteStr = `0${minutes}`;
  }

  document.getElementById('stopwatch').innerHTML = minuteStr + secondStr + millsecStr;
}
