// const sumArray = (array) => {
//   let sum = 0;

//   for (element of array) {
//     if (Array.isArray(element)) {
//       sum += sumArray(element);
//     } else {
//       sum += element;
//     }
//   }

//   return sum;
// }

// console.log(sumArray([1, 2, 3, 4, 5]), ": should be 15");
// console.log(sumArray([1, [2, 3, 4], 5]), ": should be 15");

const generateBinaryString = (num) => {
  let combinations = [];
  let binary = "";
  // base case
  if (num === 0) {
    binary += combinations.join("");
  } else {
    combinations[num - 1] = 0;
    generateBinaryString(num - 1);
    combinations[num - 1] = 1;
    generateBinaryString(num - 1);
  }

  return binary;
};

console.log(generateBinaryString(1), ": should return \"0,1\"");
console.log(generateBinaryString(2), ": should return \"00,01,10,11\"");
