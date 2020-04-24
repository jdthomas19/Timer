let seconds = 0;
let minutes = 0;
let millsecs = 0;
let bebop;



const heyy = document.getElementById('timer');

function runOrStop() {
 if (bebop === false) {
   stop();
} else if(bebop === true){
  start();
  }
}

setInterval(runOrStop, 10);


function start() {
changetimer();
  millsecs++;
  bebop = true;
if (millsecs == 100) {
    seconds++;
    millsecs = 0;
  }
if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
}



function stop() {
  bebop = false;
  changetimer();
}

function reset() {
  seconds = 0;
  millsecs = 0;
  minutes = 0;
  bebop = false;


}

function changetimer() {

let a = ""
let b = ""
let c = ""

if (millsecs < 10) {
  c = ":0"
} else {
  c = ":"
}
if (seconds < 10) {
  b = ":0"
} else {
  b = ":"
}
if (minutes < 10) {
  a = "0"
} else {
  a = ""
}

document.getElementById('timer').innerHTML = a+minutes+b+seconds+c+ millsecs;
}
