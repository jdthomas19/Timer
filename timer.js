'use strict';

import * as time from './timer_func.js';

document.getElementById("timer-set").addEventListener("click", time.setTimer);
document.getElementById("timer-start").addEventListener("click", time.startTimer);
document.getElementById("timer-stop").addEventListener("click", time.stopTimer);

setInterval(time.toggleTimer, 10);
