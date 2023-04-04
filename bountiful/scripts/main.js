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
//takes the 0 index list item ("Menu") and toggles between displaying "menu" and not displaying "menu" (.classList & .toggle are keywords). class changes to "responsive when toggle is triggered."
/* function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
} */

/* const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false); */
/* const date = new Date();
const completeDate = new Intl.DateTimeFormat("en", { dateStyle: "full" }).format(date);
document.querySelector("#date").innerText = completeDate; */