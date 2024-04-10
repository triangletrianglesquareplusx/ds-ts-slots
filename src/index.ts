import configuration from "./configuration";
import { RuleChecker } from "./ruleChecker";

class SlotMachine {
  protected reelsCount: number;
  protected rowsCount: number;
  protected reels: number[][];
  private result: number[][];
  private winningLines: number[][];

  constructor() {
    this.reelsCount = configuration.reelsCount;
    this.rowsCount = configuration.rowsCount;
    this.reels = configuration.reels;
    this.result = [];
    this.winningLines = configuration.lines;
  }
  get reelsValueTemp() {
    return this.reels;
  }

  get reelsCountValue() {
    return this.reelsCount;
  }

  get rowsCountValue() {
    return this.rowsCount;
  }

  get resultValue() {
    return this.result;
  }

  static generateRandomIndexForReel(reelLength: number) {
    return Math.floor(Math.random() * reelLength) + 1;
  }

  spin(): void {
    for (let i = 0; i < this.rowsCount; i++) {
      this.result[i] = [];
      for (let reel of this.reels) {
        const randomIndex = SlotMachine.generateRandomIndexForReel(
          reel.length - 1
        );
        this.result[i].push(reel[randomIndex]);
      }
    }
  }

  evaluateResult(): number {
    return 1;
  }

  presentResult(): string {
    const formattedResult = this.result
      .map((row: number[]) => row.join(" "))
      .join("\n");
    return formattedResult;
  }
}

const mySlotMachine = new SlotMachine();
mySlotMachine.spin();
console.log(mySlotMachine.presentResult());

RuleChecker.checkForWinningConditions([[1,2,3], [2,2,2]])
