const assignmentList = document.querySelector("#assignments");
async function getAssignments () {
    try {
        let response = await fetch("course-assignments.json");
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            Object.entries(data).forEach(key => {
                let weekTitle = document.createElement("li");
                let weekTitleParagraph = document.createElement("p");
                let weekFirstLetter = key[0].charAt(0);
                weekFirstLetter = weekFirstLetter.toUpperCase();
                let weekRemainingLetters = key[0].slice(1);
                let weekTitleText = weekFirstLetter + weekRemainingLetters;
                weekTitleParagraph.innerHTML = weekTitleText;
                weekTitleParagraph.classList.add("title");
                weekTitle.appendChild(weekTitleParagraph);
                assignmentList.appendChild(weekTitle);
                key[1].forEach(item => {
                    let currentAssignment = document.createElement("li");
                    let currentAssignmentParagraph = document.createElement("p");
                    let currentAssignmentAnchor = document.createElement("a");
                    currentAssignmentAnchor.setAttribute("href", item.url);
                    currentAssignmentAnchor.innerHTML = item.name;
                    currentAssignmentParagraph.appendChild(currentAssignmentAnchor);
                    currentAssignment.appendChild(currentAssignmentParagraph);
                    assignmentList.appendChild(currentAssignment);
                });
            })
        }
    } catch (error) {
        console.log(error);
    }
}
getAssignments();