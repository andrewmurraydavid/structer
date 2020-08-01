import {fake} from "faker";

export class Structer {
  public generate = (obj:unknown) => {
    // return goThroughKeys(obj);
    console.log(obj)
    console.log(fake('internet.domain'))
    return null;
  }
}

/*
 * GenerateRandomNumberInRange = (integer, min, max) => {
 *   if (!integer && (min && max))
 *     return Math.random() * (max - min) + min;
 *   if (integer && (min && max)) {
 *     min = Math.ceil(min);
 *     max = Math.floor(max);
 *     return Math.floor(Math.random() * (max - min + 1)) + min;
 *   }
 *   return 0;
 * }
 */

/*
 * GenerateRandomNumber = (integer, max) => {
 *   if (!integer && max)
 *     return Math.random() * max;
 *   if (integer && max) {
 *     return Math.floor(Math.random() * max);
 *   }
 *   if (!integer)
 *     return Math.random();
 *   return Math.floor(Math.random());
 * }
 */

/*
 * Const generateForNumbers = node => {
 *   if (node.range) {
 *     const { min, max } = node.range;
 *     return generateRandomNumberInRange(node.integer, min, max);
 *   }
 *   else if (node.max) {
 *     return generateRandomNumber(node.integer, node.max);
 *   }
 *   else return generateRandomNumber(node.integer);
 * }
 */

/*
 * Const generatePerKey = (key, node) => {
 *   switch (node.type) {
 *     case 'number': {
 *       if (node.value)
 *         return node.value
 *       return generateForNumbers(node);
 *     }
 *     case 'string': {
 *       if (node.value)
 *         return node.value
 *       return null;
 *     }
 *     case 'faked': {
 *       return faker.fake(node.value);
 *     }
 *   }
 */

// }

/*
 * Const goThroughKeys = obj => {
 *   Object.keys(obj).forEach(key => {
 *     obj[key] = generatePerKey(key, obj[key]);
 *   });
 *   return obj;
 * }
 */


// Module.exports.generate = generate;
