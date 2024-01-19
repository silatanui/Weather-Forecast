function getWeather() {
    const apiKey = '4684f51f39bbf2a1a1359e314153c892'; // Replace with your OpenWeatherMap API key
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            weatherInfo.innerHTML = `<p>Temperature: ${temperature} &#8451;</p><p>Description: ${description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
        });
}
