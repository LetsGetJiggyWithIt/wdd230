const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Trier&units=imperial&appid=c8cf3f368ce9864493bb89e2ca0583e5'

async function apiFetch () {
    try {
        let response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            currentTemp.innerHTML += data.main.temp + "&deg;F";
            weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            weatherIcon.setAttribute("alt", `${data.weather[0].description}`);
            console.log(weatherIcon.src);
            captionDesc.innerHTML = data.weather[0].description;
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();