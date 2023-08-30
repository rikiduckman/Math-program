document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startBtn");
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const submitButton = document.getElementById("submitBtn");
    const resultInput = document.getElementById("result");
    const resultMessage = document.getElementById("resultMessage");
    const scoreHeading = document.getElementById("score");
    const totalHeading = document.getElementById("total");
    const operationLabel = document.getElementById("operationLabel");
   
    let score = 0;
    let total = 0;
    let result = 0;
    
    const operationButtons = document.querySelectorAll('input[name="operation"]');
    operationButtons.forEach(button => {
        button.addEventListener("change", function() {
            operationLabel.textContent = button.value;
        });
    });
    startButton.addEventListener("click", function() {
            const randomNum1 = Math.floor(Math.random() * 100);
            const randomNum2 = Math.floor(Math.random() * 100);
            num1Input.value = randomNum1;
            num2Input.value = randomNum2;
    });
    submitButton.addEventListener("click", function() {
        let selectedOperation = "";
        operationButtons.forEach(button => {
            if (button.checked) {
                selectedOperation = button.value;
                total++;
            }
        });
        if (selectedOperation === "") {
            resultMessage.textContent = "กรุณาเลือกเครื่องหมาย";
            return;
        }
        
        if (selectedOperation === "+") {
            result = parseInt(num1Input.value) + parseInt(num2Input.value);
        } else if (selectedOperation === "-") {
            result = parseInt(num1Input.value) - parseInt(num2Input.value);
        } else if (selectedOperation === "*") {
            result = parseInt(num1Input.value) * parseInt(num2Input.value);
        } else if (selectedOperation === "/") {
            result = parseInt(num1Input.value) / parseInt(num2Input.value);
        }
       
        
        const userResult = parseInt(resultInput.value);
        if (userResult === result) {
            score += 1;
            resultMessage.textContent = "ถูกต้อง!";
        } else {
            resultMessage.textContent = "ผิด!"+" คำตอบที่ถูกต้องคือ"+ result;
        }
        scoreHeading.textContent =+score;
        totalHeading.textContent =+total;
        
    });
  });