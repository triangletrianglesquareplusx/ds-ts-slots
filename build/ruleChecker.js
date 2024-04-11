"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleChecker = void 0;
const configuration_1 = __importDefault(require("./configuration"));
class RuleChecker {
    static checkForWinningConditions(slotMatrix) {
        //test first condition
        const firstLine = slotMatrix[0];
        console.log(RuleChecker.chechGenericWinningCondition(firstLine, 0));
    }
    static chechGenericWinningCondition(arrOfNums, index) {
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
            let testVal = 0;
            if (!containsDifferentInts) {
                testVal = RuleChecker.calculatePayout(arrOfNums, pattern);
            }
            return testVal;
        }
    }
    static calculatePayout(arrOfNums, pattern) {
        let payout = 0;
        if (pattern == 0 || pattern == 1 || pattern == 2) {
            let valueToSearch = arrOfNums[0];
            console.log(valueToSearch + ' is the value to search');
            payout = RuleChecker.symbolsLookupMap[valueToSearch][4];
        }
        return payout;
    }
}
exports.RuleChecker = RuleChecker;
RuleChecker.lines = configuration_1.default.lines;
RuleChecker.pattern = [0, 1, 2];
//yes I know about type inferrence but if I did not use this typing for symbolsLookupMap ts was giving me an accessor error. So I am pressed for time and have to use this way
RuleChecker.symbolsLookupMap = configuration_1.default.symbols;
