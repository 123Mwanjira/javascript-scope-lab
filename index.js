// Global scope variables
let burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function-scoped variable inside function
function addBurger() {
    let newBurger = 'Flatburger';
    burgers.push(newBurger);
}

// Block-scoped variable inside if statement
if (true) {
    let anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
}

// Function to update global variable
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}