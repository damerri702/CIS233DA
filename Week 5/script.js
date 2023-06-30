function getCity(cityName) {
  getWeather(cityName);
}

function getWeather(cityName) {
  const apiKey = 'c558bf04cec73b7203c201424b50b63e';

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const sunriseTimestamp = data.sys.sunrise * 1000;
      const sunsetTimestamp = data.sys.sunset * 1000;
      const cloudiness = data.clouds.all;

      const sunriseTime = new Date(sunriseTimestamp).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });
      const sunsetTime = new Date(sunsetTimestamp).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      });

      document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
      document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
      document.getElementById('sunrise').textContent = `Sunrise: ${sunriseTime}`;
      document.getElementById('sunset').textContent = `Sunset: ${sunsetTime}`;
      document.getElementById('cloudiness').textContent = `Cloudiness: ${cloudiness}%`;
    })
    .catch(error => {
      console.log('Error:', error);
    });

  // Update the description section based on the selected city
  const brusselsDescription = `Brussels, the capital city of Belgium, is a captivating blend of historical charm, international significance, and cultural vibrancy. ...`; // Add the description for Brussels
  const budapestDescription = `Budapest description`; // Add the description for Budapest
  const milanDescription = `Milan description`; // Add the description for Milan
  const veniceDescription = `Venice description`; // Add the description for Venice
  const barcelonaDescription = `Barcelona description`; // Add the description for Barcelona

  let description = '';

  if (cityName === 'Brussels') {
    description = brusselsDescription;
  } else if (cityName === 'Budapest') {
    description = budapestDescription;
  } else if (cityName === 'Milan') {
    description = milanDescription;
  } else if (cityName === 'Venice') {
    description = veniceDescription;
  } else if (cityName === 'Barcelona') {
    description = barcelonaDescription;
  }

  document.getElementById('brussels-description').innerHTML = `<h2>About ${cityName}</h2><p>${description}</p>`;
}