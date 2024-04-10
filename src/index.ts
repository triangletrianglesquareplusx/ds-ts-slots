class SlotMachine {
  protected reelsCount: number;
  protected rowsCount: number;

  constructor(reelsCount: number, rowsCount: number) {
    this.reelsCount = reelsCount;
    this.rowsCount = rowsCount;
  }

  static generateRandomIndexForReel(reelLength: number) {
    return Math.floor(Math.random() * reelLength) + 1;
  }
}
