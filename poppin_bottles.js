// for every 2 empty bottles, you get one free full bottle of pop
// for every four bottle caps, you get one free full bottle of pop
// each bottle is $2 to purchase

// given investment x, how many bottles of pop? 

const redeem = (investment) => {
  let fullBottles = Math.floor(investment / 2);
  let totalBottles = fullBottles;
  let freeBottles = 0;
  let bottleCaps = 0;

  while (fullBottles >= 2) {
    freeBottles = Math.floor(fullBottles / 2);
    totalBottles += freeBottles;
    bottleCaps += freeBottles * 2;
    fullBottles -= freeBottles * 2;
    fullBottles += freeBottles;

    if (bottleCaps >= 4) {
      freeBottles = Math.floor(bottleCaps / 4);
      totalBottles += freeBottles;
      bottleCaps -= 4 * freeBottles;
      fullBottles += freeBottles;
    }
  }

  return totalBottles;
};


// task 1
console.log(redeem(10), ": 15 Total Bottles");
console.log(redeem(20), ": 35 Total Bottles");
console.log(redeem(30), ": 55 Total Bottles");
console.log(redeem(40), ": 75 Total Bottles");
