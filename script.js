// Select the target element
const targetElement = document.getElementById("level");

// Initialize level counter
let level = 0;

// Traverse up the DOM tree
let currentElement = targetElement;
while (currentElement) {
    level++; // Increase level count
    currentElement = currentElement.parentElement; // Move to the parent element
}

// Display the result using alert()
alert(`The level of the element is: ${level}`);

