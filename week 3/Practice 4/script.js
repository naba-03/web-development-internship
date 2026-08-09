const today = new Date();

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

const formattedDate = today.toLocaleDateString("en-US", options);

document.getElementById("date").textContent = formattedDate;