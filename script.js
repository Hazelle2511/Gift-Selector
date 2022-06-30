document.getElementById("btn").addEventListener("click", calculate)
document.getElementById("balloon-checkbox").addEventListener("change", balloonPlus)
let balloonIncluded = document.getElementById('balloon-included');
let costEl = document.getElementById("cost-el");

function balloonPlus(){
    
   const balloonCheckbox = document.getElementById("balloon-checkbox").checked;
   /* console.log(balloonIncluded) */
   balloonCheckbox ? balloonIncluded.innerHTML = "+$5" : balloonIncluded.innerHTML = " "
}

function calculate() {
    // 1. Write the JavaScript to calculate the total cost of the selected options from the form.
    // 2. Display the total cost in the cost-el span.
    const foodSelect = document.getElementById("food-select").value;
    const transportSelect = document.getElementById("transport-select").value;
    const balloonCheckbox = document.getElementById("balloon-checkbox").checked;
    
    if(foodSelect && transportSelect) {
        let giftCost = parseInt(foodSelect) + parseInt(transportSelect);
        balloonCheckbox ? giftCost += 5 : null
        costEl.innerHTML = giftCost;
    } else {
        alert("Please complete the selection of food and tranport.")
    } 
  
   

}
 