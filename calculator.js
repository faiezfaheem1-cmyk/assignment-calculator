let historyData = [];

function calculate(type) {

    let num1 = parseFloat(document.getElementById("firstNumber").value);
    let num2 = parseFloat(document.getElementById("secondNumber").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Please enter valid numbers";
        return;
    }

    if (type === "add") {
        result = num1 + num2;
    } 
    else if (type === "sub") {
        result = num1 - num2;
    } 
    else if (type === "mul") {
        result = num1 * num2;
    } 
    else if (type === "div") {
        if (num2 === 0) {
            document.getElementById("result").innerText = "Cannot divide by zero";
            return;
        }
        result = num1 / num2;
    }

    document.getElementById("result").innerText = result;

    addToHistory(num1, num2, type, result);
}

function addToHistory(a, b, operation, answer) {

    let symbol;

    if (operation === "add") symbol = "+";
    if (operation === "sub") symbol = "-";
    if (operation === "mul") symbol = "*";
    if (operation === "div") symbol = "/";

    let record = a + " " + symbol + " " + b + " = " + answer;

    historyData.push(record);
    updateHistory();
}

function updateHistory() {

    let list = document.getElementById("historyList");
    list.innerHTML = "";

    if (historyData.length === 0) {
        list.innerHTML = '<li class="list-group-item text-muted">No calculations yet</li>';
        return;
    }

    for (let i = historyData.length - 1; i >= 0; i--) {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = historyData[i];
        list.appendChild(li);
    }
}

function clearHistory() {
    historyData = [];
    updateHistory();
}