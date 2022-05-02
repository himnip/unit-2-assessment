///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price, 
    0,
);

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
    calcFinalPrice = cartTotal + tax - couponValue
    return calcFinalPrice
}

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
For the properties i chose for my customer object were name, age, allergies and zip code. 
I chose name because it's necessary for a restaurant to know the name of a customer to ensure their order gets to them and it will be a string. 
Age so that if a customer had the same name as someone else there could be other ways to differientate the customer by physically seeing them and it will be a number. 
Allergies help the restaurant make sure nothing harmful goes into the customers food and this will be a string.
Lastly zip code so that their order can be delivered to them or they can see if they are eligible for delivery and this would be a number. 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer = {
    name: 'James',
    age: 24,
    allergies: 'shellfish',
    zipCode: 84005,
}