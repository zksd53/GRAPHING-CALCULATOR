        let valueDisplayed = document.querySelector('.result-display');

    document.querySelector('.tip-calculator').addEventListener('click', function () {
        let tipAmount = prompt('Enter your total bill amount:');
        let tipPercent = prompt('Enter your tip percentage (e.g., 15 for 15%):');

        let tipValue = (tipAmount * tipPercent) / 100;
        let total = parseFloat(tipAmount) + tipValue;

        valueDisplayed.textContent = total;
    });

    document.querySelector('.Graph').addEventListener('click', function () {
        
        window.location.href = 'a.html';
});

    document.querySelector('.clear').addEventListener('click',function(){
        valueDisplayed.textContent = 0;
    });

    document.querySelector('.inverse').addEventListener('click',function(){
        let value = valueDisplayed.textContent;
        let v = 1/value;
        valueDisplayed.textContent = v;
    });

    document.querySelector('.sqrt').addEventListener('click',function(){
        let value = valueDisplayed.textContent;
        let v = Math.sqrt(value);
        valueDisplayed.textContent = v;
    });

    document.querySelector('.square').addEventListener('click',function(){
        let value = valueDisplayed.textContent;
        let v = (value*value);
        valueDisplayed.textContent = v;
    });

    document.querySelector('.percent').addEventListener('click',function(){
        let value = valueDisplayed.textContent;
        let v = (value/100);
        valueDisplayed.textContent = v;
    });

    document.querySelector('.multiply').addEventListener('click', function () {
    valueDisplayed.textContent += ' * ';
    });

    document.querySelector('.divide').addEventListener('click', function () {
    valueDisplayed.textContent += ' / ';
    });

    document.querySelector('.plus').addEventListener('click', function () {
        valueDisplayed.textContent += ' + ';
    });

    document.querySelector('.minus').addEventListener('click', function () {
        valueDisplayed.textContent += ' - ';
    });

     document.querySelector('.decimal').addEventListener('click',function(){
        let calculatorValue = valueDisplayed.textContent;

        valueDisplayed.textContent = `${calculatorValue}.`;
    });

    document.querySelector('.num-0').addEventListener('click', function () {
    if (valueDisplayed.textContent === '0') {
        valueDisplayed.textContent = '0';
    } else {
        valueDisplayed.textContent += '0';
    }
});

document.querySelector('.num-1').addEventListener('click', function () {
    if (valueDisplayed.textContent === '0') {
        valueDisplayed.textContent = '1';
    } else {
        valueDisplayed.textContent += '1';
    }
});

document.querySelector('.num-2').addEventListener('click', function () {
    if (valueDisplayed.textContent === '0') {
        valueDisplayed.textContent = '2';
    } else {
        valueDisplayed.textContent += '2';
    }
});

document.querySelector('.num-3').addEventListener('click', function () {
    if (valueDisplayed.textContent === '0') {
        valueDisplayed.textContent = '3';
    } else {
        valueDisplayed.textContent += '3';
    }
});

document.querySelector('.num-4').addEventListener('click', function () {
    if (valueDisplayed.textContent === '0') {
        valueDisplayed.textContent = '4';
    } else {
        valueDisplayed.textContent += '4';
    }
});

document.querySelector('.num-5').addEventListener('click', function () {
    if (valueDisplayed.textContent === '0') {
        valueDisplayed.textContent = '5';
    } else {
        valueDisplayed.textContent += '5';
    }
});

document.querySelector('.num-6').addEventListener('click', function () {
    if (valueDisplayed.textContent === '0') {
        valueDisplayed.textContent = '6';
    } else {
        valueDisplayed.textContent += '6';
    }
});

document.querySelector('.num-7').addEventListener('click', function () {
    if (valueDisplayed.textContent === '0') {
        valueDisplayed.textContent = '7';
    } else {
        valueDisplayed.textContent += '7';
    }
});

document.querySelector('.num-8').addEventListener('click', function () {
    if (valueDisplayed.textContent === '0') {
        valueDisplayed.textContent = '8';
    } else {
        valueDisplayed.textContent += '8';
    }
});

document.querySelector('.num-9').addEventListener('click', function () {
    if (valueDisplayed.textContent === '0') {
        valueDisplayed.textContent = '9';
    } else {
        valueDisplayed.textContent += '9';
    }
});

document.querySelector('.num-00').addEventListener('click', function () {
    if (valueDisplayed.textContent === '0') {
        valueDisplayed.textContent = '00';
    } else {
        valueDisplayed.textContent += '00';
    }
});

document.querySelector('.equals').addEventListener('click', function () {
    try {
        let result = eval(valueDisplayed.textContent);
        valueDisplayed.textContent = result;
    } catch (e) {
        valueDisplayed.textContent = 'Error';
    }
});

