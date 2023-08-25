// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

function randomNumbers() {
    return Math.floor(Math.random()*100)+1
}

// Iteration 3: Creating variables required to make the game functional

const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const timer =document.getElementById("timer")
let operator;
let score = 0
let time = 20

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

const number3 = document.getElementById("number3")

// Iteration 5: Creating a randomise function to make the game functional

function displayNumbers() {
    let num1 = randomNumbers();
    let num2 = randomNumbers();
    number1.innerText = num1;
    number2.innerText = num2;
    let num3 = updateNumber(num1,num2)
    number3.innerText = num3
}

displayNumbers();

function updateNumber(num1,num2) {
    let ans = 0
    let operators = ["+","-","X","/","%"]
    x = Math.floor(Math.random()*5)
    operator = operators[x]
    console.log(operator)
    if(operator == "+") ans = num1+num2
    else if(operator == "-") ans = num1-num2
    else if(operator == "X") ans = num1*num2
    else if(operator == "/") ans = Math.floor(num1/num2)
    else if(operator == "%") ans = num1%num2
return ans
}

function checkAnswer(i) {
    if(i == "plus" && operator == "+" || i == "minus" && operator == "-" || i == "mul" && operator == "X" || i == "divide" && operator == "/" || i == "modulus" && operator == "%") {
        displayNumbers()
        score++
        time = 20
    } else {
        gameOver()
    }
}

// Iteration 6: Making the Operators (button) functional

const button = document.getElementById("buttons")

button.addEventListener("click", (e) =>{
    checkAnswer(e.target.id)
})

// Iteration 7: Making Timer functional

setInterval(setTime,1000)

function setTime() {
    timer.innerText = time
    time--
    if (time <= 0) gameOver()
}

function gameOver() {
    localStorage.setItem("score",score)
    location.href = "gameover.html"
}