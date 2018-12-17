const SimpleAlgebra = require('./index.js');

// let expString = '(-2 + (- 0.9 - 0.1 + 3 * 3)) * (3 - 1)';
let expString = '3 ^ 2';
let testSA = new SimpleAlgebra(expString);

console.log(JSON.stringify(testSA, null, 4));