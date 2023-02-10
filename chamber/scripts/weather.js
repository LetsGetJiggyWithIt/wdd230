const currentWeatherElement = document.querySelector('#current-weather');
const forecastElement = document.querySelector("#forecast");
const weatherCard = document.querySelector("#weather");
const weatherIcon = document.createElement("img");
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=West+Valley+City&units=imperial&appid=c8cf3f368ce9864493bb89e2ca0583e5'
const testUrl = "https://api.openweathermap.org/data/2.5/forecast?q=West+Valley+City&appid=c8cf3f368ce9864493bb89e2ca0583e5&units=imperial";
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
let currentDay = currentDate.getDay();

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

            //Get Temperature
            currentTemp = `${data.main.temp} &deg;F`;

            //Get Description
            currentDesc = `${weatherDescString}`;

            //Populates Current Weater Paragraph
            currentWeatherParagraph = document.createElement("p");
            currentWeatherParagraph.innerHTML += `Temperature: ${currentTemp}`;
            currentWeatherParagraph.innerHTML += `<br>${currentDesc}`;

            //Get Weather Icon
            weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            weatherIcon.setAttribute("alt", `${data.weather[0].description}`);
            currentWeatherParagraph.appendChild(weatherIcon);
            
            currentWeatherElement.appendChild(currentWeatherParagraph);
        }
    } catch (error) {
        console.log(error);
    }
    try {
        let response = await fetch(testUrl);
        if (response.ok) {
            const data = await response.json();
            let tempList = [];
            let i = 0;
            data.list.forEach(index => {
                if (index.dt_txt.includes("12:00:00") == true && i < 3) {
                    tempList.push(index);
                    i++;
                }
            });
            i = 1;
            tempList.forEach(day => {

                //Gets Temperature
                currentTemp = `${day.main.temp} &deg;F`;

                //Gets Description
                let weatherDescArray = day.weather[0].description.split(" ");
                let weatherDescString = "";
                weatherDescArray.forEach(item => {
                    firstLetter = item.charAt(0);
                    firstLetter = firstLetter.toUpperCase();
                    remainingLetters = item.slice(1);
                    word = firstLetter + remainingLetters;
                    weatherDescString += `${word} `;
                });
                currentDesc = `${weatherDescString}`;
                
                //Gets Weather Icon
                currentWeatherIcon = document.createElement("img");
                currentWeatherIcon.src = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
                currentWeatherIcon.setAttribute("alt", `${day.weather[0].description}`);
                
                //Populates Weather Card
                let forecastCard = document.createElement("section");
                forecastCard.classList.add("card", "forecast");
                let forecastParagraph = document.createElement("p");
                forecastParagraph.innerHTML += `${currentTemp}\n${currentDesc}`;
                let cardHeader = document.createElement("h4");
                if (currentDay + i > 6) {
                    currentDay = 0;
                    i = 0;
                }
                cardHeader.innerHTML = daysOfTheWeek[currentDay + i];
                i++;
                forecastCard.appendChild(cardHeader);
                forecastCard.appendChild(forecastParagraph);
                forecastCard.appendChild(currentWeatherIcon);

                //Populates Homepage with Card
                forecastElement.appendChild(forecastCard);
            });
        }
    } catch (error) {
        console.log(error);
    }

    let forecastCards = document.querySelectorAll(".forecast");
    forecastCards.forEach(card => {
        if (darkModeOn == "true") {
            card.classList.toggle("dark");
        }
    });
}

apiFetch();