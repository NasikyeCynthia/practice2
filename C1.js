// We store the prices of the products purchased 
let charcoal = 85000;
let meat = 45000;
let matooke =50000;
// We add up and find the total
let add = charcoal + meat + matooke;
// Using an if statement we are able to determine if the buyer qualifies for a discount
if(add > 100000){
    discount = add * 0.1
    price = add - discount
    console.log(`Congratualtions!!! You have a discount of ${discount}, your total price is ${price}.`)
} else{
    console.log(`Your total price is ${add}.`)
}