"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ruleChecker_1 = require("./ruleChecker");
const slotMachine_1 = require("./slotMachine");
const mySlotMachine = new slotMachine_1.SlotMachine();
mySlotMachine.spin();
console.log(mySlotMachine.presentResult());
ruleChecker_1.RuleChecker.checkForWinningConditions(mySlotMachine.resultValue);
