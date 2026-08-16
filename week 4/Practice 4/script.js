const numbers = [10, 25, 45, 55, 60, 75, 90, 30, 50, 85];

document.getElementById("originalArray").textContent = numbers.join(", ");

function filterNumbers() {

    const filteredNumbers = numbers.filter(number => number > 50);

    document.getElementById("filteredArray").textContent =
        filteredNumbers.join(", ");
}