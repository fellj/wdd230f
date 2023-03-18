// API key:48c7c7e7511069df1c9898b940b82489

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// create an "url" variable using const that stores the 'https://api.openweathermap.org/...' URL
const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=Imperial&appid=48c7c7e7511069df1c9898b940b82489";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    /* const capDesc = desc.split(" ").map(word => {
        let firstLetter = word.charAt(0).toUpperCase();
        return`${firstLetter}${word.slice(1)}`;
    }).join(" ") */
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }

  