class GuessingGame {
    constructor() {
        this.max;
        this.arrOfAssumptions = [];
        this.min = 1;
        this.rand = null;
    }
  
    setRange(min, max) {
        this.min = 1;
        this.max = max;
    }
  
    guess() {
  
  
        this.rand = Math.floor(this.min + Math.random() * (this.max + 1 - this.min));
  
        this.arrOfAssumptions.push(this.rand);
  
  
        if (this.arrOfAssumptions.includes(this.rand)) {
            this.rand = Math.floor(this.min + Math.random() * (this.max + 1 - this.min));
        }
  
        return this.rand;
  
        
    }
  
  
    lower() {
  
        this.max = Math.round((this.max + this.min) / 2 - 1);
  
        this.rand = Math.floor(this.min + Math.random() * (this.max + 1 - this.min));
  
        this.arrOfAssumptions.push(this.rand);
  
  
        if (this.arrOfAssumptions.includes(this.rand)) {
            this.rand = Math.floor(this.min + Math.random() * (this.max + 1 - this.min));
        }
  
  
    }
  
    greater() {
  
        this.min = Math.round((this.max + this.min) / 2 + 1);
  
        this.rand = Math.floor(this.min + Math.random() * (this.max + 1 - this.min));
  
        this.arrOfAssumptions.push(this.rand);
  
  
        if (this.arrOfAssumptions.includes(this.rand)) {
            this.rand = Math.floor(this.min + Math.random() * (this.max + 1 - this.min));
        }
  
      
  
    }
}


module.exports = GuessingGame;