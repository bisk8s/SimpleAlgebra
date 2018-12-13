const SimpleAlgebra = require('./simpleAlgebra.js');

let expString = '(-2 + (- 0.9 - 0.1 + 3 * 3)) * (3 - 1)';
let test = new SimpleAlgebra(expString);

console.log(JSON.stringify(test, null, 4));