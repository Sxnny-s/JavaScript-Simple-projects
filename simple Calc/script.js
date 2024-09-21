const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const answer = document.getElementById('answer')



function add(a,b){
    let first = parseFloat(num1.value)
    let second = parseFloat(num2.value)
    let result = first + second
    answer.innerText = result

}

function multiply(a,b){
    let first = parseFloat(num1.value)
    let second = parseFloat(num2.value)
    let result = first * second
    answer.innerText = result

}

function divide(a,b){
    let first = parseFloat(num1.value)
    let second = parseFloat(num2.value)
    let result = first / second
    answer.innerText = result

}

function subtract(a,b){
    let first = parseFloat(num1.value)
    let second = parseFloat(num2.value)
    let result = first - second
    answer.innerText = result

}


function power(a,b){
    let first = parseFloat(num1.value)
    let second = parseFloat(num2.value)
    let result = 1

    for(let i = 0; i < second ;i++){
        result *= first
        
    }
    answer.innerText = result

    

}

function square(a,b){
    let first = num1.value
    let second = num2.value


}