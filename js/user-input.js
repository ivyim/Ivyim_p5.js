// Get the elements from the HTML
const cityInput = document.getElementById('city');
const submitButton = document.getElementById('submit');
const weatherInfoParagraph = document.getElementById('weather-info');

// Add an event listener to the submit button
submitButton.addEventListener('click', () => {
  // Get the user's city input
  const city = cityInput.value.trim();

  // Define weather data (this can be replaced with API calls)
  const weatherData = {
    'New York': 'Sunny, 75°F',
    'Los Angeles': 'Partly Cloudy, 85°F',
    'Chicago': 'Rainy, 60°F',
    'Boston': 'Sunny, 80F',
    // Add more cities as needed
  };

  // Check if the city exists in the weather data
  if (city in weatherData) {
    // Display the weather information
    weatherInfoParagraph.textContent = `The weather in ${city} is: ${weatherData[city]}`;
  } else {
    // Display an error message
    weatherInfoParagraph.textContent = `Sorry, we don't have weather information for ${city}.`;
  }
});