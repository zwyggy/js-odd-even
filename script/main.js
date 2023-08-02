let inputNumber = document.querySelector("#inputNumber");
let OddorEven = document.querySelector("#OddorEven");


function numCheck() {
    if (inputNumber.value % 2 == 0) {
        OddorEven.innerHTML = inputNumber.value + " is an EVEN number";
    } 
    else if (inputNumber.value % 2 == 1) {
        OddorEven.innerHTML = inputNumber.value + " is an ODD number";
    } 
    else if (inputNumber.value == "") {
        OddorEven.innerHTML = "Number cannot be blank";
    } 
    else {
        OddorEven.innerHTML = "Please enter a valid non-decimal integer";
    }
}

function clearFields() {
    OddorEven.innerHTML = "";
}