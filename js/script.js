function calculateArea() {
    const base = document.getElementById("base").value;
    const height = document.getElementById("height").value;
    if (base <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for base and height.");
        return;
    }
    const area = 0.5 * base * height;
    document.getElementById("areaResult").innerText = `Luas Segitiga: ${area}`;
}
function calculatePerimeter() {
    const sideA = document.getElementById("sideA").value;
    const sideB = document.getElementById("sideB").value;
    const sideC = document.getElementById("sideC").value;
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
        alert("Please enter valid positive numbers for all sides.");
        return;
    }
    const perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
    document.getElementById("perimeterResult").innerText = `Keliling Segitiga: ${perimeter}`;
}
document.getElementById("calculateArea").addEventListener("click", calculateArea);
document.getElementById("calculatePerimeter").addEventListener("click", calculatePerimeter);
function calculateParallelogramArea() {
    const base = parseFloat(document.getElementById('parallelogramBase').value);
    const height = parseFloat(document.getElementById('parallelogramHeight').value);
    const area = base * height;
    document.getElementById('parallelogramArea').textContent = area.toFixed(2);
}

function calculateParallelogramPerimeter() {
    const base = parseFloat(document.getElementById('parallelogramBase').value);
    const side = parseFloat(document.getElementById('parallelogramSide').value);
    const perimeter = 2 * (base + side);
    document.getElementById('parallelogramPerimeter').textContent = perimeter.toFixed(2);
}
