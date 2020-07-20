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

