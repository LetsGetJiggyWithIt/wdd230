const visitsLabel1 = document.querySelector('#userVisits1');
const visitsLabel2 = document.querySelector('#userVisits2');
let visits = Number(window.localStorage.getItem("visits-ls"));
const currentDate = new Date();
const currentMilliseconds = Number(currentDate.getTime());
const lastMilliseconds = Number(window.localStorage.getItem("visits-time")) || currentMilliseconds;
const daysSinceLastVisit = GetDaysSinceLastVisit(lastMilliseconds, currentMilliseconds);

function GetDaysSinceLastVisit(last, current) {
    current = Math.round(current / 60000 / 60 / 24);
    last = Math.round(last / 60000 / 60 / 24);
    days = current - last;
    return days;
}
if (visits !== 0) {
    if (visits == 1) {
        visitsLabel1.textContent = "You have visited this site " + visits + " time.";
    }
    else {
        visitsLabel1.textContent = "You have visited this site " + visits + " times.";
    }
    if (visits >= 50) {
        visitsLabel1.textContent += "👀";
    }
}
else {
    visitsLabel1.textContent = "This is your first time!";
}
visitsLabel2.textContent = "It has been " + daysSinceLastVisit + " days.";
visits++;
localStorage.setItem("visits-ls", visits);
localStorage.setItem("visits-time", currentMilliseconds);