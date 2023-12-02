/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let fullCost = 35;
let halfCost = 20;
let days = 0;
const buttons = document.querySelectorAll('.days');
const clear = document.getElementById('clear-button');
const dayType = document.querySelectorAll('.day-type');
let totalCost = document.getElementById("calculated-cost").innerHTML;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

buttons.forEach(button => {
    button.addEventListener('click', function(){
        if(button.classList.contains('clicked')) {
            button.classList.remove('clicked');
            days -= 1;
            recalculate()        
        } else {
            button.classList.add('clicked');
            days += 1;
            recalculate()
        }
    });
})

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clear.addEventListener('click', function(){
    buttons.forEach(button =>{
        button.classList.remove('clicked');
        days = 0
        recalculate()
    })
})

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

dayType.forEach(type => {
    type.addEventListener('click', function(){
        if(!document.getElementById('half').classList.contains('clicked')){
            type.classList.add('clicked')
            document.getElementById('full').classList.remove('clicked')
            cost = 35
            recalculate()
        } else if(!document.getElementById('full').classList.contains('clicked')){
            type.classList.add('clicked')
            document.getElementById('half').classList.remove('clicked')
            cost = 20
            recalculate()
        }
    })
})


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate(){
    if(document.getElementById('half').classList.contains('clicked')){
        document.getElementById("calculated-cost").innerHTML = halfCost * days; 
    } else if (document.getElementById('full').classList.contains('clicked')){
        document.getElementById("calculated-cost").innerHTML = fullCost * days; 
    }
}


 
