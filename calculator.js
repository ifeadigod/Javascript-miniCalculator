document.getElementById('firstInput').value;
document.querySelector('#secondInput').value;



function sum() {
    var Fnumber = document.getElementById('firstInput').value;
    var Snumber = document.querySelector('#secondInput').value;

    var sum = +Fnumber + +Snumber;
    document.getElementById("result").innerHTML = "The result is "+ sum;
    
}

function product() {
    var Fnumber = document.getElementById('firstInput').value;
    var Snumber = document.querySelector('#secondInput').value;

    var product = +Fnumber * +Snumber;
    document.getElementById("result").innerHTML = "The result is "+ product;
}

function division() {
    var Fnumber = document.getElementById('firstInput').value;
    var Snumber = document.querySelector('#secondInput').value;

    var division = +Fnumber / +Snumber;
    document.getElementById("result").innerHTML = "The result is "+ division;
}

function subtract() {
    var Fnumber = document.getElementById('firstInput').value;
    var Snumber = document.querySelector('#secondInput').value;

    var subtract = +Fnumber - +Snumber;
    document.getElementById("result").innerHTML = "The result is "+ subtract;
}