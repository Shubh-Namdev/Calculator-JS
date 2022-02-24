let currentVal = [];

updateInputBox = (val) => {
    const inputBox = document.getElementById('input');
    let lastVal;

    if (val === 'clr') {
        inputBox.value = '';
        currentVal = [];

    } else if (val === '=') {
        if (currentVal[1] === '+') {
            lastVal = parseFloat(currentVal[0]) + parseFloat(currentVal[2]);
            inputBox.value = lastVal;
            currentVal = [];
            currentVal.push(lastVal);
        } else if (currentVal[1] === '-') {
            lastVal = parseFloat(currentVal[0]) - parseFloat(currentVal[2]);
            inputBox.value = lastVal;
            currentVal = [];
            currentVal.push(lastVal);
        } else if (currentVal[1] === '*') {
            lastVal = parseFloat(currentVal[0]) * parseFloat(currentVal[2]);
            inputBox.value = lastVal;
            currentVal = [];
            currentVal.push(lastVal);

        } else if (currentVal[1] === '/') {
            if (currentVal[0] === '0' && currentVal[2] === '0') {
                inputBox.value = 'NaN';
            } else if (currentVal[2] === '0') {
                inputBox.value = 'infinity';
            } else {
                lastVal = parseFloat(currentVal[0]) * parseFloat(currentVal[2]);
                inputBox.value = lastVal;
                currentVal = [];
                currentVal.push(lastVal);
            }
        }

    } else {
        currentVal.push(val);
        inputBox.value = val;
    }
}

function calculator() {
    const allButtons = document.querySelectorAll('.button');
    allButtons.forEach((eachButton) => {
        eachButton.addEventListener('click', () => {
            updateInputBox(eachButton.value);
        });
    })
}

calculator();

function generateRandomNumber(){
    const randomNumber=Math.ceil((Math.random()*20)+ (-20) );
    console.log(randomNumber);
}
generateRandomNumber();