class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.center  = null;
     }
   
     setRange(min, max) {
       this.min = min;
       this.max = max;
     }
   
     guess() {
       this.center = Math.ceil((this.max + this.min) / 2);
       return this.center;
     }
   
     lower() {
       this.max = this.center;
     }
   
     greater() {
       this.min = this.center;
     }
  }


module.exports = GuessingGame;