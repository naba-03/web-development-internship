function changeColor() {

    const button = document.getElementById("colorButton");

    const colors = ["red", "green", "blue", "purple", "orange"];

    const randomIndex = Math.floor(Math.random() * colors.length);

    button.style.backgroundColor = colors[randomIndex];
}