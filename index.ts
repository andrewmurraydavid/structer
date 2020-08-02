import { Structer } from './src/Structer';

import structure from './src/mock.structure.json';

const { generate } = new Structer();

for (let i = 0; i < 10; i++) console.log(generate(structure));
