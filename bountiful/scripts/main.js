//copyright year logic
const year =  new Date().getFullYear();
document.querySelector("#copyyear").textContent = year;

//Last updated logic
let lastupdate = new Date(document.lastModified);
document.querySelector("#lastupdate").innerHTML = lastupdate;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/* const date = new Date();
const completeDate = new Intl.DateTimeFormat("en", { dateStyle: "full" }).format(date);
document.querySelector("#date").innerText = completeDate; */

// if (document.location.pathname.includes('fresh.html')){

//initialize display elements

// const drinksDisplay = document.querySelector("#drinks");

// determine how many drinks

// if (numDrinks !== 0) {
// 	visitsDisplay.textContent = numVisits
// }else {
// 	drinksDisplay.textContent = "This is your first order!";
// }
// increment the number of visits
// numDrinks++;

//store the new number of visits value
// localStorage.setItem("visits-ls", numDrinks);


