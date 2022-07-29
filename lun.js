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

// lun algorithm

// valid if the sum is divisable by 10

module.exports = {check, prepInput};