function addNumber(number) {

    var display = document.getElementById("display");

    if (display.value == "0") {
        display.value = number;
    }
    else {
        display.value = display.value + number;
    }
}


function clearDisplay() {

    document.getElementById("display").value = "0";

}


function deleteNumber() {

    var display = document.getElementById("display");

    display.value = display.value.slice(0, -1);

    if (display.value == "") {
        display.value = "0";
    }
}


function calculate() {

    var display = document.getElementById("display");

    try {
        display.value = eval(display.value);
    }

    catch {
        display.value = "Error";
    }
}