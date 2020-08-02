import {Structer} from "./src/Structer";

import structure from './src/mock.structure.json';

const {generate} = new Structer();

console.log(generate(structure));