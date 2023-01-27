const rating = document.querySelector("#rating-input");
const ratingOutput = document.querySelector("#rating");

function displayRating () {
    ratingOutput.innerHTML = rating.value;
}

rating.addEventListener('change', displayRating);
rating.addEventListener('input', displayRating);