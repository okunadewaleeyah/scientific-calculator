
class calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = 
        this.previousOperand = 0
        this.operation = ''
    }

    syntaxError() {
            if (eval(this.currentOperand) == SyntaxError ||
            eval(this.currentOperand) == ReferenceError ||
            eval(this.currentOperand) == TypeError) {
                this.currentOperand == "Syntax Error"
            }
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    degToRad(degrees) {
        return degrees * (Math.PI / 180)
    }

    radToDeg(rad) {
        return rad / Math.PI / 180
    }
    
    tan() {
        this.currentOperand = Math.tan(this.currentOperand)
    }

    cos() {
        this.currentOperand = Math.cos(this.currentOperand)
    }

    sin() {
        this.currentOperand = Math.sin(this.currentOperand)
    }

    tanh() {
        this.currentOperand = Math.tanh(this.currentOperand)
    }

    cosh() {
        this.currentOperand = Math.cosh(this.currentOperand)
    }

    sinh() {
        this.currentOperand = Math.sinh(this.currentOperand)
    }

    log() {
        this.currentOperand = Math.log(this.currentOperand)
    }

    log10() {
        this.currentOperand = Math.log10(this.currentOperand)
    }

    pi() {
        this.currentOperand = Math.PI()
    }

    random () {
        this.currentOperand = Math.random()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = 0
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (!prev || !current) return
        switch(this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = ''
        this.previousOperand = 0
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString() 
        console.log("output", number);
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay 
        if (integerDisplay === !number) {
           return integerDisplay = ''
        }
        
        else{
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }   

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if (this.operation !== null) {
            this.previousOperandTextElement.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }
    }

}




const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const tanButton = document.querySelector('[data-tan]')
const cosButton = document.querySelector('[data-cos]')
const sinButton = document.querySelector('[data-sin]')
const tanhButton = document.querySelector('[data-tanh]')
const coshButton = document.querySelector('[data-cosh]')
const sinhButton = document.querySelector('[data-sinh]')
const logButton = document.querySelector('[data-log]')
const log10Button = document.querySelector('[data-log10]')
const piButton = document.querySelector('[data-pi]')
const randomButton = document.querySelector('[data-random]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calc = new calculator (previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.appendNumber(button.innerText)
        calc.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.chooseOperation(button.innerText)
        calc.updateDisplay()
    })
})


operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calc.chooseOperation(button.innerText)
        calc.updateDisplay()
    })
})
equalsButton.addEventListener('click', button => {
    calc.compute()
    calc.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calc.clear()
    calc.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calc.delete()
    calc.updateDisplay()
})

tanButton.addEventListener('click', button => {
    calc.tan()
    calc.updateDisplay()
})

cosButton.addEventListener('click', button => {
    calc.cos()
    calc.updateDisplay()
})

sinButton.addEventListener('click', button => {
    calc.sin()
    calc.updateDisplay()
})

tanhButton.addEventListener('click', button => {
    calc.tanh()
    calc.updateDisplay()
})

coshButton.addEventListener('click', button => {
    calc.cosh()
    calc.updateDisplay()
})

sinhButton.addEventListener('click', button => {
    calc.sinh()
    calc.updateDisplay()
})

logButton.addEventListener('click', button => {
    calc.log()
    calc.updateDisplay()
})

log10Button.addEventListener('click', button => {
    calc.log10()
    calc.updateDisplay()
})

piButton.addEventListener('click', button => {
    calc.pi()
    calc.updateDisplay()
})

randButton.addEventListener('click', button => {
    calc.random()
    calc.updateDisplay()
})