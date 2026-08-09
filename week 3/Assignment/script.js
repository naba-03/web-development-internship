async function getWeather() {

    const city = document.getElementById("cityInput").value;

    const result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {

        result.innerHTML = "<p>Loading...</p>";

        const response = await fetch(url);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        const data = await response.json();

        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const condition = data.weather[0].description;

        result.innerHTML = `
            <div class="weather-info">

                <h2>${data.name}</h2>

                <p>🌡️ Temperature: ${temperature} °C</p>

                <p>💧 Humidity: ${humidity}%</p>

                <p>☁️ Condition: ${condition}</p>

            </div>
        `;

    } catch (error) {

        result.innerHTML = `
            <p>❌ ${error.message}</p>
        `;

    }
}