const modeButton = document.querySelector("#dark-mode");
const main = document.querySelector("main");
const cards = document.querySelectorAll(".card");
const images = document.querySelectorAll(".image-div");
let darkModeOn = window.localStorage.getItem("darkMode-ls");

modeButton.addEventListener("click", toggleMode);

if (darkModeOn == "true") {
	toggleMode();
}

function toggleMode () {
	if (modeButton.textContent.includes("Dark Mode☑️")) {
        modeButton.classList.toggle("active");
		main.style.background = "#1b712a";
		main.style.color = "var(--tea-green)";
        cards.forEach(darkCard);
		images.forEach(darkCard);
		modeButton.textContent = "Dark Mode❎";
		window.localStorage.setItem("darkMode-ls", "true");
	} else {
		main.style.background = "var(--dark-sea-green)";
		main.style.color = "#1b712a";
        cards.forEach(lightCard);
		images.forEach(lightCard);
        modeButton.classList.toggle("active");
		modeButton.textContent = "Dark Mode☑️";
		window.localStorage.setItem("darkMode-ls", "false");
	}
	console.log(window.localStorage.getItem("darkMode-ls"));
}

function lightCard (item) {
    item.style.background = "var(--blue-ncs)";
    item.style.color = "#1b712a";
}
function darkCard (item) {
    item.style.background = "var(--prussian-blue)";
	item.style.color = "var(--dark-sea-green)";
}