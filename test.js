const structer = require('./src');
const structure = require('./src/mock.structure.json');

console.log('structure:', structure);
console.log('\n');
console.log('generated: ', structer.generate(structure));