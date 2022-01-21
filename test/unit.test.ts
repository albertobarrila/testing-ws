import { expect } from "chai";
import { fizzBuzz } from "../src/unit";

describe("fizzBuzz", () => {
  it("return 1 for 1", () => {
    expect(fizzBuzz(1)).to.be.eql(1);
  });
});
