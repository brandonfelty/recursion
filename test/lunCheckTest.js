const assert = require('chai').assert;
const {check, prepInput, getCheckDigit, getLunSum, sumDigits} = require("../lun")
describe('check', function () {
  describe("prepInput", () => {
    it("should return an array of digits", () => {
      assert.deepEqual(prepInput(79927398713), [3,1,7,8,9,3,7,2,9,9,7])
    })
  });
  describe("getCheckDigit", () => {
    it("should return the check digit", () => {
      assert.equal(getCheckDigit([3,1,7,8,9,3,7,2,9,9,7]), 3);
    })
  });
  describe("sumDigits", () => {
    it("should return the correct number", () => {
      assert.equal(sumDigits(1), 2);
    })
    it("should return the correct number", () => {
      assert.equal(sumDigits(8), 7);
    })
  });
  describe("getLunSum", () => {
    it("should return the correct sum", () => {
      assert.equal(getLunSum([1,7,8,9,3,7,2,9,9,7]), 67);
    })
  });
  it('should return a valid check digit', function () {
    assert.equal(check(79927398713), true);
  });
  it('should return a valid check digit', function () {
    assert.equal(check(502091324785), true);
  });
  it('should return not valid', function () {
    assert.equal(check(4462009138008), false);
  });
  it('should return not valid', function () {
    assert.equal(check(1321213621654), false);
  });
});



