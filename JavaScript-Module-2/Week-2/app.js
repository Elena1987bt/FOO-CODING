'use strict';
const data = [
  {
    product: 'Milk, 1L carton',
    best_before: '2018-10-04',
    price: 15.5,
  },
  {
    product: 'Milk, 1L carton',
    best_before: '2018-10-04',
    price: 15.5,
  },
  {
    product: 'Eggs 12pcs',
    best_before: '2018-10-04',
    price: 35.0,
  },
  {
    product: 'Swedish meatballs',
    best_before: '2018-10-04',
    price: 22.0,
  },
];
// const dataJson = JSON.stringify(data);
// const dataJS = JSON.parse(dataJson);

function mostExpensiveItem(data) {
  let arrMostExpensive = [];
  let mostExpensivePrice = 0;
  let mostExpensiveItem;
  for (let i = 0; i < data.length; i++) {
    if (data[i].price > mostExpensivePrice) {
      mostExpensivePrice = data[i].price;
      mostExpensiveItem = data[i];
    }
  }
  arrMostExpensive.push(mostExpensiveItem);
  return JSON.stringify(arrMostExpensive);
}
console.log(mostExpensiveItem(data));

function cheapestItem(data, fn) {
  let arrCheapestItem = [];
  let mostCheapest = JSON.parse(fn(data))[0].price;
  let mostCheapestItem;

  for (let i = 0; i < data.length; i++) {
    if (data[i].price <= mostCheapest) {
      mostCheapest = data[i].price;
      mostCheapestItem = data[i];
      arrCheapestItem.push(mostCheapestItem);
    }
  }

  return JSON.stringify(arrCheapestItem);
}
console.log(cheapestItem(data, mostExpensiveItem));
