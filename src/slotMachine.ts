import configuration from "./configuration";

export class SlotMachine {
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

  presentResult(): string {
    
    const formattedResult = this.result.map((row: number[], i) => {
      if (i === 0) {
          const headerRow = '|R1|R2|R3|R4|R5|';
          return `${headerRow}\n${row.map(num => num.toString().padStart(2, ' ')).join(" ")}`;
      } else {
          return row.map(num => num.toString().padStart(2, ' ')).join(" ");
      }
  }).join("\n");
      
    return formattedResult;
  }
}


