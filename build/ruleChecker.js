"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleChecker = void 0;
const configuration_1 = __importDefault(require("./configuration"));
class RuleChecker {
    constructor() {
        this.pattern = [0, 1, 2];
    }
    static checkForWinningConditions(slotMatrix) {
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
    static calculatePayOut() { }
}
exports.RuleChecker = RuleChecker;
RuleChecker.lines = configuration_1.default.lines;
