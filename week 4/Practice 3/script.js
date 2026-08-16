async function getQuote() {

    const quoteElement = document.getElementById("quote");

    quoteElement.innerHTML = "<p>Loading...</p>";

    try {

        const response = await fetch("https://dummyjson.com/quotes/random");

        const data = await response.json();

        quoteElement.innerHTML = `
            <p>"${data.quote}"</p>
            <p id="author">— ${data.author}</p>
        `;

    } catch (error) {

        quoteElement.innerHTML = `
            <p>Unable to fetch a quote. Please try again.</p>
        `;
    }
}