//Write a function that takes in the number of adults and returns the number of pizzas required to feed them.
//Assume 8 slices per pizza and assume each adult will eat 3 slices. Round up to the nearest pie.
//Math.ceil() for rounding up.

//Rounding up should be a final step.

//variable pizza multiply by 8 (slices)

//Pizza Slices by 3 per person

//Round

function numOfPies (adults){
    const pizzaConsumed = adults * 3
    const pizza = pizzaConsumed / 8
    const numPizzas = Math.ceil(pizza)
    return numPizzas
}

console.log(numOfPies(4))