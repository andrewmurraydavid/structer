import { BaseGenerator } from './BaseGenerator';
import { IStructerObject } from '../interfaces/IStructerObject';

export class StringGenerator extends BaseGenerator {
    constructor() {
        super('string');
    }

    public generate(node: IStructerObject): string {
        if (node.value && typeof node.value === 'string') {
            return node.value;
        }

        return `${node.value}`;
    }
}
