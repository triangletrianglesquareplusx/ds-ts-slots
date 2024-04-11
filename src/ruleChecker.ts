import configuration from "./configuration";

export class RuleChecker {
  private static lines = configuration.lines;
  private static pattern = [0, 1, 2];
  private static symbolsLookupMap = configuration.symbols;
  static checkForWinningConditions(slotMatrix: number[][]): void {
    const winningConditions: string[] = [];
    console.log(slotMatrix);
    for (let i = 0; i < RuleChecker.lines.length; i++) {
      //this might account for the first three conditions
      const line = RuleChecker.lines[i];
      const pattern = RuleChecker.pattern[i];
      console.log(`i is ${i}, line is ${line}, pattern is ${pattern}`);

      if (line[0] === pattern) {
        const lineValue = slotMatrix[pattern].reduce(
          (prev, current) => prev + current,
          0
        );
        const lineLength = slotMatrix[pattern].length;

        if (lineValue % lineLength === 0) {
          winningConditions.push(`Strategy ${i} wins`);
        }
      }
    }

    if (winningConditions.length > 0) {
      console.log("Winning Conditions:", winningConditions.join(", "));
    } else {
      console.log("No winning conditions met.");
    }
  }

  static calculatePayout(arrOfNums: number[], pattern: number) {
    if (pattern == 0 || pattern == 1 || pattern == 2) {
      const valueToSearch = arrOfNums[0];
    }
  }
}
