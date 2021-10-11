const refs = {
     daysVal: document.querySelector('[data-value=days]'),
     hoursVal: document.querySelector('[data-value=hours]'),
     minsVal: document.querySelector('[data-value=mins]'),
     secsVal: document.querySelector('[data-value=secs]')
}


// const present = new Date('Oct 11 2021 21:58: 00');
//     function timeCount() {
//         let now = new Date();
//         let leftUntil = present - now;



//         let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
//         let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24; 
//         let minuts = Math.floor(leftUntil / 1000 / 60) % 60;
//         let seconds = Math.floor(leftUntil / 1000) % 60;


//          if (leftUntil < 0) {
//             days = days + 7324;
//             hours = hours + 24;
//             minuts = minuts + 60;
//             seconds = seconds + 60;
//         }
//             refs.daysVal.textContent = days;
//             refs.hoursVal.textContent = hours;
//             refs.minsVal.textContent = minuts;
//             refs.secsVal.textContent = seconds;
        
//     }
// timeCount()
// setInterval(timeCount, 1000);



class Timer{
    constructor({flipTimer}) {
        this.intervalid = null;
        this.flipTimer = flipTimer;
    }
    start() {
        const present = new Date('Oct 11 2021 22:00: 00');
        this.intervalid = setInterval(() => {
            const now = new Date();
            const leftUntil = present - now;
            const restTime =  resetTime(leftUntil)
            const time = getTimerElements(restTime)
            this.flipTimer(time)
        }, 1000);
    }
}




const timer = new Timer({
    flipTimer: selectTime,
});
    

timer.start();

function markupTime(value) {
    return String(value).padStart(2, '0');
}
    
function resetTime(time) {
      let resetTime = 0
      if (time < 0) {
          resetTime = time + 604800000
      }
      return resetTime
  }
            

function getTimerElements(time) {
    let days = markupTime(Math.floor(time / 1000 / 60 / 60 / 24));
    let hours = markupTime(Math.floor(time / 1000 / 60 / 60) % 24); 
    let minuts = markupTime(Math.floor(time / 1000 / 60) % 60);
    let seconds = markupTime(Math.floor(time / 1000) % 60);
    return {days,hours,minuts,seconds}
}


function selectTime(time) {
    refs.daysVal.textContent = time.days;
    refs.hoursVal.textContent = time.hours;
    refs.minsVal.textContent = time.minuts;
    refs.secsVal.textContent = time.seconds;
}