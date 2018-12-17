/**
 * Perform the operations inside a parenthesis first
 * Then exponents
 * Then multiplication and division, from left to right
 * Then addition and subtraction, from left to right
 */
class SimpleAlgebra {
	constructor (expression) {
		this.steps = [];
		this.operations = [];
		//
		expression = expression.replace(/\(([\d.]+)\)/g, '$1');
		//
		this.result = this.solve(expression);
	}

	basicOperation (a, b, operator) {
		a = parseFloat(a);
		b = parseFloat(b);
		operator = operator.toString().trim();
		//
		this.operations.push([a, operator, b]);
		//
		switch (operator) {
			case '+':
				return a + b;
			case '-':
				return a - b;
			case '/':
				return a / b;
			case '*':
				return a * b;
      case '**':
      case '^':
				return Math.pow(a, b);
		}
	}

	solve (expression) {
		expression = expression.replace(/[^\d\(\)\.\+\-\*\/\^]/g, ''); // scaped suported operators
		this.steps.push(expression);
		var innerExp = expression.match(/\(([^\)(]+)\)/);
		if (innerExp) {
			expression = innerExp.input.replace(innerExp[0], this.algebraSequence(innerExp[0]));
		} else {
			expression = this.algebraSequence(expression);
		}
		let matchResult = expression.match(/^([\d.]+)$/);
		if (!matchResult) {
			expression = this.solve(expression);
		}
		return expression;
	}

	algebraSequence (expression) {
		let matchResult = null;
		let operators = [ '^', '**', '/', '*', '-', '+']; // operators in inportance order
		operators.forEach(op => {
			if (!matchResult) {
				let regExp = new RegExp(`(\-*[\\d\\.]+)(\\s*\\${op}\\s*)([\\d\\.]+)`);
				matchResult = expression.match(regExp);
			}
		});
		let returnValue = expression;
		if (matchResult) {
      console.log(matchResult);
			let operationResult = this.basicOperation(matchResult[1], matchResult[3], matchResult[2]);
			this.operations[this.operations.length - 1].push('=');
			this.operations[this.operations.length - 1].push(operationResult);
			returnValue = returnValue.replace(matchResult[0], operationResult.toString());
		}
		// removendo parenteses desnecessários
		matchResult = returnValue.match(/\(([\d.]+)\)/);
		if (matchResult) {
			returnValue = matchResult[1];
		}
		return returnValue;
	}
}

module.exports = SimpleAlgebra;
