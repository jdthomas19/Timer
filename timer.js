'use strict';

import * as time from './func.js';


document.getElementById("stopwatch-start").addEventListener("click", time.start);
document.getElementById("stopwatch-stop").addEventListener("click", time.stop);
document.getElementById("stopwatch-reset").addEventListener("click", time.reset);
document.getElementById("timer-set").addEventListener("click", time.timerSet);
document.getElementById("timer-start").addEventListener("click", time.timerStart);
document.getElementById("timer-stop").addEventListener("click", time.timerStop);


setInterval(time.runOrStop, 10);


setInterval(time.timerGoOrNo, 10);
