var arr1 = [];
var lastPress;
var string1;
var currentDisplay = parseFloat(document.querySelector('#display').innerText);
var currentValue;
function press(dig) {
    if (lastPress == "digit") {
        if (document.querySelector('#display').innerText == 0) {
            document.querySelector('#display').innerText = dig;
            lastPress = "digit";
        }
        else {
            document.querySelector('#display').innerText = document.querySelector('#display').innerText + dig;
            lastPress = "digit";
        }
    }
    else {
        document.querySelector('#display').innerText = dig;
        lastPress = "digit";
    }
}
function setOP(string) {
    if(lastPress == "Operation") {
        string1 = string;
        lastPress = "Operation";
    }
    else {
        currentValue = parseFloat(document.querySelector('#display').innerText);
        arr1.push(currentValue)
        string1 = string;
        lastPress = "Operation";
    }
}
function clr() {
    lastPress = "clear";
    arr1 = [];
    string1 = "";
    currentDisplay = 0;
    document.querySelector('#display').innerText = 0;
    currentValue = 0;
}
function calculate() {
    if(lastPress != "equals"){
        arr1.push(parseFloat(document.querySelector('#display').innerText));
        console.log(arr1);
        currentDisplay = parseFloat(document.querySelector('#display').innerText);
        if (string1 == "*") {
            currentValue = parseFloat(currentDisplay) * parseFloat(currentValue);
        }
        else if (string1 == "/") {
            currentValue = parseFloat(currentValue) / parseFloat(currentDisplay);
        }
        else if (string1 == "-") {
            currentValue = parseFloat(currentValue) - parseFloat(currentDisplay);
        }
        else if (string1 == "+") {
            currentValue = parseFloat(currentDisplay) + parseFloat(currentValue);
        }
        document.querySelector('#display').innerText = currentValue;
        lastPress = "equals";
    }
    else {
        lastPress = "equals";
    }
}