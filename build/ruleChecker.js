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
                    winningConditions.push(`Strategy ${i} wins`);
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
        if (pattern == 0 || pattern == 1 || pattern == 2) {
            const valueToSearch = arrOfNums[0];
        }
    }
}
exports.RuleChecker = RuleChecker;
RuleChecker.lines = configuration_1.default.lines;
RuleChecker.pattern = [0, 1, 2];
RuleChecker.symbolsLookupMap = configuration_1.default.symbols;
