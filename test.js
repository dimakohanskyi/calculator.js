const elementResult = document.getElementById('result')
const firstNum = document.getElementById('first_num')
const secondNum = document.getElementById('second_num')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multipleBtn = document.getElementById('multiple')
const divideBtn = document.getElementById('divide')
let action = '+'



plusBtn.onclick = function () {
    action = '+'
}


minusBtn.onclick = function () {
    action = '-'
}


multipleBtn.onclick = function () {
    action = '*'
}


divideBtn.onclick = function () {
    action = '/'
}


function printResult (result) {
    if (result < 0){
        elementResult.style.color = 'red'
    }else {
        elementResult.style.color = 'green'
    }
    elementResult.textContent = result
}


function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)

    if(actionSymbol === '+'){
        return num1 + num2
    }

    if(actionSymbol === '-'){
        return num1 - num2
    }

    if (actionSymbol === '*'){
        return num1 * num2
    }

    if (actionSymbol === '/'){
        return num1 / num2
    }
}



submitBtn.onclick = function () {
    const result = computeNumbersWithAction(firstNum, secondNum, action)
    printResult(result)
}
