// Another way to solve the task using the callBack function

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
  {
    product: 'Bread',
    best_before: '2018-10-04',
    price: 35.0,
  },
  {
    product: 'Butter',
    best_before: '2018-10-04',
    price: 35.0,
  },
  {
    product: 'Cheese',
    best_before: '2018-10-04',
    price: 35.0,
  },
  {
    product: 'Bananas 1kg',
    best_before: '2018-10-04',
    price: 15.5,
  },
  {
    product: 'Apples 1kg',
    best_before: '2018-10-04',
    price: 15.5,
  },
];
// const dataJson = JSON.stringify(data);
// const dataJS = JSON.parse(dataJson);

// 1. Find most expensive items

function mostExpensiveItems(data) {
  let mostExpensiveItems = [];
  const prices = data.map((item) => {
    return item.price;
  });
  //console.log(arrPrices);
  let mostExpensivePrice = Math.max(...prices);
  // console.log(mostExpensivePrice);

  let mostExpensiveItem;
  for (let i = 0; i < data.length; i++) {
    if (data[i].price === mostExpensivePrice) {
      mostExpensiveItem = data[i];
      mostExpensiveItems.push(mostExpensiveItem);
    }
  }

  return JSON.stringify(mostExpensiveItems);
}
console.log(mostExpensiveItems(data));

// 2. Find most cheapest items

function cheapestItems(data, fn) {
  let cheapestItems = [];
  let mostCheapestPrice = JSON.parse(fn(data))[0].price;
  let mostCheapestItem;

  for (let i = 0; i < data.length; i++) {
    if (data[i].price <= mostCheapestPrice) {
      mostCheapestPrice = data[i].price;
      mostCheapestItem = data[i];
      cheapestItems.push(mostCheapestItem);
    }
  }

  return JSON.stringify(cheapestItems);
}
console.log(cheapestItems(data, mostExpensiveItems));
