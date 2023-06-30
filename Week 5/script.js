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
  const brusselsDescription = `Brussels, the capital city of Belgium, is a captivating blend of
  historical charm, international significance, and cultural vibrancy.
  Known as the "Capital of Europe," it houses key institutions of the
  European Union, making it a hub of political and administrative
  activity. The city's multicultural atmosphere reflects its diverse
  population and creates a lively international ambiance. Brussels
  boasts a rich heritage, with architectural marvels that range from
  medieval landmarks like the Grand Place to modern icons such as the
  Atomium. Its European Quarter is a focal point of political power,
  hosting prominent EU offices. The city nurtures a thriving arts and
  cultural scene, with world-class museums like the Royal Museums of
  Fine Arts and numerous festivals and exhibitions. Belgian gastronomy
  takes center stage, offering delectable treats like chocolates,
  waffles, and a wide selection of beers. Brussels is also known for its
  culinary specialties, including mussels, fries, and traditional dishes
  like stoemp and carbonnade flamande. Architecture enthusiasts will
  delight in the mix of Gothic churches, Art Nouveau buildings, and
  impressive landmarks like the Royal Palace, Manneken Pis, and the
  Cinquantenaire triumphal arch. Brussels proudly embraces its comic
  strip art heritage, evident through comic strip murals and the Belgian
  Comic Strip Center. For those seeking relaxation, the city provides
  ample green spaces and parks, such as the Sonian Forest and Bois de la
  Cambre. Shopping enthusiasts can explore a diverse retail landscape,
  from high-end fashion boutiques on Avenue Louise to vintage markets
  and independent shops in trendy neighborhoods like Saint-Gilles and
  Ixelles. In summary, Brussels is a captivating city that harmonizes
  its historical significance, international prominence, and cultural
  richness. Whether you're fascinated by history, art, cuisine, or the
  workings of the European Union, Brussels offers a multitude of
  experiences to captivate and inspire visitors.`; // Add the description for Brussels
  const budapestDescription = `Budapest, the capital of Hungary, is a captivating city that straddles the Danube River. It is renowned for its stunning architecture, showcasing a blend of Gothic, Renaissance, Baroque, and Art Nouveau styles. The Hungarian Parliament Building stands as a grand symbol of the city, while the majestic Buda Castle and the panoramic views from the Fisherman's Bastion leave visitors in awe. Budapest is also famous for its thermal baths, a tradition that dates back centuries. The Széchenyi Thermal Bath, with its ornate Neo-Baroque architecture, and the Gellért Thermal Bath, housed in an Art Nouveau building, offer relaxation, rejuvenation, and a unique cultural experience. The city's vibrant atmosphere, rich history, and thermal delights make Budapest a captivating destination for travelers.  `; // Add the description for Budapest
  const milanDescription = `Milan, located in northern Italy, is a dynamic city known for its fashion, art, and vibrant atmosphere. The city's architectural marvels make it a captivating destination. The iconic Gothic Duomo di Milano stands as the centerpiece, with its magnificent facade and impressive spires. Nearby, the Galleria Vittorio Emanuele II is an exquisite 19th-century shopping arcade renowned for its stunning glass roof and luxurious stores. Milan is also home to historical landmarks such as the Sforza Castle, a grand fortress housing museums and art collections. The city's vibrant art scene is highlighted by world-class institutions like the Brera Art Gallery, showcasing an impressive collection of Italian masterpieces. Milan's bustling streets are lined with chic boutiques, trendy restaurants, and stylish cafes, reflecting the city's reputation as a global fashion capital. Whether exploring its rich history, indulging in its culinary delights, or immersing oneself in the world of fashion, Milan offers a captivating experience for visitors.`; // Add the description for Milan
  const veniceDescription = `Venice is a captivating city located in northeastern Italy known for its unique and picturesque setting. It is renowned for its intricate network of canals, creating a distinct atmosphere that is best explored by taking a ride on a traditional gondola, gliding along the canals and admiring the beautiful architecture. The city's main waterway is the Grand Canal, lined with stunning palaces and historic buildings. The iconic Rialto Bridge spans the Grand Canal and is a popular spot for visitors to enjoy the views. At the heart of Venice lies St. Mark's Square, or Piazza San Marco, featuring the magnificent St. Mark's Basilica with its distinctive Byzantine architecture. Adjacent to the basilica is the Campanile, a bell tower offering panoramic views of the city. Venice's charm and enchanting atmosphere make it a beloved destination for travelers from around the world.`; // Add the description for Venice
  const barcelonaDescription = `Barcelona is a vibrant city on Spain's northeastern coast known for its rich architecture, including the iconic works of Antoni Gaudí such as the Sagrada Família and Park Güell. It offers beautiful beaches along its coastline, with Barceloneta Beach being the most popular. The city boasts a diverse cultural scene, with notable museums like the Picasso Museum and MACBA, as well as a thriving culinary culture featuring traditional Catalan dishes and renowned restaurants. La Rambla is a bustling pedestrian street famous for its lively atmosphere, street performers, and shops. Lastly, Barcelona is home to FC Barcelona and Camp Nou stadium, making it a destination for football enthusiasts.`; // Add the description for Barcelona

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

const brusselsContent = document.querySelector('.brussels-content');
const youtubeVideo = document.querySelector('.youtube-video');

if (cityName === 'Brussels') {
  brusselsContent.style.display = 'block';
  youtubeVideo.style.display = 'block';
} else {
  brusselsContent.style.display = 'none';
  youtubeVideo.style.display = 'none';
}