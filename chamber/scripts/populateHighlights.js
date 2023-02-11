let highlightMembers = [];
const highlightsCard = document.querySelector("#highlights");

async function getHighlights () {
    const response = await fetch("/wdd230/chamber/data/members.json");
    const data = await response.json();
    data.members.forEach(member => {
        if (member.memberLevel == "Silver" || member.memberLevel == "Gold") {
            highlightMembers.push(member);
        }
    });
    populateHighlightCards();
}

getHighlights();


function populateHighlightCards () {
    let usedNumbers = [];
    let randomNumber = Math.floor(Math.random() * highlightMembers.length);
    for (i = 0; i < 2; i++) {
        while (usedNumbers.includes(randomNumber) == true) {
            randomNumber = Math.floor(Math.random() * highlightMembers.length);
        }
        usedNumbers.push(randomNumber);

        let currentMember = highlightMembers[randomNumber];
        currentHighlight = document.createElement("section");
        currentHighlight.classList.add("card");

        //Populate Name
        let highlightName = document.createElement("h3");
        highlightName.innerHTML = currentMember.name;
        currentHighlight.appendChild(highlightName);

        //Populate Address
        let highlightAddress = document.createElement("p");
        highlightAddress.innerHTML = currentMember.address;
        currentHighlight.appendChild(highlightAddress);

        //Populate Phone Number
        let highlightNumberText = document.createElement("p");
        let highlightNumberAnchor = document.createElement("a");
        highlightNumberAnchor.innerHTML = ToNumber(currentMember.number);
        highlightNumberAnchor.setAttribute("href", `tel:${currentMember.number}`);
        highlightNumberText.appendChild(highlightNumberAnchor);
        currentHighlight.appendChild(highlightNumberText);

        //Populate Website URL
        let highlightWebsiteAnchor = document.createElement("a");
        let highlightWebsiteParagraph = document.createElement("p");
        highlightWebsiteAnchor.setAttribute("href", currentMember.url);
        highlightWebsiteAnchor.innerHTML = currentMember.url.slice(12);
        highlightWebsiteParagraph.appendChild(highlightWebsiteAnchor);
        currentHighlight.appendChild(highlightWebsiteParagraph);

        //Populate Image
        let highlightImage = document.createElement("img");
        highlightImage.setAttribute("src", currentMember.img);
        highlightImage.setAttribute("alt", `${currentMember.name} Logo`);
        highlightImage.setAttribute("class", "directory-logo");
        currentHighlight.appendChild(highlightImage);
        
        //Populate Member Level
        let highlightMemberLevel = document.createElement("p");
        highlightMemberLevel.innerHTML = `${currentMember.memberLevel} Member`;
        currentHighlight.appendChild(highlightMemberLevel);

        highlightsCard.appendChild(currentHighlight);
    }
    let lightCards = document.querySelectorAll("#highlights .card");
    lightCards.forEach(card => {
        if (card.classList.contains("dark") == false && darkModeOn == "true") {
            card.classList.toggle("dark");
        }
    });
}

function ToNumber(number) {
    splitNumber = number.split("");
    splitNumber.splice(0, 0, "(");
    splitNumber.splice(4, 0, ")");
    splitNumber.splice(5, 0, "-");
    splitNumber.splice(9, 0, "-");
    return splitNumber.join("");
}