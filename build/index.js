"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __importDefault(require("./configuration"));
class SlotMachine {
    constructor() {
        this.reelsCount = configuration_1.default.reelsCount;
        this.rowsCount = configuration_1.default.rowsCount;
        this.reels = configuration_1.default.reels;
        this.result = [];
    }
    get reelsCountValue() {
        return this.reelsCount;
    }
    get rowsCountValue() {
        return this.reelsCount;
    }
    get resultValue() {
        return this.result;
    }
    static generateRandomIndexForReel(reelLength) {
        return Math.floor(Math.random() * reelLength) + 1;
    }
    spin() {
    }
    evaluateResult() {
        return 1;
    }
}
const mySlotMachine = new SlotMachine();
console.log(mySlotMachine.reelsCountValue);
