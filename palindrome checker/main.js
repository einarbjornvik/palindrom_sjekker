var input = document.getElementById('inputBox');
var button = document.getElementById('submitButton');

function handleClick() {
    var userInput = input.value;
    var result = isPalindrome(userInput);
    alert(result ? "dette er et palindrom" : "dette er ikke et palindrom");
}

function isPalindrome(str) {
    var cleanedStr = str.toLowerCase();  // Fjerner spesialtegn og gjør små bokstaver
    var reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

button.onclick = handleClick;