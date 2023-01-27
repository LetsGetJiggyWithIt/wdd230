const visitsLabel = document.querySelector('#userVisits');
let visits = Number(window.localStorage.getItem("visits-ls"))
if (visits !== 0) {
    visitsLabel.textContent = visits;
}
else {
    visitsLabel.textContent = "This is your first time!";
}
visits++;
localStorage.setItem("visits-ls", visits);