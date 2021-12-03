import { readFileSync } from "fs";

class main {
    private file = readFileSync(__dirname + '/input.txt', 'utf-8');
    private numberArray: Array<number> = [];

    constructor() {
        this.fileToArray();

        // Day 1 part 1
        console.log(this.calculateIncreases(this.fileToArray()));

        // Day 2 part 2
        console.log(this.calculateIncreases(this.sortWindowSizes(this.fileToArray())))
    }

    fileToArray(): Array<number> {
        const fileLength = this.file.length;
        return this.numberArray = this.file.split('\n').map((entry) => parseInt(entry));
    }

    private calculateIncreases(inArr: Array<number>): number {
        let increasedCount: number = 0;
        for (let i = 0; i < inArr.length; i++) {
            // Check if this is the last element
            if (i !== inArr.length) {
                if (inArr[i] < inArr[i+1]) {
                    // Next item has INCREASED
                    increasedCount++;
                }
            }
        }
        
        return increasedCount;
    }

    // Three subsequent numbers are a measurement for one window
    private sortWindowSizes(inArr: Array<number>): Array<number> {
        const windowSize: Array<number> = [];

        for (let i = 0; i < inArr.length; i++) {
            if (i !== inArr.length - 1) {
                // Collect next three values
                    windowSize.push(inArr[i] + inArr[i+1] + inArr[i+2]);
            } else {
                break;
            }
        }

        return windowSize;

    }
}

new main();
