
class CountdownTimer{
    constructor({ targetDate, selector }){
        this.targetDate = targetDate
        this.importMarkup = this.link(selector)
        this.start()
    }
    start() {
        
         setInterval(() => {
            let currentTime = Date.now()

            const deltaTime = this.targetDate - currentTime
            
            this.insertValue(this.getClockTime(deltaTime))
        },1000)
    }

    link(selc) {
        const refs = {}
            refs.daysVal = document.querySelector(`${selc} [data-value=days]`)
            refs.hoursVal = document.querySelector(`${selc} [data-value=hours]`)
            refs.minsVal = document.querySelector(`${selc} [data-value=mins]`)
            refs.secsVal = document.querySelector(`${selc} [data-value=secs]`)
            
        return refs
    }
    getClockTime(time) {
        const days = this.pad(Math.floor(time / 1000 / 60 / 60 / 24));
        const hours = this.pad(Math.floor(time / 1000 / 60 / 60) % 24); 
        const minuts = this.pad(Math.floor(time / 1000 / 60) % 60);
        const seconds = this.pad(Math.floor(time / 1000) % 60);

        return {days,hours,minuts,seconds}
    }
   
    pad(value) {
        return String(value).padStart(2, '0');
    }
    insertValue({ days, hours, minuts, seconds }) {
        this.importMarkup.daysVal.innerHTML = days
        this.importMarkup.hoursVal.innerHTML = hours
        this.importMarkup.minsVal.innerHTML = minuts
        this.importMarkup.secsVal.innerHTML = seconds
    }
}
 
  
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2022'),
});


