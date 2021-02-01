// More JavaScript
// 1. Create a function that takes 3 arguments and returns the sum of the these arguments.

function add(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(add(2, 4, 6));

// 2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color) {
  console.log('A ' + color + ' car!');
}
colorCar('red');
colorCar('blue');

// 3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
const person = {
  firstName: 'Elena',
  lastName: 'Ackovska',
  age: 33,
  isMarried: true,
};
function personFunction(obj) {
  for (key in obj) {
    console.log(obj[key]);
  }
}
personFunction(person);

// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType(color, code) {
  if (code === 1) {
    console.log('A ' + color + ' car');
  }
  if (code === 2) {
    console.log('A ' + color + ' motorbike');
  }
}

vehicleType('blue', 2);
vehicleType('green', 1);

// 5. Can you write the following without the if statement, but with just as a single line with console.log(...);?
// if (3 === 3) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

3 === 3 ? console.log('yes') : console.log('no');

// 6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(color, code, age) {
  if (code === 1 && age >= 5) {
    console.log('A ' + color + ' used car');
  }
  if (code === 2 && age > 0 && age < 5) {
    console.log('A ' + color + ' almost new motorbike');
  }
}

vehicle('blue', 1, 5);
vehicle('red', 2, 2);

// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

let vehicles = ['motorbike', 'caravan', 'bike', 'car', 'truck'];
// 8. How do you get the third element from that list?
console.log(vehicles[2]);
// 9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

function vehicle(color, code, age) {
  if (code === 1 && age >= 5) {
    console.log('A ' + color + ' used car');
  }
  if (code === 2 && age > 0 && age < 5) {
    console.log('A ' + color + ' almost new motorbike');
  }
  if (code === 3 && age === 1) {
    console.log('A ' + color + ' new bike');
  }
}
vehicle('green', 3, 1);

// 10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."
let items = [];
for (let i = 0; i < vehicles.length; i++) {
  items.push(vehicles[i] + 's');
}
console.log(items);
console.log(items[items.length - 1]);
items[items.length - 1] = 'and ' + items[items.length - 1];
//items.splice(items.length - 1, 0, 'and');
console.log(items);
let newItems = items.join(', ');
console.log(newItems);
newItems = newItems.replace(/,\s*$/, '');

let advertisment = "Amazing Joe's Garage, we service " + newItems + '.';
console.log(advertisment);

// 11.What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
items.push('planes');
console.log(items);
console.log(advertisment);

// 12. Create an empty object

let car = {};
// 13. Create an object that contains the teachers that you have had so far for the different modules.
let teachers = {
  firstTeacher: Baraa,
  secondTeacher: Seif,
  thirdTeacher: Josef,
  languages: ['HTML', 'CSS', 'JAVASCRIPT'],
};
console.log(teachers);
