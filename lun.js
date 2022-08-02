const check = (number) => {
  const prepped = prepInput(number);
  const checkDigit = getCheckDigit(prepped);
  const sum = getLunSum(prepped);
  
  if ((10 - (sum % 10)) === checkDigit) {
    return true;
  }
  return false;
};

// prep the input for the lun algorithm
const prepInput = (input) => {
  return (input
    .toString()
    .split('')
    .reverse()
    .map((num) => parseInt(num))
  )
};

// get the check digit
const getCheckDigit = (cleanArr) => {
  return cleanArr.splice(0,1)[0];
}

const sumDigits = (num) => {
  let result = num * 2;
  if (result > 9) {
    const string = result.toString();
    return (
      parseInt(string[0]) + parseInt(string[1])
    )
  }
  return result;
}

// lun algorithm
const getLunSum = (payload) => {
  const reducer = payload.reduce((prev, val, i) => (
    i % 2 !== 0 ? 
      prev + val :
      prev + (sumDigits(val)))
    , 0);
  return reducer;
}

// valid if the sum is divisable by 10

module.exports = {check, prepInput, getCheckDigit, getLunSum, sumDigits};