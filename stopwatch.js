'use strict';

import * as stopwatch from './stopwatch_func.js';

document.getElementById("stopwatch-start").addEventListener("click", stopwatch.startStopwatch);
document.getElementById("stopwatch-stop").addEventListener("click", stopwatch.stopStopwatch);
document.getElementById("stopwatch-reset").addEventListener("click", stopwatch.resetStopwatch);

setInterval(stopwatch.toggleStopwatch, 10);
