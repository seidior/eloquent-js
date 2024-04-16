import { describe, expect, it } from "bun:test";

import { reverseArray, reverseArrayInPlace } from "./reverseArray.mjs";

describe("reverseArray()", () => {
  it("should return an array of numbers 3-1 for numbers 1-3", () => {
    expect(reverseArray([1, 2, 3])).toStrictEqual([3, 2, 1]);
  });
});

describe("reverseArrayInPlace()", () => {
  it("should directly modify array for numbers 1-3 to have numbers 3-1", () => {
    const exampleArray = [1, 2, 3];
    reverseArrayInPlace(exampleArray);
    expect(exampleArray).toStrictEqual([3, 2, 1]);
  });
});
