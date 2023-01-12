const modeButton = document.querySelector("#dark-mode");
const main = document.querySelector("main");
const cards = document.querySelectorAll(".card");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("Dark Mode☑️")) {
        modeButton.classList.toggle("active");
		main.style.background = "#000";
		main.style.color = "#fff";
        cards.forEach(darkCard);
		modeButton.textContent = "Dark Mode❎";
	} else {
		main.style.background = "coral";
		main.style.color = "#000";
        cards.forEach(lightCard);
        modeButton.classList.toggle("active");
		modeButton.textContent = "Dark Mode☑️";
	}
});
function lightCard (item) {
    item.style.background = "pink";
    item.style.color = "#000";
}
function darkCard (item) {
    item.style.background = "gray";
	item.style.color = "black";
}