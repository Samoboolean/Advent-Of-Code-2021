import { readFileSync } from "fs";

class main {
    private file = readFileSync(process.cwd() + '/Day 2/input.txt', 'utf-8');

    constructor() {
        this.part1();
        this.part2();
    }

    private part1(): void {
        const sub = new submarine();
        
        this.file.split('\n').forEach((instruction) => {
            if (instruction.includes('forward')) {
                sub.moveForward(parseInt(instruction.split(" ")[1]));
            }

            if (instruction.includes('up')) {
                sub.moveUp(parseInt(instruction.split(" ")[1]));
            }

            if (instruction.includes('down')) {
                sub.moveDown(parseInt(instruction.split(" ")[1]));
            }
        });

        console.log("Part 1 sub: ", sub.getWholeSub());
        console.log('sub.finalPosDepth() :>> ', sub.finalPosDepth());
    }

    private part2(): void {
        const sub = new submarine();
        this.splitFile().forEach((instruction) => {
            if (instruction.includes('forward')) {
                sub.moveForward(parseInt(instruction.split(" ")[1]), true);
            }

            if (instruction.includes('up')) {
                sub.removeAim(parseInt(instruction.split(" ")[1]));
            }

            if (instruction.includes('down')) {
                sub.addAim(parseInt(instruction.split(" ")[1]));
            }
        });

        console.log("Part 2 sub: ", sub.getWholeSub());
        console.log('sub.finalPosDepth() :>> ', sub.finalPosDepth());
    }

    private splitFile(): Array<string> {
        return this.file.split('\n');
    }

}

export class submarine {
    private _horizontalPosition: number = 0;
    private _depth: number = 0;
    private _aim: number = 0;

    public moveForward(amount: number, part2?: boolean): void {
        this._horizontalPosition += amount;

        if (part2) {
            // If amount is 8 and aim is 0: 8 x 0 is 0, depth is unchanged
            this.moveDown(amount * this.aim)
        }
    }

    public moveUp(amount: number, part2?: boolean): void {
        // aka DECREASE the depth
        this._depth -= amount;
    }

    public moveDown(amount: number, part2?: boolean): void {
        // aka: INCREASE the depth
        this._depth += amount;
    }

    public addAim(amount: number): void {
        this._aim += amount;
    }

    public removeAim(amount: number): void {
        this._aim -= amount;
    }

    get horizontalPosition(): number {
        return this._horizontalPosition;
    }

    get depth(): number {
        return this._depth;
    }

    get aim(): number {
        return this._aim;
    }

    public getWholeSub(): string {
        let string: string = 'The submarine has moved a total of: ' + this.horizontalPosition + ' units forward, and changed its depth is: ' + this.depth + ' units.'

        return string;
    }

    public finalPosDepth(): number {
        return this.horizontalPosition * this.depth;
    }
}


new main();