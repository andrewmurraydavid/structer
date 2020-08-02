import { Structer } from '../src/Structer';

const { generate } = new Structer();

describe('test numbers', () => {
    it('generate random float', () => {
        const floatStructure = {
            floatValue: {
                type: 'number',
            },
        };
        const { floatValue } = generate(floatStructure);
        expect((floatValue as number) % 1 === 0).toBe(false);
    });

    it('generate random float no bigger than 33', () => {
        const floatStructure = {
            floatValue: {
                type: 'number',
                max: 33,
            },
        };
        const { floatValue } = generate(floatStructure);
        expect((floatValue as number) % 1 === 0).toBe(false);
        expect(floatValue).toBeLessThanOrEqual(33);
    });

    it('generate random float between 18 and 22', () => {
        const floatStructure = {
            floatValue: {
                type: 'number',
                range: {
                    min: 18,
                    max: 22,
                },
            },
        };
        const { floatValue } = generate(floatStructure);
        expect((floatValue as number) % 1 === 0).toBe(false);
        expect(floatValue).toBeGreaterThanOrEqual(18);
        expect(floatValue).toBeLessThanOrEqual(22);
    });

    it('generate random integer below 22', () => {
        const floatStructure = {
            floatValue: {
                type: 'number',
                max: 22,
                integer: true,
            },
        };
        const { floatValue } = generate(floatStructure);
        expect((floatValue as number) % 1 === 0).toBe(true);
        expect(floatValue).toBeLessThanOrEqual(22);
    });

    it('generate random integer', () => {
        const floatStructure = {
            floatValue: {
                type: 'number',
                integer: true,
            },
        };
        const { floatValue } = generate(floatStructure);
        expect((floatValue as number) % 1 === 0).toBe(true);
    });

    it('generate random integer between 18 and 22', () => {
        const floatStructure = {
            floatValue: {
                type: 'number',
                range: {
                    min: 18,
                    max: 22,
                },
                integer: true,
            },
        };
        const { floatValue } = generate(floatStructure);
        expect((floatValue as number) % 1 === 0).toBe(true);
        expect(floatValue).toBeGreaterThanOrEqual(18);
        expect(floatValue).toBeLessThanOrEqual(22);
    });

    it('return desired value', () => {
        const floatStructure = {
            floatValue: {
                type: 'number',
                value: 10,
            },
        };
        const { floatValue } = generate(floatStructure);
        expect(floatValue).toBe(10);
    });

    /* it('return 0 because range was not proper', () => {
        const floatStructure = {
            floatValue: {
                type: 'number',
                range: {
                    min: 18,
                },
                integer: true,
            },
        };
        const { floatValue } = generate(floatStructure);
        expect(floatValue).toBe(0);
    }); */
});

describe('test strings', () => {
    it('generate random string', () => {
        const fakedStructure = {
            fakedValue: {
                type: 'fake',
                value: '{{name.jobTitle}}',
            },
        };
        const { fakedValue } = generate(fakedStructure);
        expect(typeof fakedValue).toBe('string');
    });

    it('return desired value', () => {
        const stringStructure = {
            stringValue: {
                type: 'string',
                value: '<CoolValue!@@31',
            },
        };
        const { stringValue } = generate(stringStructure);
        expect(stringValue).toBe('<CoolValue!@@31');
    });

    it('return "undefined" because no value was given', () => {
        const stringStructure = {
            stringValue: {
                type: 'string',
            },
        };
        const { stringValue } = generate(stringStructure);
        expect(stringValue).toEqual('undefined');
    });
});
