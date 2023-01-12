const menuButton = document.querySelector('#menu-button');
const menuItems = document.querySelectorAll('.menu-item');
const menuIcon = document.querySelector('#menu-icon');
const menu = document.querySelector('.menu');

menuButton.addEventListener("click", () => {
	menuItems.forEach((item) => item.classList.toggle("open"));
	menuButton.classList.toggle("close");
    menuIcon.classList.toggle("close");
    menu.classList.toggle("open");
});