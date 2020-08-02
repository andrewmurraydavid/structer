import { IStructerObject } from '../interfaces/IStructerObject';
import { IStructerOutputTypes } from '../interfaces/IStructerOutput';

export abstract class BaseGenerator {
    protected type!: string;

    constructor(type: string) {
        this.type = type;
    }

    public abstract generate(object: IStructerObject): IStructerOutputTypes;
}
