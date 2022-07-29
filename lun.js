const check = () => {
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

// lun algorithm
const getLunSum = (payload) => {
  return payload.reduce((acc, val, i) => (
    i % 2 !== 0 ? 
      acc + val :
      acc + ((val * 2) % 9) || 9), 0
  );
}

// valid if the sum is divisable by 10

module.exports = {check, prepInput, getCheckDigit, getLunSum};