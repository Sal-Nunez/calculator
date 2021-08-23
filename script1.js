var currentDisplay = parseInt(document.querySelector('#display').innerText);
var memory = parseInt(0);
var string1 = 0;
var memory2 = 0;
function press(dig) {
    if(memory2 == 0){
        if (currentDisplay == 0) {
            (document.querySelector('#display').innerText == 0);
            document.querySelector('#display').innerText = dig;
        }
        else {
            document.querySelector('#display').innerText = document.querySelector('#display').innerText + dig;
        }
        currentDisplay = document.querySelector('#display').innerText;
    }
    else {
        if (currentDisplay == 0) {
            (document.querySelector('#display').innerText == 0);
            document.querySelector('#display').innerText = dig;
            // memory2 = 0;
        }
        else if(string1 == 0) {
            document.querySelector('#display').innerText = dig;
            currentDisplay = 0;
            memory = 0;
            string1 = 0;
        }
        else {
            document.querySelector('#display').innerText = document.querySelector('#display').innerText + dig;
            currentDisplay = 0;
            // memory2 = 0;
        }
        currentDisplay = document.querySelector('#display').innerText;
    }
}
function setOP(string) {
    if (string1 == 0) {
        var temp = string;
        string1 = temp;
        memory = parseInt(currentDisplay);
        currentDisplay = 0;
    }
    else {
        var temp = string;
        string1 = temp;
    }
}
function clr() {
    currentDisplay = 0;
    memory = 0;
    string1 = 0;
    document.querySelector('#display').innerText = 0;
    memory2 = 0;
}
function calculate() {
    if (memory2 == 0) {
        if (string1 == "*") {
            memory = parseInt(currentDisplay) * parseInt(memory);
        }
        else if (string1 == "/") {
            memory = parseInt(memory) / parseInt(currentDisplay);
        }
        else if (string1 == "-") {
            memory = parseInt(memory) - parseInt(currentDisplay);
        }
        else if (string1 == "+") {
            memory = parseInt(currentDisplay) + parseInt(memory);
        }
        document.querySelector('#display').innerText = memory;
        string1 = 0;
        var temp = memory;
        memory2 = temp
    }
    else {
        if (string1 == "*") {
            memory = parseInt(currentDisplay) * parseInt(memory2);
        }
        else if (string1 == "/") {
            memory = parseInt(memory2) / parseInt(currentDisplay);
        }
        else if (string1 == "-") {
            memory = parseInt(memory2) - parseInt(currentDisplay);
        }
        else if (string1 == "+") {
            memory = parseInt(currentDisplay) + parseInt(memory2);
        }
        document.querySelector('#display').innerText = memory;
        string1 = 0;
        var temp = memory;
        memory2 = temp
    }
}