//your JS code here. If required.
const inputField = document.getElementById('fname');

function convertToUpperCase() {
  inputField.value = inputField.value.toUpperCase();
}

// Triggers when the input field loses focus (leaves the field)
inputField.addEventListener('blur', convertToUpperCase);