


let dropdown = document.getElementById('fruit-dropdown');
let dropdown2 = document.getElementById('fruit-dropdown2');
let dropdown3 = document.getElementById('fruit-dropdown3');
dropdown.length = 0;
dropdown2.length = 0;
dropdown3.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Fruit 1';
let defaultOption2 = document.createElement('option');
defaultOption2.text = 'Choose Fruit 2';
let defaultOption3 = document.createElement('option');
defaultOption3.text = 'Choose Fruit 3';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

dropdown2.add(defaultOption2);
dropdown2.selectedIndex = 0;

dropdown3.add(defaultOption3);
dropdown3.selectedIndex = 0; 

const urlFresh = "https://fellj.github.io/wdd230f/bountiful/data.json";

fetch(urlFresh)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option;
      /*   let option2;
        let option3; */
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  //option.value = data[i].abbreviation; THERE IS NOTHING IN ABBREVIATION
      	  dropdown.add(option);
    	}
        
        /* Additional For Loop Fruit Option # 2 */
        for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i].name;
            dropdown2.add(option);
        }

        /* Additional For Loop Fruit Option # 3 */
        for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i].name;
            dropdown3.add(option);
        }


        
      }
      );  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });

// Fetches data from the json source url using await.
async function getFruitData() {
    const response = await fetch(urlFresh);
    const data = await response.json();

    // Select three random fruits
    //const inputFruits = getMultipleRandom(data, 3)


    displayOrder(data);
  }  
  
  //getFruitData();
  

// Display the fetched json fruit data  
const displayOrder = (data) => {

    // Create a placeholder for the output fruit cards container element
    const fruits = document.querySelector('div.fruits'); // select the output container element

    // Create the order header elements
    let para1           = document.getElementById('customer');

    // Build the paragraph content with customer name, phone number, etc.
    para1.style.textAlign = "left";
    para1.innerHTML       = "<h2>Customer Order</h2><br><br>";
    para1.innerHTML      += `<h3>Customer Name: </h3>${document.getElementById("firstName").value}`;
    para1.innerHTML      += " <br> "
    para1.innerHTML      += `<h3>Customer Phone Number: </h3>${document.getElementById("phone").value}`;
    para1.innerHTML      += " <br> "
    para1.innerHTML      += `<h3>Customer Email Address: </h3>${document.getElementById("email").value}`;
    para1.innerHTML      += " <br> "
    para1.innerHTML      += `<h3>Special Instructions: </h3>${document.getElementById("details").value}`;
    para1.innerHTML      += " <br> "
    para1.innerHTML      += " <hr> "
    para1.innerHTML      += " <hr> "
    para1.innerHTML      += " <br> "
    para1.innerHTML      += " <h3> Selected fruits in drink include...</h3><br>"

    fruits.appendChild(para1);

    // Determine which fruits were selected
    let f1 = document.getElementById("fruit-dropdown").value;
    let f2 = document.getElementById("fruit-dropdown2").value;
    let f3 = document.getElementById("fruit-dropdown3").value;

    // Declare nutrition total variables
    let totCarbs    = 0;
    let totProteins = 0;
    let totFats     = 0;
    let totSugars   = 0;
    let totCalories = 0;

    // For each loop that builds prophet cards
    data.forEach((fruit) => {

      // Only build section if fruit name matches
      // the selected option
      if ([f1, f2, f3].includes(fruit.name)){

        // Create elements to add to the div.fruits element
        let fruitSection    = document.createElement('section');
        let fruitTitle      = document.createElement('h3');
        let br              = document.createElement('br');

        // Build the h2 content out to show the fruit name
        // Finish the template string
        fruitTitle.textContent = `${fruit.name}`;
        totCarbs     += fruit.nutritions.carbohydrates;
        totProteins  += fruit.nutritions.protein;
        totFats      += fruit.nutritions.fat;
        totSugars    += fruit.nutritions.sugar;
        totCalories  += fruit.nutritions.calories;

        // Append the section(fruit) with the created elements
        fruitSection.appendChild(fruitTitle);
        fruitSection.appendChild(br);
       
        // Append the fruitSection to the fruits output element
        fruits.appendChild(fruitSection);


      }


        }) // end of forEach loop

        // Add total elements to the order display
        let para2 = document.getElementById('totals');

        // Build the paragraph content with fruit drink totals
        para2.style.textAlign = "left";
        para2.innerHTML       = "<hr><h3>Nutrition Totals</h3><br><br>";
        para2.innerHTML      += " <br> "
        para2.innerHTML      += `Total Carbohydrates: ${Math.round(totCarbs)} monosaccharides`;
        para2.innerHTML      += " <br> "
        para2.innerHTML      += `Total Protein: ${Math.round(totProteins)} grams`;
        para2.innerHTML      += " <br> "
        para2.innerHTML      += `Total Fat: ${Math.round(totFats)} grams`;
        para2.innerHTML      += " <br> "
        para2.innerHTML      += `Total Sugar: ${Math.round(totSugars)} grams`;
        para2.innerHTML      += " <br> "
        para2.innerHTML      += `Total Calories: ${totCalories} <br><br><hr>`;

        // Add totals to fruit section
        fruits.appendChild(para2);

    }     // end of function expression