const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData (url) {
    let response;
    response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        //console.table(data.prophets);
        displayProphets(data.prophets);
    }
};

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const dateOfBirth = document.createElement("p");
        const placeOfBirth = document.createElement("p");
        const portrait = document.createElement("img");
        fullName.innerHTML = prophet.name + " " + prophet.lastname;
        dateOfBirth.innerHTML = "Date of Birth: " + prophet.birthdate;
        placeOfBirth.innerHTML = "Place of Birth: " + prophet.birthplace;
        portrait.src = prophet.imageurl;
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("alt", fullName.innerHTML + " - #" + prophet.order + " Latter-Day President");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");
        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
};

getProphetData(url);