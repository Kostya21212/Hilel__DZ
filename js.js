let a = ''; // перше число
let b = ''; // друге число
let sign = ''; // знак операції

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];

// екран
const out = document.querySelector('#input-calc-res');
const outResult = document.querySelector('#input-calc-res2')
console.log(out);

function clear() {
    a = '';
    b = '';
    sign = '';
    out.value = '0';
}

document.querySelector('#red-btn').onclick = clear;

document.querySelector('.wrap').onclick = (event) => {
    // натиснута не кнопка
    if (!event.target.classList.contains('btn')) return;
    // натиснута кнопка clear
    if (event.target.classList.contains('red-btn')) return;

    // отримую натискану кнопку
    const key = event.target.textContent;

    // перевіряю, чи це перше чи друге число, і встановлюю значення a або b відповідно
    if (digit.includes(key)) {
        if (sign === '') {
            a += key;
            out.value = a;
        } else {
            b += key;
            out.value = a + sign + b;
        }
    } else if (action.includes(key)) {
        sign = key;
        out.value = a + sign;
        
    }

    // якщо нажата кнопка + - / *
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        return;
    }

    // нажата кнопка =
    if (key === '=') {
        calculate();
    }
};

function calculate() {
    if (a === '' || b === '' || sign === '') {
        // перевіряємо, чи є достатньо значень для обчислень
        return;
    }

    switch (sign) {
        case '+':
            a = (parseFloat(a) + parseFloat(b)).toString();
            break;
        case '-':
            a = (parseFloat(a) - parseFloat(b)).toString();
            break;
        case 'x':
            a = (parseFloat(a) * parseFloat(b)).toString();
            break;
        case '/':
            a = (parseFloat(a) / parseFloat(b)).toString();
            break;
    }

    outResult.value = a;
    b = ''; // очистимо значення b для нового введення
    sign = ''; // очистимо знак операції
}
