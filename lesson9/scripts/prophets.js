const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

/* Create a async function to fetch data from the json source url using await. Add a console.log or console.table expression to check on the data 
response in the console. 
You will need to add a function call somewhere in your JavaScript file to invoke the async function that you created. */



async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
}
  
  getProphetData();