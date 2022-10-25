class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() =>{
      this.currentTime++;
      if (printTimeCallback){
        printTimeCallback();
      } //else 
      //console.log("sem print ");
      
    }, 1000);
  }

  getMinutes() {
    return +parseInt(this.currentTime/60);
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
    //return this.currentTime;
    if (this.getMinutes()%60===0){
      return this.currentTime;
    } else {
      return (this.currentTime%60);
    } 
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let saida = value.toString();
    console.log("saida "+saida);
    
    if (saida.length==2){
      return value.toString();
    } else
    saida = "0"+value.toString();
     return saida;
  }

  stop() {
    clearInterval(this.intervalId);
    
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    console.log("current "+this.currentTime);
    console.log(this.computeTwoDigitNumber(this.getMinutes())+":"+this.computeTwoDigitNumber(this.getSeconds()));
    return this.computeTwoDigitNumber(this.getMinutes())+":"+this.computeTwoDigitNumber(this.getSeconds());
  }
}
