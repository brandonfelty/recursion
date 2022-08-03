// for every 2 empty bottles, you get one free full bottle of pop
// for every four bottle caps, you get one free full bottle of pop
// each bottle is $2 to purchase

// given investment x, how many bottles of pop? 

const investment = process.argv[2];

const redeem = (investment) => {
  let fullBottles = Math.floor(investment / 2);
  let totalBottles = fullBottles;
  let freeBottles = 0;
  let bottleCaps = 0;
  let totalFreeBottles = 0;
  let totalBottleCaps = 0;

  while (fullBottles >= 2) {
    freeBottles = Math.floor(fullBottles / 2);
    totalFreeBottles += freeBottles;
    totalBottles += freeBottles;
    bottleCaps += freeBottles * 2;
    totalBottleCaps += bottleCaps;
    fullBottles -= freeBottles * 2;
    fullBottles += freeBottles;

    if (bottleCaps >= 4) {
      freeBottles = Math.floor(bottleCaps / 4);
      totalFreeBottles += freeBottles;
      totalBottles += freeBottles;
      bottleCaps -= 4 * freeBottles;
      fullBottles += freeBottles;
    }
  }

  return (
    console.log(
      `TOTAL BOTTLES: ${totalBottles}
      REMAINING BOTTLES: ${fullBottles}
      REMAINING CAPS: ${bottleCaps}
      TOTAL EARNED: 
        BOTTLES: ${totalFreeBottles} 
        CAPS: ${totalBottleCaps}
    `)
  );
};


// task 1
// console.log(redeem(10), ": 15 Total Bottles");
// console.log(redeem(20), ": 35 Total Bottles");
// console.log(redeem(30), ": 55 Total Bottles");
// console.log(redeem(40), ": 75 Total Bottles");

// task 2
redeem(investment);
