"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleChecker = void 0;
const configuration_1 = __importDefault(require("./configuration"));
class RuleChecker {
    static checkForWinningConditions(slotMatrix) {
        const winningConditions = [];
        console.log(slotMatrix);
        for (let i = 0; i < RuleChecker.lines.length; i++) {
            //this might account for the first three conditions
            const line = RuleChecker.lines[i];
            const pattern = RuleChecker.pattern[i];
            console.log(`i is ${i}, line is ${line}, pattern is ${pattern}`);
            if (line[0] === pattern) {
                const lineValue = slotMatrix[pattern].reduce((prev, current) => prev + current, 0);
                const lineLength = slotMatrix[pattern].length;
                if (lineValue % lineLength === 0) {
                    let testVal = RuleChecker.calculatePayout(slotMatrix[pattern], pattern);
                    winningConditions.push(`Strategy ${i} wins, payout is ${testVal}`);
                }
            }
        }
        if (winningConditions.length > 0) {
            console.log("Winning Conditions:", winningConditions.join(", "));
        }
        else {
            console.log("No winning conditions met.");
        }
    }
    static calculatePayout(arrOfNums, pattern) {
        let payout = 0;
        if (pattern == 0 || pattern == 1 || pattern == 2) {
            let valueToSearch = arrOfNums[0];
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
