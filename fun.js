let seconds = 00;
let minutes = 00;
let millsecs = 00;
let bebop;



const heyy = document.getElementById('timer');

function runOrStop() {
 if (bebop === false) {
   document.getElementById('timer').innerHTML = minutes+":"+seconds + ":" + millsecs;
} else if(bebop === true){
  start();
  }
}

setInterval(runOrStop, 10);


function start() {
  document.getElementById('timer').innerHTML = minutes+ ":" +  seconds + ":" + millsecs;
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
}

function reset() {
  seconds = 00;
  millsecs = 00;
  minutes = 00;
  bebop = false;
}
