const sumArray = (array) => {
  let sum = 0;

  for (element of array) {
    if (Array.isArray(element)) {
      sum += sumArray(element);
    } else {
      sum += element;
    }
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]), ": should be 15");
console.log(sumArray([1, [2, 3, 4], 5]), ": should be 15")
