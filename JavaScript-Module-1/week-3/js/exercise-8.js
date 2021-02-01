// 8.1 8.2 8.3 8.4 8.5 8.6 8.7
let number = 1;
let firstName = 'Elena';
let lastName = 'Ackovska';
let isMarried = true;

console.log('The value of my variable number is: ' + number);
console.log('The value of my variable firstName is: ' + firstName);
console.log('The value of my variable lastName is: ' + lastName);
console.log('The value of my variable isMarried is: ' + isMarried);

console.log('The type of my variable number is number');
console.log('The type of my variable firstName is: string');
console.log('The type of my variable lastName is: string ');
console.log('The type of my variable isMarried is: boolean');
console.log(typeof number);
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof isMarried);

if (typeof number === typeof firstName) {
  console.log('SAME_TYPE');
} else {
  console.log('DIFFERENT_TYPE');
}
