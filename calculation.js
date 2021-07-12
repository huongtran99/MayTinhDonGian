let c = "";
let ans;
let d;


function numberOne() {
    c += "1"
    document.getElementById("calculation").innerHTML = c;
}

function numberTwo() {
    c += "2";
    document.getElementById("calculation").innerHTML = c;
}

function numberThree() {
    c += "3";
    document.getElementById("calculation").innerHTML = c;
}

function numberFour() {
    c += "4";
    document.getElementById("calculation").innerHTML = c;
}

function numberFive() {
    c += "5";
    document.getElementById("calculation").innerHTML = c;
}

function numberSix() {
    c += "6";
    document.getElementById("calculation").innerHTML = c;
}

function numberSeven() {
    c += "7";
    document.getElementById("calculation").innerHTML = c;
}

function numberEight() {
    c += "8";
    document.getElementById("calculation").innerHTML = c;
}

function numberNine() {
    c += "9";
    document.getElementById("calculation").innerHTML = c;
}

function numberZero() {
    c += "0";
    document.getElementById("calculation").innerHTML = c;
}

function numberAddition() {
    c += "+";
    document.getElementById("calculation").innerHTML = c;
}

function numberSubtraction() {
    c += "-";
    document.getElementById("calculation").innerHTML = c;
}

function numberMultiplication() {
    c += "*";
    document.getElementById("calculation").innerHTML = c;
}

function numberDivision() {
    c += "/";
    document.getElementById("calculation").innerHTML = c;
}

function numberEqual() {
    let equal = eval(c);
    document.getElementById("calculation").innerHTML = equal;
    c = equal;
    ans = equal;
}

function numberReset() {
    document.getElementById("calculation").innerHTML = 0;
    c = "";
}

function numberOpen() {
    c += "(";
    document.getElementById("calculation").innerHTML = c;
}

function numberClose() {
    c += ")";
    document.getElementById("calculation").innerHTML = c;
}

function numberDot() {
    c += ".";
    document.getElementById("calculation").innerHTML = c;
}

function numberAnswer() {
    document.getElementById("calculation").innerHTML = ans;
}


function moveSelection(evt) {
    switch (evt.keyCode) {
        case 97:
        case 49:
            numberOne();
            break;
        case 98:
        case 50:
            numberTwo();
            break;
        case 99:
        case 51:
            numberThree();
            break;
        case 100:
        case 52:
            numberFour();
            break;
        case 101:
        case 53:
            numberFive();
            break;
        case 102:
        case 54:
            numberSix();
            break;
        case 103:
        case 55:
            numberSeven();
            break;
        case 104:
        case 56:
            numberEight();
            break;
        case 105:
        case 57:
            numberNine();
            break;
        case 96:
        case 48:
            numberZero();
            break;
        case 106:
        case 88:
        case 56:
            numberMultiplication();
            break;
        case 107:
        case 187:
            numberAddition();
            break;
        case 109:
        case 189:
            numberSubtraction();
            break;
        case 111:
        case 191:
            numberDivision();
            break;
        case 110:
        case 190:
            numberDot();
            break;
        case 13:
        case 187:
            numberEqual();
            break;
        case 57:
            numberOpen();
            break;
        case 48:
            numberClose();
            break;
        case 8:
            numberReset();
            break;

    }
}

function docReady() {
    window.addEventListener('keydown', moveSelection);
}

function removeNumber() {
    d = d - c;
    document.getElementById("calculation").innerHTML = d;
}
