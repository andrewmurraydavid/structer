import { IStructerInput } from './interfaces/IStructerInput';
import { Parser } from './Parser';
import { IStructerOutput } from './interfaces/IStructerOutput';

export class Structer {
    private parser = new Parser();

    public generate = (input: IStructerInput): IStructerOutput => {
        return this.parser.goThroughKeys(input);
    };
}
