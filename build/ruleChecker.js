"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleChecker = void 0;
const configuration_1 = __importDefault(require("./configuration"));
class RuleChecker {
    static checkForWinningConditions(slotMatrix) {
        let result = "";
        // go over all of the strategies since multiple conditions might be true. 
        //check strategy 0
        if (RuleChecker.lines[0][0] == RuleChecker.pattern[0]) {
            const lineValue = slotMatrix[RuleChecker.pattern[0]].reduce((prev, acc) => prev + acc, 0);
            const lineLength = slotMatrix[0].length;
            //if we do a module for the full value of the line by its length and get 0 this means all members are the same
            if (lineValue % lineLength == 0) {
                result = 'Strategy 0 wins';
            }
        }
        else if (RuleChecker.lines[1][0] == RuleChecker.pattern[1]) {
        }
        //rule 1
        const lineToSum = slotMatrix[0].reduce((prev, acc) => acc + prev, 0);
        lineToSum % slotMatrix[0].length == 0
            ? (result = "you win")
            : (result = "you lose");
        //rule 2
        // const lineToSum2 = slotMatrix[1].reduce((prev, acc) => acc + prev, 0);
        // lineToSum % slotMatrix[0].length == 0
        //   ? (result = "you win")
        //   : (result = "you lose");
        //rule 3
        // const lineToSum3 = slotMatrix[2].reduce((prev, acc) => acc + prev, 0);
        // lineToSum % slotMatrix[0].length == 0
        //   ? (result = "you win")
        //   : (result = "you lose");
    }
    static calculatePayout() { }
}
exports.RuleChecker = RuleChecker;
RuleChecker.lines = configuration_1.default.lines;
RuleChecker.pattern = [0, 1, 2];
