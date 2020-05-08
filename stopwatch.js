'use strict';

import * as watch from './stopwatch_func.js';

document.getElementById("stopwatch-start").addEventListener("click", watch.start);
document.getElementById("stopwatch-stop").addEventListener("click", watch.stop);
document.getElementById("stopwatch-reset").addEventListener("click", watch.reset);

setInterval(watch.runOrStop, 10);
