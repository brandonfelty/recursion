const maxProfit = (prices) => {
  // // brute force strategy
  // let dates = [];
  // for (let i = 0; i < prices.length; i++) {
  //   for (let j = 1 + i; j < prices.length; j++) {
  //     dates.push([prices[i], prices[j]]);
  //   }
  // }

  // let profit = 0;
  // for (let i = 0; i < dates.length; i++) {
  //   if (dates[i][1] - dates[i][0] > profit) {
  //     profit = dates[i][1] - dates[i][0]
  //   }
  // }

  //brute force 2 
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      profit = Math.max(profit, prices[j] - prices[i]);
    }
  }

  return profit;

  // elegant solution
  
}

const input = [45, 24, 35, 31, 40, 38, 11];
console.log(maxProfit(input), ": should return 16");