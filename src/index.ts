import configuration from "./configuration";

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
  get reelsValueTemp() {
    return this.reels;
  }

  get reelsCountValue() {
    return this.reelsCount;
  }

  get rowsCountValue() {
    return this.reelsCount;
  }

  get resultValue() {
    return this.result;
  }

  static generateRandomIndexForReel(reelLength: number) {
    return Math.floor(Math.random() * reelLength) + 1;
  }

  spin() {
    for (let i = 0; i < this.rowsCount; i++) {
      this.result[i] = [];
      for (let reel of this.reels) {
        this.result[i].push(
          reel[SlotMachine.generateRandomIndexForReel(reel.length-1)]
        );
      }
    }
    return this.result;
  }

  evaluateResult(): number {
    return 1;
  }
}

const mySlotMachine = new SlotMachine();
console.log(mySlotMachine.spin());
