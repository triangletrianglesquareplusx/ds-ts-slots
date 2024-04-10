import configuration from "./configuration";

export class RuleChecker {
  private static lines: number[][] = configuration.lines;
  private pattern: number[] = [0,1,2];

  static checkForWinningConditions(slotMatrix: number[][]): void {
    let result = "";

    //rule 1
    const lineToSum = slotMatrix[0].reduce((prev, acc) => acc + prev, 0);
    lineToSum % slotMatrix[0].length == 0
      ? (result = "you win")
      : (result = "you lose");

    //rule 2
    const lineToSum2 = slotMatrix[1].reduce((prev, acc) => acc + prev, 0);

    lineToSum % slotMatrix[0].length == 0
      ? (result = "you win")
      : (result = "you lose");

    //rule 3
    // const lineToSum3 = slotMatrix[2].reduce((prev, acc) => acc + prev, 0);

    // lineToSum % slotMatrix[0].length == 0
    //   ? (result = "you win")
    //   : (result = "you lose");
  }

  static calculatePayOut() {}
}
