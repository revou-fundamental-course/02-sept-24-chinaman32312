// Function to calculate area of triangle
function calculateArea() {
    const base = document.getElementById("base").value;
    const height = document.getElementById("height").value;

    // Validate input
    if (base <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for base and height.");
        return;
    }

    // Formula: Area = 1/2 * base * height
    const area = 0.5 * base * height;

    // Display result
    document.getElementById("areaResult").innerText = `Luas Segitiga: ${area}`;
}

// Function to calculate perimeter of triangle
function calculatePerimeter() {
    const sideA = document.getElementById("sideA").value;
    const sideB = document.getElementById("sideB").value;
    const sideC = document.getElementById("sideC").value;

    // Validate input
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
        alert("Please enter valid positive numbers for all sides.");
        return;
    }

    // Formula: Perimeter = a + b + c
    const perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);

    // Display result
    document.getElementById("perimeterResult").innerText = `Keliling Segitiga: ${perimeter}`;
}

// Attach event listeners to buttons
document.getElementById("calculateArea").addEventListener("click", calculateArea);
document.getElementById("calculatePerimeter").addEventListener("click", calculatePerimeter);
