const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("floating point whole numbers", () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it("rounding down a's floating point", () => {
    assert.strictEqual(calculateNumber(1.3, 2.0), 3);
  });

  it("rounding down b's floating point", () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it("rounding down a and b's floating point", () => {
    assert.strictEqual(calculateNumber(1.3, 2.4), 3);
  });

  it("rounding up a's floating point", () => {
    assert.strictEqual(calculateNumber(2.7, 2.0), 5);
  });

  it("rounding up b's floating point", () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it("rounding up a and b's floating point", () => {
    assert.strictEqual(calculateNumber(2.8, 2.5), 6);
  });

  it("rounding down a and b floating point with trailing 9's", () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
