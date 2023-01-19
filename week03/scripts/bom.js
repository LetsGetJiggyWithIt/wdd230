const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
let chapters = getChapterList() || [];

chapters.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener("click", () => {
    if (input.value != "") {
        displayList(input.value);
        chapters.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

function displayList (item) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", () => {
        deleteChapter(li.textContent);
        list.removeChild(li);
        input.focus;
        input.value = "";
    });
};

function setChapterList () {
    window.localStorage.setItem("myFavBomList", JSON.stringify(chapters));
}

function getChapterList () {
    return JSON.parse(window.localStorage.getItem("myFavBomList"));
}

function deleteChapter (chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapters = chapters.filter((item) => item !== chapter);
    setChapterList();
}