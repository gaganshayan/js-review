let name = 'Shayan Gagan';
let age = 23;
let isCool = true;
const friends = ['Omar', 'Aziza', 'Aleena', 'Zohaib', 'Osamah'];

// const tesla = {
//     industry: 'Electric Cars',
//     ceo: 'Elon Musk',
//     yearFounded: 2003,
//     foundingMembers: ['Elon Musk', 'JB Straubel', 'Martin Eberhard'],
//     stockTicker: 'TSLA',
//     vehicles: {
//         vehicileOne: 'Model S',
//         vehcileTwo: 'Model X',
//         vehicleThree: 'Model 3',
//     },
//     print: function() {
//         console.log("The CEO of Tesla is " + this.ceo);
//     }
// }

// tesla.stockPrice = 1643.00;

// console.log(name);
// console.log(age);
// console.log(isCool);
// console.log(friends);
// console.log(tesla);
// console.log(tesla.vehicleThree);
// console.log(tesla['vehicles']['vehicleThree']);

// tesla.print();

const JimmyJohns = {
    industry: 'Fast Food',
    ceo: 'Jimmy John',
    yearFounded: 1985,
    foundingMembers: ['Jimmy', 'John'],
    stockTicker: 'JJON',
    sandwhiches: {
        sandwhichOne: 'California Sub',
        sandwhichTwo: 'Hawaiin Roll',
        sandwhichThree: 'Roast Beef Philly',
    },
    print: function() {
        console.log("The CEO of Jimmy John's is " + this.ceo);
    }
}

JimmyJohns.stockPrice = 48.00;

console.log(name);
console.log(age);
console.log(isCool);
console.log(friends);
console.log(JimmyJohns);
console.log(JimmyJohns.sandwhichThree);
console.log(JimmyJohns['sandwhiches']['sandwhichThree']);

JimmyJohns.print();

function printFriends(array) {
    array.forEach(friend => {
        console.log(friend);
    });
}

friends.forEach(function(friend){
    printName(friend);
});

// printFriends(friends);
// printFriends(JimmyJohns.foundingMembers);

//standard function
function addNumbers(num1, num2) {
    return num1 + num2;
};

//function expression
const addNumbers = function(num1, num2) {
    return num1 + num2;
};

//arrow function
const subtractNumbers = (num1, num2) => {
    return num1 + num2;
};

//DOM
const container = document.querySelector(.container);
console.log(container);

//Create an element
const headerTwo = document.createElement('h2');
headerTwo.textContent = 'My First JS Review';
console.log(headerTwo);

container.appendChild(headerTwo);

// add a class to headerTwo
headerTwo.classList.add('subtitle', 'header-two');
//headerTwo.setAttribute('class', 'header-two');

//remove class from headerTwo
headerTwo.classList.remove('header-two');
console.log(headerTwo);

headerTwo.addEventListener('click', function() {
    headerTwo.textContent = 'Shayan';
});

//make another element
const headerThree = document.createElement('h2');
headerThree.textContent = 'Friends';

container.appendChild(headerThree);

console.log(headerThree);

const list = document.createElement('ul');

//iterate through my friends array
for (let i = 0; i < friends.length; i++) {
    let eachFriend = friends[i];
    console.log(eachFriend);

    const listItem = document.createElement('li');
    listItem.textContent = eachFriend;

    //console.log(listItem);

    list.appendChild(listItem);
}

console.log(list);

headerThree.addEventListener('click', function() {
    container.appendChild(list);
});

//reference each friend
//create an li
//add textContent to that li
//append that to a ul (unordered list)

// //unordered list
// friends
// - friend 1
// - friend 2
// - friend 3

// //ordered list
// friends
// 1. friend 1
// 2. friend 2
// 3. friend 3

//Problem Solving

//what do i start with
//what do i end up with

//understand the problem
//where the issue starts and ...

//break it down into more manageable problems


//fizzBuzz
//write a function that does the following:
    // takes in an array
    // check each number in the array
    // if the number is divisible by 3 === FizzBuzz
    // if the number is divisible by 3 === Fizz
    // if the number is divisible by 5 === "Buzz"
// return an array

// For example:
// [3, 5, 15, 20, 9, 7]
// ['Fizz', 'Buzz', 'FizzBuzz', 'Buzz', 'Fizz', 7]

// I need to set up an empty
// iterate through the array that going to be passed in 
// check the remainder of each element
// push the result of each element inside the result array
// result that result array

function fizzBuzz(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        console.log(num);

        if (num % 3 === 0 && num % 5 === 0)
    }

    return result;
}

fizzBuzz ([3, 5, 15, 20, 9, 7]);