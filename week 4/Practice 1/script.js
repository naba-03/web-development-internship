function saveName() {

    const name = document.getElementById("nameInput").value;

    localStorage.setItem("userName", name);

    displayName();
}

function displayName() {

    const savedName = localStorage.getItem("userName");

    if (savedName) {
        document.getElementById("welcomeMessage").textContent =
            "Welcome, " + savedName + "!";
    }
}

displayName();