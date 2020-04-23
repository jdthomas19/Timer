// TODO(josh): Rename fun.js & fun.css to be better names... perhaps timer.js / timer.css..
let seconds = 0;
let minutes = 0;
let millisecs = 0;
// TODO(josh): bebop is not an good variable name. Idk what this means or does. Should be more descriptive.
let bebop;

// TODO(josh): This variable is unused. Use it or get rid of it.
// TODO(josh): heyy is not an good variable name. Idk what this means or does. Should be more descriptive.
const heyy = document.getElementById('timer');

// TODO(josh): Add a comment to the top line of each function explaining what it does. This is great practice.
function runOrStop() {
    if (bebop === false) {
        // TODO(josh): Maybe we can use our 'heyy' variable here.
        document.getElementById('timer').innerHTML = minutes + ":" + seconds + ":" + millisecs;
    } else if (bebop === true) {
        // TODO(josh): Do we need to check if (bebop === true)? If bebop is not true, then it must be false. This
        //  condition can simply be else.
        start();
    }
}

// TODO(josh): Kinda of confusing with this line of code in the middle of this file of functions. 2 options I can think
//  of...
//  (1) rearrange code so all functions are at top or bottom and this line is separate
//  (2) move the functions into their own file, maybe funcs.js, then in this file import that file and just call this
//  line below
setInterval(runOrStop, 10);

function start() {
    // TODO(josh): Maybe we can use our 'heyy' variable here.
    // TODO(josh): Also this is the second time we use this same line, maybe it can be its own function...
    document.getElementById('timer').innerHTML = minutes + ":" + seconds + ":" + millisecs;
    millisecs++;
    bebop = true;
    // TODO(josh): This code has error "Comparison millisecs == 100 may cause unexpected type coercion". Research and
    //  fix.
    if (millisecs == 100) {
        seconds++;
        millisecs = 0;
    }
    // TODO(josh): This code has error "Comparison seconds == 60 may cause unexpected type coercion". Research and fix.
    if (seconds == 60) {
        minutes++;
        seconds = 0;
    }
}

function stop() {
    bebop = false;
}

function reset() {
    seconds = 0;
    millisecs = 0;
    minutes = 0;
    bebop = false;
}
