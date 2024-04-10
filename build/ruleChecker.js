"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = __importDefault(require("./configuration"));
class RuleChecker {
    constructor() {
        RuleChecker.lines = configuration_1.default.lines;
    }
    static checkForWinningConditions(slotMatrix) {
        console.log(RuleChecker.lines);
    }
    static calculatePayOut() {
    }
}
