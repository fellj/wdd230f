// initialize display elements
const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visits");

// get the stored value in local storage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits
}else {
	visitsDisplay.textContent = "This is your first visit!";
}
// increment the number of visits
numVisits++;

//store the new number of visits value
localStorage.setItem("visits-ls", numVisits);