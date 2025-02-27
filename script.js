// Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
const apiKey = '47781dfdbb6c478e1c8e378b903ac905';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data
async function getWeather(city) {
    try {
        const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;
        console.log('Fetching from URL:', url);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            console.error('Response:', await response.json());
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Unable to fetch weather data:', error.message);
    }
}

// Function to display weather data
function displayWeather(data) {
    const { name, main, weather } = data;
    const weatherInfo = `
        City: ${name}
        Temperature: ${main.temp}°C
        Weather: ${weather[0].description}
    `;
    console.log(weatherInfo);
}

// Example usage:
getWeather('London');
