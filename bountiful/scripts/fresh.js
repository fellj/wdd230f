


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
      	  option.value = data[i].abbreviation;
/* 
          option2 = document.createElement('option2');
      	  option2.text = data[i].name;
      	  option2.value = data[i].abbreviation;

          option3 = document.createElement('option3');
      	  option3.text = data[i].name;
      	  option3.value = data[i].abbreviation;
 */


      	  dropdown.add(option);
         /*  dropdown2.add(option2);
          dropdown3.add(option3); */
    	}    
        
      }
      );  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });


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
     
