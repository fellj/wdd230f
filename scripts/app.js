const h1 = document.querySelector("h1");
h1.textContent = "Lisa A. Fell";

//copyright year
const year =  new Date().getFullYear();
document.querySelector("#copyyear").textContent = year;

//Last updated logic
let lastupdate = new Date(document.lastModified);
document.querySelector("#lastupdate").innerHTML = lastupdate;
