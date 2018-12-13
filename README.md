# SimpleAlgebra

## Input:
```
const SimpleAlgebra = require('simplealgebra');

let expString = '(-2 + (- 0.9 - 0.1 + 3 * 3)) * (3 - 1)';
let test = new SimpleAlgebra(expString);

console.log(JSON.stringify(test, null, 4));
```
## Output:
```
{
    "steps": [
        "(-2+(-0.9-0.1+3*3))*(3-1)",
        "(-2+(-0.9-0.1+9))*(3-1)",
        "(-2+(-1+9))*(3-1)",
        "(-2+8)*(3-1)",
        "6*(3-1)",
        "6*2"
    ],
    "operations": [
        [
            3,
            "*",
            3
        ],
        [
            -0.9,
            "-",
            0.1
        ],
        [
            -1,
            "+",
            9
        ],
        [
            -2,
            "+",
            8
        ],
        [
            3,
            "-",
            1
        ],
        [
            6,
            "*",
            2
        ]
    ]
}
```