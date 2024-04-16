import { describe, expect, it } from "bun:test";

import { arrayToList, listToArray, nth, prepend } from "./linkedList.mjs";

describe("arrayToList()", () => {
  it("should produce a linked list for [10, 20]", () => {
    expect(arrayToList([10, 20])).toStrictEqual({
      value: 10,
      rest: { value: 20, rest: null }
    });
  });
});

describe("listToArray()", () => {
  it("should produce [10, 20, 30] from the equivalent linked list", () => {
    expect(
      listToArray({
        rest: {
          rest: {
            rest: null,
            value: 30
          },
          value: 20
        },
        value: 10
      })
    ).toStrictEqual([10, 20, 30]);
  });
});

describe("prepend()", () => {
  it("should produce the same linkedList as in the arrayToList test", () => {
    expect(prepend(10, prepend(20, null))).toStrictEqual({
      value: 10,
      rest: { value: 20, rest: null }
    });
  });
});

describe("nth()", () => {
  it("should grab the second element from the linked list equivalent of [10, 20, 30]", () => {
    expect(
      nth(
        {
          rest: {
            rest: {
              rest: null,
              value: 30
            },
            value: 20
          },
          value: 10
        },
        1
      )
    ).toStrictEqual(20);
  });
});
