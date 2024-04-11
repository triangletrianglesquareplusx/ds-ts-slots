"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __importDefault(require("./configuration"));
const ruleChecker_1 = require("./ruleChecker");
class SlotMachine {
    constructor() {
        this.reelsCount = configuration_1.default.reelsCount;
        this.rowsCount = configuration_1.default.rowsCount;
        this.reels = configuration_1.default.reels;
        this.result = [];
        this.winningLines = configuration_1.default.lines;
    }
    get reelsValueTemp() {
        return this.reels;
    }
    get reelsCountValue() {
        return this.reelsCount;
    }
    get rowsCountValue() {
        return this.rowsCount;
    }
    get resultValue() {
        return this.result;
    }
    static generateRandomIndexForReel(reelLength) {
        return Math.floor(Math.random() * reelLength) + 1;
    }
    spin() {
        for (let i = 0; i < this.rowsCount; i++) {
            this.result[i] = [];
            for (let reel of this.reels) {
                const randomIndex = SlotMachine.generateRandomIndexForReel(reel.length - 1);
                this.result[i].push(reel[randomIndex]);
            }
        }
    }
    evaluateResult() {
        return 1;
    }
    presentResult() {
        const formattedResult = this.result.map((row, i) => {
            if (i === 0) {
                const headerRow = '|R1|R2|R3|R4|R5|';
                return `${headerRow}\n${row.map(num => num.toString().padStart(2, ' ')).join(" ")}`;
            }
            else {
                return row.map(num => num.toString().padStart(2, ' ')).join(" ");
            }
        }).join("\n");
        return formattedResult;
    }
}
const mySlotMachine = new SlotMachine();
mySlotMachine.spin();
console.log(mySlotMachine.presentResult());
ruleChecker_1.RuleChecker.checkForWinningConditions([[1, 2, 3], [2, 2, 2]]);
