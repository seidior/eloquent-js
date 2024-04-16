import { describe, expect, it } from "bun:test";

import { range, sum } from "./sumRange.mjs";

describe("range()", () => {
  it("should return an array of numbers 1-3", () => {
    expect(range(1, 3)).toStrictEqual([1, 2, 3]);
  });

  it("should return an array of numbers 3-1", () => {
    expect(range(3, 1, -1)).toStrictEqual([3, 2, 1]);
  });

  it("should return even numbers from 0-10", () => {
    expect(range(0, 10, 2)).toStrictEqual([0, 2, 4, 6, 8, 10]);
  });

  it("should throw an error if step value is 0", () => {
    expect(() => range(0, 1, 0)).toThrow();
  });
});

describe("sum()", () => {
  it("should show a sum of 6 for numbers 1-3", () => {
    expect(sum([1, 2, 3])).toStrictEqual(6);
  });
});
