import configuration from "./configuration";

export class RuleChecker {
  private static lines = configuration.lines;
  private static pattern = [0, 1, 2, 3, 4];
  //yes I know about type inferrence but if I did not use this typing for symbolsLookupMap ts was giving me an accessor error. So I am pressed for time and have to use this way
  private static symbolsLookupMap: {
    [symbol: number]: number[];
  } = configuration.symbols;

  static checkForWinningConditions(slotMatrix: number[][]): void {
    //total
    let total = 0;

    //test first/second/third condition
    for (let i = 0; i < 3; i++) {
      //since there are three basic winning probabilities which are similar
      let winLine = i;
      const evalLine = slotMatrix[winLine];
      total += RuleChecker.checkGenericWinningCondition(evalLine, winLine);
    }
    let flattenedArr = [slotMatrix[0], slotMatrix[1]].flat();

    //total += RuleChecker.checkComplexWinningCondition(flattenedArr);

    console.log(
      "Your payout is " +
        (total > 0 ? `${total}` : `${total}, sorry no winnings`)
    );
  }

  static checkGenericWinningCondition(arrOfNums: number[], index: number) {
    //winning condition 1/2/3
    let payoutVal = 0;
    const line = RuleChecker.lines[index];
    //[0, 0, 0, 0, 0]
    const pattern = RuleChecker.pattern[index];
    //0
    let containsDifferentInts = false;
    if (line[0] === pattern) {
      const comparator = arrOfNums[0];
      //1 lets say
      for (let i = 0; i < arrOfNums.length; i++) {
        if (comparator != arrOfNums[i]) {
          containsDifferentInts = true;
        }
      }

      if (!containsDifferentInts) {
        payoutVal = RuleChecker.calculatePayout(arrOfNums, pattern);
      }
    }
    return payoutVal;
  }

  static checkComplexWinningCondition(arrOfNums: number[]) {
    let payoutVal = 0;
    let numbers = []
    for (let i = 0; i < arrOfNums.length; i++) {
      numbers.push(arrOfNums[i]);
      i++;
    }
    let firstVal = arrOfNums[0];
    let secondVal = arrOfNums[3];

    let lookupMap = {
      [firstVal]: 0,
      [secondVal]:0
    }

    if(arrOfNums[0] == arrOfNums[1] && arrOfNums[1] == arrOfNums[2] && (arrOfNums[3] == arrOfNums[4])){
      lookupMap[firstVal] = 3
      lookupMap[secondVal] = 2
    }
    
    // return numbers;

  }

  static calculatePayout(arrOfNums: number[], pattern: number) {
    let payout = 0;
    if (pattern == 0 || pattern == 1 || pattern == 2) {
      let valueToSearch = arrOfNums[0];
      console.log(valueToSearch + " is the value to search");
      payout = RuleChecker.symbolsLookupMap[valueToSearch][4];
    }else if(pattern == 3 || pattern == 4){
      let valueToSearch = arrOfNums[0]
      payout += RuleChecker.symbolsLookupMap[valueToSearch][2]
      
      let secondValueToSearch = arrOfNums[3]
      payout += RuleChecker.symbolsLookupMap[secondValueToSearch][1]
    }
    return payout;
  }
}
