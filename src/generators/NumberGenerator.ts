import { BaseGenerator } from './BaseGenerator';
import { IStructerObject } from '../interfaces/IStructerObject';

export class NumberGenerator extends BaseGenerator {
    constructor() {
        super('number');
    }

    public generate(node: IStructerObject): number {
        if (node.value && typeof node.value === 'number') {
            return node.value;
        }
        return this.generateForNumbers(node);
    }

    private generateForNumbers = (node: IStructerObject) => {
        if (node.range) {
            const { min, max } = node.range;
            return this.generateRandomNumberInRange(!!node.integer, min, max);
        } else if (node.max) {
            return this.generateRandomNumber(!!node.integer, node.max);
        } else return this.generateRandomNumber(!!node.integer);
    };

    private generateRandomNumberInRange = (integer: boolean, min: number, max: number) => {
        if (!integer && min && max) return Math.random() * (max - min) + min;
        if (integer && min && max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return 0;
    };
    private generateRandomNumber = (integer: boolean, max?: number) => {
        if (!integer && max) return Math.random() * max;
        if (integer && max) {
            return Math.floor(Math.random() * max);
        }
        if (!integer) return Math.random();
        return Math.floor(Math.random());
    };
}
