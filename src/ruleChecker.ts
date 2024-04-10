import configuration from "./configuration";

class RuleChecker {
    private static lines: number[][];

    constructor(){
        RuleChecker.lines = configuration.lines
    }

    static checkForWinningConditions(slotMatrix: number[][]):void{
        console.log(RuleChecker.lines)
    }

    static calculatePayOut(){

    }
}