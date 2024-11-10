// script.js

function startFizzBuzz() {
    // Get the input value
    const numberInput = document.getElementById("numberInput").value;
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    const n = parseInt(numberInput);

    // Check if the input is a valid number
    if (isNaN(n) || n <= 0) {
        outputDiv.innerHTML = "<p>Please enter a positive number!</p>";
        return;
    }

    // Loop through numbers from 1 to n and generate FizzBuzz output
    for (let i = 1; i <= n; i++) {
        let outputText = ""; // Variable to store output text for each number

        // Check divisibility
        if (i % 3 === 0 && i % 5 === 0) {
            outputText = "FizzBuzz";
        } else if (i % 3 === 0) {
            outputText = "Fizz";
        } else if (i % 5 === 0) {
            outputText = "Buzz";
        } else {
            outputText = i; // Print the number itself if not divisible by 3 or 5
        }

        // Display the result in the outputDiv
        const resultParagraph = document.createElement("p");
        resultParagraph.textContent = outputText;
        outputDiv.appendChild(resultParagraph);
    }
}
