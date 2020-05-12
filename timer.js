'use strict';

import * as timer from './timer_func.js';

document.getElementById("timer-set").addEventListener("click", timer.setTimer);
document.getElementById("timer-start").addEventListener("click", timer.startTimer);
document.getElementById("timer-stop").addEventListener("click", timer.stopTimer);

setInterval(timer.toggleTimer, 10);
