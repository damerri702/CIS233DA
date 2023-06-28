document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'c558bf04cec73b7203c201424b50b63e';
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Brussels,BE&units=imperial&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const description = data.weather[0].description;
        const sunriseTimestamp = data.sys.sunrise * 1000; // Convert UTC timestamp to milliseconds
        const sunsetTimestamp = data.sys.sunset * 1000; // Convert UTC timestamp to milliseconds
        const cloudiness = data.clouds.all;
  
        // Format sunrise and sunset times using JavaScript's Date object
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
  
        document.getElementById('temperature').textContent = `Temperature: ${temperature}°F`;
        document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
        document.getElementById('description').textContent = `Description: ${description}`;
        document.getElementById('sunrise').textContent = `Sunrise: ${sunriseTime}`;
        document.getElementById('sunset').textContent = `Sunset: ${sunsetTime}`;
        document.getElementById('cloudiness').textContent = `Cloudiness: ${cloudiness}%`;
      })
      .catch(error => {
        console.log('Error:', error);
      });
  });
  