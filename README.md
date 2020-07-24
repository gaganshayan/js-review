# JavaScript Review
This is my review of JavaScript

## Examples of Data Types
```javascript
    let name = 'Shayan Gagan';
    let age = 23;
    let isCool = true;
    const friends = ['Omar', 'Aziza', 'Aleena', 'Zohaib', 'Osamah'];

    const tesla = {
        industry: 'Electric Cars',
        ceo: 'Elon Musk',
        yearFounded: 2003,
        foundingMembers: ['Elon Musk', 'JB Straubel', 'Martin Eberhard'],
        stockTicker: 'TSLA',
        vehicles: {
            vehicileOne: 'Model S',
            vehcileTwo: 'Model X',
            vehicleThree: 'Model 3',
        },
        print: function() {
            console.log("The CEO of Tesla is " + this.ceo);
        }
    }
```

** Examples of Functions
```javascript
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
```

## DOM Manipulation
```javascript
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
```

### More DOM Manipulation
```javascript
const list = document.createElement('ul');

//iterate through my friends array
for (let i = 0; i < friends.length; i++) {
    let eachFriend = friends[i];
    
    //create an element
    const listItem = document.createElement('li');
    //added text to that element
    listItem.textContent = eachFriend;

    //append item to list
    list.appendChild(listItem);
}

console.log(list);

//listen for a click
headerThree.addEventListener('click', function() {
    container.appendChild(list);
})
```

<!-- Thursday Deliverable -->

Things we have covered so far in the curriculum:
- Fetch
- HTML Forms
- Constructor Functions
- Classes
- Promises
- Async/Await

FETCH:
- Fetch can be used to call information from a server without having to refresh the page. It can be used in instances such as:
-submitting an order
-loading user information
-receiving updates from a server

```
fetch(requestURL)
    .then(function(responseData) {
        console.log(responseData)
        return responseData.json()
    })
    .then(function(jsonData){
        let people = jsonData.results
        people.forEach(addPerson)
     })
    .catch(function(err){
        console.log("Oh no, there's been an error!", error)
    })
```

HTML Forms:
- HTML forms can be used in many ways, but they allow end users to input their data into a visually appealing form that displays for the collector on the console. The items that can be collected via a form are endless, but can include things like:
-names
-email addresses
-phone numbers
-preferences
-attachments
-etc.

```
const resultDiv = document.querySelector('#results');
console.log(resultDiv);

new URLSearchParams(window.location.search).forEach((value, name) => {
    console.log(name);
    console.log(value);

    let resultElement = document.createElement('p');
    resultElement.textContent = name + ' ' + value;

    resultDiv.appendChild(resultElement);
});
```

Constructor Functions:
- Constructor functions allow for many objects of the same type to be grouped together, for example in the case of creating a new object 'person', you might be able ot group their names, age, favorite color, gender, etc. together as one 'object type'.

```
function Person(firstName, lastName, age) {
  this.firstName = firstName; 
  this.lastName = lastName;
  this.age = age;
}

var myPerson = new Person();
```

Classes:
- Classes allow for many objects of the same type to be grouped together, for example in the case of creating a new object 'person', you might be able ot group their names, age, favorite color, gender, etc. together as one 'object type'.

```
var myMom = new Person("Jane", "Doe", 45, "black", "male");
var myDad = new Person("John", "Doe", 46, "white", "female");
```

Promises:
- A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it is not resolved (i.e error messages). Can be in one of three states: fulfilled, rejected or pending.

```

```

Async/Await:
- Async/Await functions are used in the case of promises as operators that are used to wait for promises, await functions are nested within async functions and enable promise-based behavior to be written in a cleaner style and substitute promise chains.

```

```