import { describe, it, expect } from "bun:test";

import { isEven } from "./recursion.mjs";

describe("isEven()", () => {
  it("should return true for even numbers", () => {
    expect(isEven(2)).toStrictEqual(true);
    expect(isEven(10)).toStrictEqual(true);
    expect(isEven(50)).toStrictEqual(true);
  });

  it("should return false for odd numbers", () => {
    expect(isEven(1)).toStrictEqual(false);
    expect(isEven(9)).toStrictEqual(false);
    expect(isEven(75)).toStrictEqual(false);
  });

  it("should throw an error if the argument is not a number", () => {
    expect(() => isEven("2")).toThrow();
    expect(() => isEven([1, 2, 3])).toThrow();
    expect(() => isEven({})).toThrow();
  });

  it("should throw an error for negative numbers", () => {
    expect(() => isEven(-1)).toThrow();
    expect(() => isEven(-10)).toThrow();
  });
});
