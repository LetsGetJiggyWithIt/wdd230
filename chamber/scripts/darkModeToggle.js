const modeButton = document.querySelector("#dark-mode");
const main = document.querySelector("main");
const nav = document.querySelector("nav");
let cards = document.querySelectorAll(".card");
const images = document.querySelectorAll(".image-div");
let darkModeOn = window.localStorage.getItem("darkMode-ls");
const discoverImagesSection = document.querySelector(".discover-images");
const menuItemContainers = document.querySelectorAll(".menu li");
const sidebar = document.querySelector(".sidebar");
const form = document.querySelector("form");
const directory = document.querySelector(".directory");

modeButton.addEventListener("click", toggleMode);


function toggleMode (firstTime) {
	let listViewItems = document.querySelectorAll(".list-view");
	cards = document.querySelectorAll(".card");
	if (modeButton.textContent.includes("Dark Mode☑️")) {
		main.style.background = "#196726";
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
		nav.classList.toggle("dark");
		menuItemContainers.forEach(item => {
			item.classList.toggle("dark");
		});
		menuButton.classList.toggle("dark");
		if (typeof sidebar !== undefined && sidebar !== null) {
			sidebar.classList.toggle("dark");
		}
		if (typeof banner !== "undefined") {
			banner.classList.toggle("dark");
		}
		if (typeof form !== "undefined" && form !== null) {
			form.classList.toggle("dark");
		}
		if (typeof directory !== "undefined" && directory !== null) {
			directory.classList.toggle("dark");
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
		main.style.color = "#134E1D";
		cards.forEach(item => {
			item.classList.toggle("dark");
		});
		images.forEach(item => {
			item.classList.toggle("dark");
		});
		listViewItems.forEach(item => {
			item.classList.remove("dark");
		});
		if (typeof banner !== "undefined") {
			banner.classList.toggle("dark");
		}
		if (typeof discoverImagesSection !== "undefined" && discoverImagesSection !== null) {
			discoverImagesSection.classList.toggle("dark");
		}
		if (typeof form !== "undefined" && form !== null) {
			form.classList.toggle("dark");
		}
		if (typeof directory !== "undefined" && directory !== null) {
			directory.classList.toggle("dark");
		}
		nav.classList.toggle("dark");
		menuItemContainers.forEach(item => {
			item.classList.toggle("dark");
		});
		menuButton.classList.toggle("dark");
		if (typeof sidebar !== undefined && sidebar !== null) {
			sidebar.classList.toggle("dark");
		}
		modeButton.textContent = "Dark Mode☑️";
		if (firstTime != true) {
			window.localStorage.setItem("darkMode-ls", "false");
			darkModeOn = window.localStorage.getItem("darkMode-ls");
		}
	}
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