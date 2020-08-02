export type IStructerObjectType = 'number' | 'fake' | 'boolean' | 'string' | 'array';

export type IStructerObjectNumberRange = {
    min: number;
    max: number;
};

export interface IStructerObject {
    type: IStructerObjectType | string;
    value?: number | string | boolean | IStructerObject | IStructerObject[];
    range?: IStructerObjectNumberRange;
    max?: number;
    integer?: boolean;
}
