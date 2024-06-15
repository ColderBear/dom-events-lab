const btns = document.querySelectorAll('.button')

let display = document.querySelector('.display')
display.innerText = 0
let prevInput= ''
let currInput = ''
let operator = ''

btns.forEach((btn) => {
    btn.addEventListener('click', () => filterBtns(btn))
    //function() { filterBtns(btn); }
})


function filterBtns (btn) {
    if(btn.classList.contains('number')){
        handleNumber(btn.innerText)
    }
    else if(btn.classList.contains('operator')){
        if(btn.innerText === 'C'){
            handleClear()
        }
        else{
            handleOperator(btn.innerText)
        }
    }
    else if (btn.classList.contains('equals')){
        handleEqual()
    }
}

function handleNumber(value){
    resetDisplay()
    currInput += value
    display.innerText = currInput
}

function handleOperator(value){
    resetDisplay()
    if(currInput === '' && prevInput !== ''){
        operator = value
    }
    else if(currInput !== ''){
        prevInput = currInput
        operator = value
        currInput = ''
    }
    else{
        handleEqual()
        operator = value
        currInput = ''
    }
}

function handleEqual () {
    if (currInput === '' || prevInput === '' || operator === '') {
        return
    }

    let current = parseFloat(currInput)
    let prev = parseFloat(prevInput)
    let result

    switch(operator){
        case '+':
            result = prev + current
            break;
        case '-':
            result = prev - current
            break;
        case '*':
            result = prev * current
            break;
        case '/':
            result = prev / current
            break;
    }

 display.innerText = result
 prevInput = result.toString()
 currInput = ''
 operator = ''
 displayComplete()
 }

 function handleClear(){
    display.innerText = '0'
    prevInput= ''
    currInput = ''
    operator = ''
    resetDisplay()
 }

function displayComplete(){
    display.style.backgroundColor = 'green'
}

function resetDisplay(){
    display.style.backgroundColor = 'rgb(60, 80, 100)'
}