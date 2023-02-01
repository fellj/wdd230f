
// three variables that hold references to the input, button, and list elements
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");


// click event listener for the Add Chapter button using addEventListener and an anonymous function.

button.addEventListener("click", () => {
    if (input.value !== "") {
        let chapter = input.value;

        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");
        

        li.textContent = chapter
        deleteBtn.textContent = "❌";
        
        deleteBtn.addEventListener("click", () => {
            list.removeChild(li);

        });
        li.appendChild(deleteBtn);
        list.appendChild(li);
    }
    input.value = "";
    input.focus();
});