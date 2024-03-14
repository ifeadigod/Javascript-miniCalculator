document.getElementById('output').innerHTML = 'Welcome to Dom';
document.querySelector('.output2').innerHTML = 'query selector';
document.querySelector('p').innerHTML = 'text';
document.querySelectorAll('p').innerHTML = 'finish';

var input = document.getElementById('textInput').value;

function Submit(){
    var inputText = document.getElementById('tetxInput').value;
    window.alert('button clicked');
}