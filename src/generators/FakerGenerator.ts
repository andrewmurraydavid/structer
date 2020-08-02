import { BaseGenerator } from './BaseGenerator';
import { IStructerObject } from '../interfaces/IStructerObject';
import { fake } from 'faker';

export class FakerGenerator extends BaseGenerator {
    constructor() {
        super('fake');
    }

    public generate(node: IStructerObject): string {
        if (node.value && typeof node.value === 'string') {
            return fake(node.value);
        }

        return `${node.value}`;
    }
}
