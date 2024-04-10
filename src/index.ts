import configuration from './configuration'

class SlotMachine {
  protected reelsCount: number;
  protected rowsCount: number;
  protected reels: number[][];
  private result: number[][];

  constructor() {
    this.reelsCount = configuration.reelsCount;
    this.rowsCount = configuration.rowsCount;
    this.reels = configuration.reels;
    this.result = [];
  }
  
  get reelsCountValue(){
    return this.reelsCount;
  }

  get rowsCountValue(){
    return this.reelsCount;
  }

  get resultValue(){
    return this.result;
  }

  static generateRandomIndexForReel(reelLength: number) {
    return Math.floor(Math.random() * reelLength) + 1;
  }

  spin(){

  }

  evaluateResult(): number{
    return 1;
  }
}

const mySlotMachine = new SlotMachine();
console.log(mySlotMachine.reelsCountValue);
