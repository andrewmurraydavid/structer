import { GeneratorFactory } from './generators/GeneratorFactory';
import { IStructerObjectType, IStructerObject } from './interfaces/IStructerObject';
import { IStructerInput } from './interfaces/IStructerInput';
import { IStructerOutput, IStructerOutputTypes } from './interfaces/IStructerOutput';

export class Parser {
    private generatorFactory = new GeneratorFactory();
    private node: IStructerObject | undefined;

    public goThroughKeys = (object: IStructerInput): IStructerOutput => {
        const outObject = {} as IStructerOutput;

        Object.keys(object).forEach((key: string) => {
            this.node = object[key];
            outObject[key] = this.generateValueForKey();
        });

        return outObject;
    };

    private generateValueForKey = (): IStructerOutputTypes => {
        if (!this.node) {
            throw new Error('Invalid node');
        }
        const generator = this.generatorFactory.getGenerator(this.node.type as IStructerObjectType);

        return generator.generate(this.node);
    };
}
