//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

function faveFood(person3) {
    for (let item in person3) {
        if (Array.isArray(person3[item])) {
            console.log(`${item}: ${person3[item].join(', ')}`);
        } else if (typeof person3[item] === 'object') {
            console.log(`${item}:`);
            for (let value_item in person3[item][0]) {
                console.log(`  ${value_item}: ${person3[item][0][valueofitem]}`);
            }
        } else {
            console.log(`${item}: ${person3[item]}`);
        };
    };
};

faveFood(person3);


//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class People{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    // Use an arrow to create the printInfo method
    printInfo = () => `${this.name} is ${this.age} years old.`
    // Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    addAge = () => {
        this.age = this.age + 1;
    };
};

const person1 = new People('Tony', 36)
console.log(person1.printInfo());

const person2 = new People('Claire', 42)
console.log(person2.printInfo());

person1.addAge();
person1.addAge();
person1.addAge();
console.log(person1.printInfo());





// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/
fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})

const driverStandingsData = async () => {
    const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
    const data = await response.json()
    console.log(data)

}
driverStandingsData()



//CodeWars problems://
/* #1 (Not attempted with Python)
DESCRIPTION:
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

ARRAYSLISTSFUNDAMENTALS */

let astring = "apple ban";
const anarr = astring.split(' ');
ans = []
for(let idx in anarr){
    ans.push(anarr[idx] + ' ' + anarr[idx].length)
}
console.log(ans)


/* #2
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

def even_or_odd(number):
  if number % 2 == 0:
    return "Even"
  else:
    return "Odd"
*/

const even_or_odd = (number) => {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd' 
    }
}
console.log(even_or_odd(45))