'use strict';

import * as watch from './stopwatch_func.js';

document.getElementById("stopwatch-start").addEventListener("click", watch.startStopwatch);
document.getElementById("stopwatch-stop").addEventListener("click", watch.stopStopwatch);
document.getElementById("stopwatch-reset").addEventListener("click", watch.resetStopwatch);

setInterval(watch.toggleStopwatch, 10);
