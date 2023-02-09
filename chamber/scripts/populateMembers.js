const directoryDiv = document.querySelector("#directory-container");
const memberUrl = "/chamber/data/members.json";
let isDirectoryPage = true;
//ADD THIS TO THE LINE BEFORE COMMITING ABOVE OR YOUR .JSON FILE CAN'T BE READ ON GITHUB
/* ---------------------> /wdd230  <-----------------------*/

var gridViewButton;
var listViewButton;
var directoryCards;
var directoryImages;

getMembers(memberUrl);

async function getMembers (url) {
    const response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        data.members.forEach(member => {
            //Create Card
            const card = document.createElement("section");
            card.setAttribute("class", "card");

            //Populate Name
            const name = document.createElement("h3");
            name.innerHTML = member.name;
            card.appendChild(name);

            //Populate Address
            const address = document.createElement("p");
            address.innerHTML = member.address;
            card.appendChild(address);

            //Populate Phone Number
            const numberText = document.createElement("p");
            const numberAnchor = document.createElement("a");
            numberAnchor.innerHTML = ToNumber(member.number);
            numberAnchor.setAttribute("href", `tel:${member.number}`);
            numberText.appendChild(numberAnchor);
            card.appendChild(numberText);

            //Populate Website URL
            const websiteAnchor = document.createElement("a");
            const websiteParagraph = document.createElement("p");
            websiteAnchor.setAttribute("href", member.url);
            websiteAnchor.innerHTML = member.url.slice(12);
            websiteParagraph.appendChild(websiteAnchor);
            card.appendChild(websiteParagraph);

            //Populate Image
            const image = document.createElement("img");
            image.setAttribute("src", member.img);
            image.setAttribute("alt", `${member.name} Logo`);
            image.setAttribute("class", "directory-logo");
            card.appendChild(image);
            
            //Populate Member Level
            const memberLevel = document.createElement("p");
            memberLevel.innerHTML = `${member.memberLevel} Member`;
            card.appendChild(memberLevel);

            //Populate Directory
            directoryDiv.appendChild(card);
        });
        gridViewButton = document.querySelector("#grid-view");
        listViewButton = document.querySelector("#list-view");
        directoryCards = document.querySelectorAll("main div section");
        directoryImages = document.querySelectorAll(".card img");
        gridViewButton.addEventListener("click", function(){toggleView("grid");});
        listViewButton.addEventListener("click", function(){toggleView("list");});
        gridViewButton.addEventListener("click", checkForDarkMode);
        listViewButton.addEventListener("click", checkForDarkMode);
        if (darkModeOn == "true") {
            toggleMode();
        }
    }
}

function ToNumber(number) {
    splitNumber = number.split("");
    splitNumber.splice(0, 0, "(");
    splitNumber.splice(4, 0, ")");
    splitNumber.splice(5, 0, "-");
    splitNumber.splice(9, 0, "-");
    return splitNumber.join("");
}
