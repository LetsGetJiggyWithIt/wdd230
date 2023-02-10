const sidebar = document.querySelector(".sidebar");
const sidebarMenu = document.querySelector(".sidebar-menu");
const sidebarContent = document.querySelector(".sidebar-content");
let menuOpen = false;

sidebarMenu.addEventListener("click", () => {
    sidebar.classList.toggle("maximized");
    sidebarContent.classList.toggle("maximized");
    sidebarMenu.classList.toggle("maximized");
    if (menuOpen != true) {
        menuOpen = true;
        sidebarMenu.setAttribute("src", "images/black-x.svg");
        sidebarMenu.setAttribute("alt", "Close Sidebar");
    }
    else {
        menuOpen = false;
        sidebarMenu.setAttribute("src", "/images/hamburger.svg");
        sidebarMenu.setAttribute("alt", "Open Sidebar");
    }
});