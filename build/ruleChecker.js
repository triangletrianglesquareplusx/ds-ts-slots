"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleChecker = void 0;
const configuration_1 = __importDefault(require("./configuration"));
class RuleChecker {
    static checkForWinningConditions(slotMatrix) {
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
        console.log("Your payout is " +
            (total > 0 ? `${total}` : `${total}, sorry no winnings`));
    }
    static checkGenericWinningCondition(arrOfNums, index) {
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
    static checkComplexWinningCondition(arrOfNums) {
        let numbers = [];
        for (let i = 0; i < arrOfNums.length; i++) {
            numbers.push(arrOfNums[i]);
            i++;
        }
        if (arrOfNums[0] == arrOfNums[1] && arrOfNums[1] == arrOfNums[2] && (arrOfNums[3] == arrOfNums[4])) {
        }
        return numbers;
    }
    static calculatePayout(arrOfNums, pattern) {
        let payout = 0;
        if (pattern == 0 || pattern == 1 || pattern == 2) {
            let valueToSearch = arrOfNums[0];
            console.log(valueToSearch + " is the value to search");
            payout = RuleChecker.symbolsLookupMap[valueToSearch][4];
        }
        else if (pattern == 3 || pattern == 4) {
            let valueToSearch = arrOfNums[0];
            payout += RuleChecker.symbolsLookupMap[valueToSearch][2];
            let secondValueToSearch = arrOfNums[3];
            payout += RuleChecker.symbolsLookupMap[secondValueToSearch][1];
        }
        return payout;
    }
}
exports.RuleChecker = RuleChecker;
RuleChecker.lines = configuration_1.default.lines;
RuleChecker.pattern = [0, 1, 2, 3, 4];
//yes I know about type inferrence but if I did not use this typing for symbolsLookupMap ts was giving me an accessor error. So I am pressed for time and have to use this way
RuleChecker.symbolsLookupMap = configuration_1.default.symbols;
