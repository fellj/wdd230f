


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

const urlFresh = "https://ellefell.github.io/wdd230/bountiful/data.json";

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
    displayOrder(data);
  }  
  
  getFruitData();
  

// Display the fetched json fruit data  
const displayOrder = (data) => {

    // Create a placeholder for the output fruit cards container element
    const fruits = document.querySelector('div.fruits'); // select the output container element

    // Create the order header elements
    let para1           = document.createElement('p');

    // Build the paragraph content with contact name and phone number
    para1.style.textAlign = "left";
    para1.innerHTML       = `Customer Name: ${document.getElementById("firstName").innerHTML}`;
    para1.innerHTML      += " <br> "
    para1.innerHTML       = `Customer Phone Number: ${document.getElementById("phone").innerHTML}`;
    para1.innerHTML      += " <br> "
    para1.innerHTML      += `Customer Email Address: ${document.getElementById("email").innerHTML}`;
    para1.innerHTML      += " <br> "
    para1.innerHTML      += `Special Instructions: ${document.getElementById("details").innerHTML}`;
    para1.innerHTML      += " <br> "

    // For each loop that builds prophet cards
    data.forEach((fruit) => {

        // Create elements to add to the div.fruits element
        let fruitSection    = document.createElement('section');
        let h3              = document.createElement('h3');
        let h4              = document.createElement('h4');
        let logo            = document.createElement('img');
        
        let url             = document.createElement('a');


        // Build the h2 content out to show the company name
        // Finish the template string
        h3.textContent = `${fruit.name} `;
        h4.textContent = `Carbohydrates: ${fruit.nutritions.carbohydrates}`;

        
     
      


        
        
        // Append the section(card) with the created elements
        fruitSection.appendChild(h3);
        fruitSection.appendChild(h4);
        //fruitSection.appendChild(para1);
        fruitSection.appendChild(url);
        fruitSection.appendChild(logo);
        
        // Append the card to the cards output element
        fruits.appendChild(para1);
        fruits.appendChild(fruitSection);

        }) // end of forEach loop
    }     // end of function expression

  // Build the paragraph content with carbohydrates, protein, fat, sugar, and calories totaled
/*   para1.style.textAlign = "center";
  para1.innerHTML       = `Carbohydates: ${nutritions.carbohydrates}`;
  para1.innerHTML      += `Protein: ${nutritions.protein}`;
  para1.innerHTML      += `Fat: ${nutritions.fat}`;
  para1.innerHTML      += `Sugar: ${nutritions.sugar}`;
  para1.innerHTML      += `Calories ${nutritions.calories}`;

  const submitBtn = document.querySelector("submitBtn");
  const display = document.querySelector("article");

  submitBtn.addEventListener("click", () => {
  display.firstName;
  display.phone;
  display.email;
  display.option.add(dropdown1);
  display.option.add(dropdown2);
  display.option.add(dropdown3); */
/*   function displayOrder() {
    const name = document.getElementById("firstName").value;          
    let phone  = document.getElementById("phone").value;
    let email  = document.getElementById("email").value;
    let selection1 = document.getElementById("fruit-dropdown").value;
    let selection2 = document.getElementById("fruit-dropdown2").value;
    let selection3 = document.getElementById("fruit-dropdown3").value;

    let result = ${name} ${phone} ${email}${selection1}${selection2}${selection3};
    document.getElementById('spanResult').textContent = result; 
}*/
     
