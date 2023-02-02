// my variables
let x =''; //first variable
let y =''; //second variable
let sign =''; //operation sign
let finish = false; //finish

// my arrays
const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/','%'];

// calculator screen 
const out = document.querySelector('.calculator-screen p');

// functions

function clearall() {
    x =''; //first variable
    y =''; //second variable
    sign =''; //operation sign
    finish = false; //finish
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearall;
document.querySelector('.buttons').onclick = (event) => {
    //no button pressed
    if(!event.target.classList.contains('btn')) return;
    //ac button pressed
    if(event.target.classList.contains('ac')) return;

    out.textContent = ''; //clear screen after click ac
    //get pressed button
    const key = event.target.textContent;
    // if pressed nubmer button 0-9 or .
    if (digit.includes(key)) { //button click test
        if (y ==='' && sign === '') {
            x += key;
            
            out.textContent = x;
        }
        else if (x!=='' && y!=='' && finish) {
            y = key;
            finish = false;
            out.textContent = y;
        }
        else {
            y += key;
            out.textContent = y;
        }
        console.table(x,y,sign);
        return;
    }
    // if pressed button + - / * %
    if (action.includes(key)) { //button click test
        sign = key;
        out.textContent = sign;
        console.table(x, y, sign);
        return;
    }
    // if pressed =
    if (key === '=') {
        if (y === '') y = x;
        switch (sign) {
            case "+":
                x = (+x) + (+y);
                break;
            case "-":
                x = x - y;
                break;   
            case "X":
                x = x * y;
                break;
            case "/":
                if (y === '0') {
                    out.textContent = 'Error';
                    x='';
                    y='';
                    sign = '';
                    return;
                }
                x = x / y;
                break;
            case "%":
                x = (x / 100) * y;
                break;
        }
        finish = true;
        out.textContent = x;
        console.log(x, y, sign);
    }

}