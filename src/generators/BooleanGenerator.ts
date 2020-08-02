import { BaseGenerator } from './BaseGenerator';
import { IStructerObject } from '../interfaces/IStructerObject';

export class BooleanGenerator extends BaseGenerator {
    constructor() {
        super('string');
    }

    public generate(node: IStructerObject): boolean {
        if (node.value && typeof node.value === 'boolean') {
            return node.value;
        }

        if (node.trueChance) {
            return this.generateByChance(node.trueChance);
        }

        return this.generateRandom();
    }

    private generateRandom() {
        return Math.random() >= 0.5;
    }

    private generateByChance(chance: number) {
        const probability = chance / 100;

        return Math.random() <= probability;
    }
}
