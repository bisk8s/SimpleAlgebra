const SimpleAlgebra = require('./index.js');

let expStrings = [
  '(-2 + (- 0.9 - 0.1 + 3 * 3)) * (3 - 1)', // 12
   '-4/2 - (1/2)' // -2,5
]
expStrings.forEach(expString => { 
  let testSA = new SimpleAlgebra(expString);
  console.log(`Test: ${JSON.stringify(testSA, null, 4)}`);
})