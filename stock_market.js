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

  // //brute force 2 
  // let profit = 0;
  // for (let i = 0; i < prices.length; i++) {
  //   for (let j = i + 1; j < prices.length; j++) {
  //     profit = Math.max(profit, prices[j] - prices[i]);
  //   }
  // }

  // base case
  // if (prices.length <= 1) {
  //   return 0;
  // }

  // const middleI = Math.ceil(prices.length / 2);
  // const left = prices.splice(0, middleI);
  // const right = prices.splice(-middleI);
  // console.log(left, right)

  // const leftBest = maxProfit(left);
  // const rightBest = maxProfit(right);
  
  // const crossBest = Math.max(right) - Math.min(left);
  // console.log(leftBest, rightBest, crossBest)
  // return Math.max(leftBest, rightBest, crossBest)
  
  // return profit;




  // elegant solution
  let profit = 0;
  let minimum = prices[0];

  for (let i = 0; i < prices.length; i++) {
    minimum = Math.min(minimum, prices[i]);
    profit = Math.max(profit, prices[i] - minimum);
    console.log(minimum, profit)
  }

  return profit;
}

const input = [45, 24, 35, 31, 40, 38, 11];
console.log(maxProfit(input), ": should return 16");