import { BaseGenerator } from './BaseGenerator';
import { NumberGenerator } from './NumberGenerator';
import { IStructerObjectType } from '../interfaces/IStructerObject';
import { StringGenerator } from './StringGenerator';
import { FakerGenerator } from './FakerGenerator';
import { BooleanGenerator } from './BooleanGenerator';

export class GeneratorFactory {
    public getGenerator(type: IStructerObjectType): BaseGenerator {
        if (type === 'number') {
            return new NumberGenerator();
        } else if (type === 'string') {
            return new StringGenerator();
        } else if (type === 'fake') {
            return new FakerGenerator();
        } else if (type === 'boolean') {
            return new BooleanGenerator();
        } else {
            throw new Error('Incorrect type');
        }
    }
}
