const wchill = document.querySelector("#windchill");
const temp = parseFloat(document.querySelector("#temp").textContent);
const windspeed = parseFloat(document.querySelector("#windspeed").textContent);

let windchill;

if (temp <= 50.0 && windspeed > 3.0) {
    
    windchill = Math.round(
        35.74 + 0.6215 * temp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temp * Math.pow(windspeed, .16)
    );

     wchill.textContent = windchill;
}
else {
    windchill = "N/A";
    wchill.textContent = windchill;
    
}

