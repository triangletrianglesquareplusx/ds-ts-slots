import configuration from "./configuration";

export class RuleChecker {
  private static lines = configuration.lines;
  private static pattern = [0, 1, 2];
  //yes I know about type inferrence but if I did not use this typing for symbolsLookupMap ts was giving me an accessor error. So I am pressed for time and have to use this way
  private static symbolsLookupMap: {
    [symbol: number]: number[];
  } = configuration.symbols;

  static checkForWinningConditions(slotMatrix: number[][]): void {
    //test first condition
    const firstLine = slotMatrix[0];
    console.log(RuleChecker.chechGenericWinningCondition(firstLine, 0))
  }

  static chechGenericWinningCondition(arrOfNums: number[], index:number){
    //winning condition 1
    const line = RuleChecker.lines[0];
    //[0, 0, 0, 0, 0]
    const pattern = RuleChecker.pattern[0];
    //0
    let containsDifferentInts = false;
    if (line[0] === pattern) {
      const comparator = arrOfNums[index];
      //1 lets say
      for (let i = 0; i < arrOfNums.length; i++) {
        if (comparator != arrOfNums[i]) {
          containsDifferentInts = true;
        }
      }
      let testVal=0;
      if (!containsDifferentInts) {
        testVal = RuleChecker.calculatePayout(
          arrOfNums,
          pattern
        );
      }
      return testVal;
    }
  }

  static calculatePayout(arrOfNums: number[], pattern: number) {
    let payout = 0;
    if (pattern == 0 || pattern == 1 || pattern == 2) {
      let valueToSearch = arrOfNums[0];
      console.log(valueToSearch + ' is the value to search')
      payout = RuleChecker.symbolsLookupMap[valueToSearch][4];
    }
    return payout;
  }
}
