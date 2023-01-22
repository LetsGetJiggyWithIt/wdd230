const modeButton = document.querySelector("#dark-mode");
const main = document.querySelector("main");
const cards = document.querySelectorAll(".card");
const images = document.querySelectorAll(".image-div");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("Dark Mode☑️")) {
        modeButton.classList.toggle("active");
		main.style.background = "#1b712a";
		main.style.color = "var(--tea-green)";
        cards.forEach(darkCard);
		images.forEach(darkCard);
		modeButton.textContent = "Dark Mode❎";
	} else {
		main.style.background = "var(--dark-sea-green)";
		main.style.color = "#1b712a";
        cards.forEach(lightCard);
		images.forEach(lightCard);
        modeButton.classList.toggle("active");
		modeButton.textContent = "Dark Mode☑️";
	}
});
function lightCard (item) {
    item.style.background = "var(--blue-ncs)";
    item.style.color = "#1b712a";
}
function darkCard (item) {
    item.style.background = "var(--prussian-blue)";
	item.style.color = "var(--dark-sea-green)";
}