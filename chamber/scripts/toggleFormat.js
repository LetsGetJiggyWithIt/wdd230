mainElement = document.querySelector("main");
currentView = "grid";

function toggleView(view) {
    if (view != currentView) {
        currentView = view;
        toggleActive();
        toggleImages();
        toggleCards();
    }
}

function toggleActive () {
    gridViewButton.classList.toggle("active");
    listViewButton.classList.toggle("active");
}

function toggleImages () {
    directoryImages.forEach(image => {
        image.classList.toggle("hidden");
    });
}

function toggleCards() {
    directoryDiv.classList.toggle("list-view");
    mainElement.classList.toggle("list-view");

    directoryCards.forEach(card => {
        card.classList.toggle("card");
        card.classList.toggle("list");
        if (card.className == "list") {
            div = document.createElement("div");
            div.appendChild(card);
            directoryDiv.appendChild(div);
            div.setAttribute("class", "list-view");
        }
        else {
            directoryDiv.appendChild(card);
            allDivs = document.querySelectorAll("#directory-container div");
            allDivs.forEach(div => {
                directoryDiv.removeChild(div);
            })
        }
    });
}