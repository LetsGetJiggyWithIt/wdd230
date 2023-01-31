const weatherElement = document.querySelector('#weather');
const weatherIcon = document.createElement("img");
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=West+Valley+City&units=imperial&appid=c8cf3f368ce9864493bb89e2ca0583e5'

async function apiFetch () {
    try {
        let response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            let weatherDescArray = data.weather[0].description.split(" ");
            let weatherDescString = "";
            weatherDescArray.forEach(item => {
                firstLetter = item.charAt(0);
                firstLetter = firstLetter.toUpperCase();
                remainingLetters = item.slice(1);
                word = firstLetter + remainingLetters;
                weatherDescString += `${word} `;
            });
            weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            weatherIcon.setAttribute("alt", `${data.weather[0].description}`);
            weatherElement.innerHTML += `${data.main.temp} &deg;F, ${weatherDescString}`;
            weatherElement.appendChild(weatherIcon);
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();