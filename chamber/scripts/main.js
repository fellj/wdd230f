// select the elements to manipulate (output to)
// const datefieldUK = document.querySelector("aside");

//current date logic
// const now = new Date();

// const fulldateUK = new Intl.DateTimeFormat("en-UK", {
// 	dateStyle: "full"
// }).format(now);

// datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

//copyright year logic
const year =  new Date().getFullYear();
document.querySelector("#copyyear").textContent = year;

//Last updated logic
let lastupdate = new Date(document.lastModified);
document.querySelector("#lastupdate").innerHTML = lastupdate;


//takes the 0 index list item ("Menu") and toggles between displaying "menu" and not displaying "menu" (.classList & .toggle are keywords). class changes to "responsive when toggle is triggered."
function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

/* const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false); */
const date = new Date();
const completeDate = new Intl.DateTimeFormat("en", { dateStyle: "full" }).format(date);
document.querySelector("#date").innerText = completeDate;

//get day of the week and display banner


const bannerDay = date.getDay();

	if(bannerDay == "1" || bannerDay == "2"){
		document.querySelector(".bannerClose").addEventListener("click", function() {
		this.closest(".banner").style.display = "none";
}
	
);
	}else {
		document.querySelector(".banner").style.display = "none";
	}