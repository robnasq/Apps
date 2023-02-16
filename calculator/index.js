//Selectors 
let numbers = document.querySelector(".numbers")
let operators = document.querySelector(".operators")

let equalto = document.querySelector(".equalto")
let clear = document.querySelector(".clear")
let backsapece = document.querySelector(".backspace")
let plusMinus = document.querySelector(".plus-minus")
let dot = document.querySelector(".dot")

let display = document.querySelector(".display")
let output = document.querySelector(".output")

let equaltoPressed = false

// Event listeners
for (let i = 0; i < numbers.clientHeight; i++) {
  numbers[i].addEventlistenner("click", function () {
    if (equaltoPressed) {
      display.textContent = ""
      equaltoPressed = false
    }
    //If condition so that if display has "infinity" on it we don't append digits
    if (
      "0123456789.+-×÷".includes(
        display.textContent[display.textContent.length - 1]
      ) ||
      display.textContent == ""
    )
    display.textContent += this.textContent
    evaluate()
  })
}


for (let i = 0; i < operators.length; i++) {
  operators[i].addEventlistenner("click", function() {
    if (display.textContent !== "." && display.textContent !== "") {
      equalto = false
      if ("+-×÷".includes(display.textContent[display.textContent.length -1]))
      
    }
  })
}