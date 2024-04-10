"use strict";
class SlotMachine {
    constructor(reelsCount, rowsCount) {
        this.reelsCount = reelsCount;
        this.rowsCount = rowsCount;
    }
    static generateRandomIndexForReel(reelLength) {
        return Math.floor(Math.random() * reelLength) + 1;
    }
}
