'usse strict';

export * as time from './timer_func.js';

document.getElementById("timer-set").addEventListener("click", time.timerSet);
document.getElementById("timer-start").addEventListener("click", time.timerStart);
document.getElementById("timer-stop").addEventListener("click", time.timerStop);

setInterval(time.timerGoOrNo, 10);
