function checkEvenOdd() {

    const number = Number(document.getElementById("numberInput").value);

    const result = document.getElementById("result");

    if (number % 2 === 0) {
        result.textContent = number + " is Even";
    } else {
        result.textContent = number + " is Odd";
    }
}