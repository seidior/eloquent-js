import { describe, expect, it } from "bun:test";

import { flattenArray } from "./flattenArray.mjs";

describe("flattenArray()", () => {
  it("should do nothing for a non-array", () => {
    expect(flattenArray({})).toStrictEqual({});
  });
  it("should do nothing for an empty array", () => {
    expect(flattenArray([])).toStrictEqual([]);
  });
  it("should do nothing for a flat array", () => {
    expect(flattenArray([1, 2, 3])).toStrictEqual([1, 2, 3]);
  });
  it("should flatten an array with a single nested layer", () => {
    expect(flattenArray([1, 2, ["a", "b"]])).toStrictEqual([1, 2, "a", "b"]);
  });
  it("should flatten an array with two nested layers", () => {
    expect(flattenArray([1, 2, ["a", [{ test: "test2" }, "b"]]])).toStrictEqual(
      [1, 2, "a", { test: "test2" }, "b"]
    );
  });
});
