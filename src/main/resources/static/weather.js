function fetchWeather(location) {
    fetch(`http://localhost:8080/api/weather/${location}`)
        .then(response => response.json())
        .then(data => updateWeatherInfo(data))
        .catch(error => console.error('Error fetching weather:', error));
}


function updateWeatherInfo(jsonResponse) {
    const weatherInfoDiv = document.getElementById('weather-info');
    weatherInfoDiv.innerHTML = `
        <p>Location: ${jsonResponse.location.name}, ${jsonResponse.location.region}, ${jsonResponse.location.country}</p>
        <p>Local Time: ${jsonResponse.location.localtime}</p>
        <p>Current Temperature: ${jsonResponse.current.temp_c}°C (${jsonResponse.current.temp_f}°F)</p>
        <p>Weather Condition: ${jsonResponse.current.condition.text}</p>
        <p>Wind: ${jsonResponse.current.wind_dir} at ${jsonResponse.current.wind_kph} km/h</p>
        <p>Pressure: ${jsonResponse.current.pressure_mb} mb</p>
        <p>Humidity: ${jsonResponse.current.humidity}%</p>
        <p>Visibility: ${jsonResponse.current.vis_km} km (${jsonResponse.current.vis_miles} miles)</p>
    `;
}

// Function to handle form submission
document.getElementById('city-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city.');
    }
});
