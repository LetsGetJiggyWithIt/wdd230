const modeButton = document.querySelector("#dark-mode");
const main = document.querySelector("main");
let cards = document.querySelectorAll(".card");
const images = document.querySelectorAll(".image-div");
let darkModeOn = window.localStorage.getItem("darkMode-ls");
const discoverImagesSection = document.querySelector(".discover-images");

modeButton.addEventListener("click", toggleMode);


function toggleMode (firstTime) {
	let listViewItems = document.querySelectorAll(".list-view");
	let cards = document.querySelectorAll(".card");
	if (modeButton.textContent.includes("Dark Mode☑️")) {
        modeButton.classList.toggle("active");
		main.style.background = "#1b712a";
		main.style.color = "var(--tea-green)";
        cards.forEach(item => {
			item.classList.toggle("dark");
		});
		images.forEach(item => {
			item.classList.toggle("dark");
		});
		listViewItems.forEach(item => {
			item.classList.add("dark");
		});
		if (typeof banner !== "undefined") {
			banner.classList.toggle("dark");
		}
		if (typeof discoverImagesSection !== "undefined" && discoverImagesSection !== null) {
			discoverImagesSection.classList.toggle("dark");
		}
		modeButton.textContent = "Dark Mode❎";
		if (firstTime != true) {
			window.localStorage.setItem("darkMode-ls", "true");
			darkModeOn = window.localStorage.getItem("darkMode-ls");
		}
	} else {
		main.style.background = "var(--dark-sea-green)";
		main.style.color = "#1b712a";
		cards.forEach(item => {
			item.classList.toggle("dark");
		});
		images.forEach(item => {
			item.classList.toggle("dark");
		});
        //cards.forEach(lightCard);
		//images.forEach(lightCard);
        modeButton.classList.toggle("active");
		listViewItems.forEach(item => {
			item.classList.remove("dark");
		});
		if (typeof banner !== "undefined") {
			banner.classList.toggle("dark");
		}
		if (typeof discoverImagesSection !== "undefined" && discoverImagesSection !== null) {
			discoverImagesSection.classList.toggle("dark");
		}
		modeButton.textContent = "Dark Mode☑️";
		if (firstTime != true) {
			window.localStorage.setItem("darkMode-ls", "false");
			darkModeOn = window.localStorage.getItem("darkMode-ls");
		}
	}
	console.log(darkModeOn);
}

function lightCard (item) {
	if (item.classList.contains("list-view") != true) {
		item.style.background = "var(--blue-ncs)";
		item.style.color = "#1b712a";
	}
}
function darkCard (item) {
	if (item.classList.contains("list-view") != true) {
		item.style.background = "var(--prussian-blue)";
		item.style.color = "var(--dark-sea-green)";
	}
}

if (darkModeOn == "true" && typeof isDirectoryPage == "undefined") {
	toggleMode(true);
}