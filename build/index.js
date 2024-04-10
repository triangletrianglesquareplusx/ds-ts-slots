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
        this.result.map((row) => row.join(' ') + '\n');
        return this.result;
    }
}
const mySlotMachine = new SlotMachine();
mySlotMachine.spin();
console.log(mySlotMachine.presentResult());
