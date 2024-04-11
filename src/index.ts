import { RuleChecker } from "./ruleChecker";
import { SlotMachine } from "./slotMachine";

const mySlotMachine = new SlotMachine();
mySlotMachine.spin();
console.log(mySlotMachine.presentResult());

RuleChecker.checkForWinningConditions(mySlotMachine.resultValue)
