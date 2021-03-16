'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x); // x = 9

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y); // y.x = 10

// Pass by value --> for variables --> When passing variables into arguments inside of the function any changes that are made of the arguments inside the function does not affect the passing variables outside of the function.

// Pass by reference --> for objects --> When passing objects into arguments inside of the function the changes of the object that are made inside of the function are reflected on the passing objects outside of the function. This means that we pass the reference of that object, not the actual object.
