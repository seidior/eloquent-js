import { describe, it, expect } from "bun:test";

import { min } from "./min.mjs";

describe("minOfTwoNumbers()", () => {
  it("should return the minimum number when the first argument is smaller", () => {
    expect(min(1, 2)).toStrictEqual(1);
  });

  it("should return the minimum number when the second argument is smaller", () => {
    expect(min(3, 2)).toStrictEqual(2);
  });

  it("should throw an error if one or both inputs are not numbers", () => {
    expect(() => min("1", 2)).toThrow();
    expect(() => min(3, "2")).toThrow();
    expect(() => min("1", "2")).toThrow();
  });
});
