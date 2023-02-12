mainElement = document.querySelector("main");
currentView = "grid";
const directoryViewDiv = document.querySelector("#format-button-div");

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
    directoryViewDiv.classList.toggle("list-view");
    gridViewButton.classList.toggle("list-view");
    listViewButton.classList.toggle("list-view");

    directoryCards.forEach(card => {
        card.classList.toggle("card");
        card.classList.toggle("list");
        if (card.classList.contains("list") == true) {
            div = document.createElement("div");
            div.appendChild(card);
            div.classList.add("list-view");
            directoryDiv.appendChild(div);
        }
        else {
            directoryDiv.appendChild(card);
            allDivs = document.querySelectorAll("#directory-container div");
            allDivs.forEach(div => {
                directoryDiv.removeChild(div);
            });
        }
    });
    checkForDarkMode();
}

modeButton.addEventListener("click", checkForDarkMode);

function checkForDarkMode () {
    if (darkModeOn == "true") {
	    let listViewItems = document.querySelectorAll("div.list-view");
		listViewItems.forEach(item => {
			item.classList.add("dark");
		});
        let gridViewItems = document.querySelectorAll("section.card");
        gridViewItems.forEach(item => {
			item.classList.add("dark");
		});
    }
    else {
        let gridViewItems = document.querySelectorAll("section.card");
        gridViewItems.forEach(item => {
			item.classList.remove("dark");
		});
        let listViewItems = document.querySelectorAll("section.dark.list");
        listViewItems.forEach(item => {
            item.classList.remove("dark");
        });
        let directoryContainer = document.querySelector("#directory-container");
        directoryContainer.classList.remove("dark");
    }
}