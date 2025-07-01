function somar(...params) {
    let max_length = 0
    const matrix = params
        .map(param => {
            const row = [...`${param}`]
            if(row.length > max_length) {
                max_length = row.length
            }
            return row
        })
    matrix.unshift([])
    matrix
        .map(row => {
            while(row.length < max_length) {
                row.unshift('0')
            }
            return row
        })
    const align_matrix = () => {
        matrix
            .map(row => {
                while(row.length < max_length) {
                    row.unshift('0')
                }
                return row
            })
    }
    align_matrix()
    let result = []
    for (let i = max_length - 1, j = 0; i >= 0; i--, j++) {
        let row_target = 0
        for (let k = 0; k < matrix.length; k++) {
            const element = matrix[k]
            row_target += parseInt(element[i])
            matrix[0] = [...`${row_target * (Math.pow(10, j))}`]
            align_matrix()
        }
        row_target * (Math.pow(10, j))
        const target_as_matrix_all_slots = [...`${row_target * (Math.pow(10, j))}`]
        const target_as_matrix = [...`${row_target}`]
        target_as_matrix.length > 0 && result.unshift(target_as_matrix[target_as_matrix.length - 1])
        if(target_as_matrix_all_slots.length > max_length) {
            target_as_matrix_all_slots.slice(0, target_as_matrix_all_slots.length - max_length).forEach(
                (element, index) => {
                    if(index === 0) {
                        result.unshift(element)
                    } else {
                        result.unshift('0')
                    }
                }
            )
        }
    }
    return result.join('')
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