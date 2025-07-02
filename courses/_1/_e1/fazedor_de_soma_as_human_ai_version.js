function somar(...params) {
    let max_length = 0;
    const matrix = params.map(param => {
        const row = [...String(param)];
        if (row.length > max_length) {
            max_length = row.length;
        }
        return row;
    });

    matrix.forEach(row => {
        while (row.length < max_length) {
            row.unshift('0');
        }
    });

    let result = [];
    let carry = 0;
    for (let i = max_length - 1; i >= 0; i--) {
        let column_sum = carry;
        for (let k = 0; k < matrix.length; k++) {
            column_sum += parseInt(matrix[k][i]);
        }
        result.unshift(String(column_sum % 10));
        carry = Math.floor(column_sum / 10);
    }
    if (carry > 0) {
        result.unshift(String(carry));
    }

    while (result.length > 1 && result[0] === '0') {
        result.shift();
    }

    return result.join('');
}

console.log(somar(820, 78, 6)); // "904"
console.log(somar(800, 78, 6)); // "884"
console.log(somar(999, 1)); // "1000"
console.log(somar(5, 3, 2)); // "10"
console.log(somar(0, 0, 0)); // "0"
console.log(somar(123456, 789)); // "124245"
console.log(somar(999999, 999999)); // "1999998"
console.log(somar(42)); // "42"
console.log(somar()); // "0"
console.log(somar(100, 200, 300)); // "600"