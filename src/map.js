//Array of shopping list items
let shoppingList = [
  {
    'item': 'banana',
    'quantity': 6
  },
  {
    'item': 'milk',
    'quantity': 1
  },
  {
    'item': 'yogurt',
    'quantity': 4
  },
  {
    'item': 'eggplant',
    'quantity': 2
  },
  {
    'item': 'bell pepper',
    'quantity': 2
  },
  {
    'item': 'sharp cheddar cheese',
    'quantity': 1
  }
];


//for loop using Array of shopping list items

//First set a variable to create a new empty Array.
//This allows us to hold on to the Array to use later.
let shoppingList_names = [];

//Now lets assemble our for loop.
//A for loop takes three arguments in this order:
//1. Assign a variable to the current position, in this case it says "start at 0"
//2. Define the condition that must be true for the loop to continue, in this case 'i' must be less than or equal to the length of the Array
  //This is done in the two central steps.
  //'let max = shoppingList.length' holds on to the number of objects in the Array and assigns it the variable 'max'
  //'i <= max' tells us 'i' must be less than or equal to 'max' (aka the number of objects in the Array)
//3. What is going to occur every time we go throught the loop, in this case it says "add one to me"
for (let i = 0, let max = shoppingList.length, i <=  max , i++){
  //on the following line we will use the for loop to 'push' the information we want into our empty Array
  shoppingList_names.push(shoppingList[i].name);
}


//map function

//Here we are saying lets hold on to the variable 'shoppingList' and assign it to the value of the map function.
//We use dot notation to attach the map function to the array we want to work with
//The map function receives an anonymous function that can take in an argument made up of what you want to work with, the index, and the array.
//In this case we only use the first part of the argument.
let shoppingList_names = shoppingList.map(function(shoppingList){
  //Be sure to return in your callback.
  return shoppingList.name;
});
