const assert = require('chai').assert;
const {check, prepInput} = require("../lun")
describe('check', function () {
  describe("prepInput", () => {
    it("should return an array of digits", () => {
      assert.deepEqual(prepInput(79927398713), [3,1,7,8,9,3,7,2,9,9,7])
    })
  })
  xit('should return a valid check digit', function () {
    assert.equal(check(79927398713), true);
  });
  xit('should return a valid check digit', function () {
    assert.equal(check(502091324785), true);
  });
  xit('should return a valid check digit', function () {
    assert.equal(check(4462009138008), true);
  });
  xit('should return not valid', function () {
    assert.equal(check(1321213621654), false);
  });
});



