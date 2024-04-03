import { describe, it, expect } from "bun:test";

import { countBs, countChar } from "./beanCounting.mjs";

describe("countBs()", () => {
  it("should return 3 when input is 'BBAAB'", () => {
    expect(countBs("BBAAB")).toStrictEqual(3);
  });

  it("should return 0 when input is an empty string ''", () => {
    expect(countBs("")).toStrictEqual(0);
  });

  it("should return 2 when input is 'BbaB'", () => {
    expect(countBs("BbaB")).toStrictEqual(2);
  });
});

describe("countChar()", () => {
  it("should return 2 when input is ('BBAAB', 'A')", () => {
    expect(countChar("BBAAB", "A")).toStrictEqual(2);
  });

  it("should return 0 when input is an empty string '' and char='A'", () => {
    expect(countChar("", "A")).toStrictEqual(0);
  });

  it("should return 1 when input is ('BbaB', 'a')", () => {
    expect(countChar("BbaB", "a")).toStrictEqual(1);
  });

  it("should return 4 when input is ('kakkerlak', 'k')", () => {
    expect(countChar("kakkerlak", "k")).toStrictEqual(4);
  });

  it("should throw an Error when first input is not a string", () => {
    expect(() => countChar(123, "A")).toThrow();
  });

  it("should throw an Error when second input is not a string", () => {
    expect(() => countChar("BBAAB", ["A"])).toThrow();
  });

  it("should throw an Error when second input is more than one character", () => {
    expect(() => countChar("BBAAB", "AA")).toThrow();
  });

  it("should throw an Error when second input is empty", () => {
    expect(() => countChar("BBAAB", "")).toThrow();
  });
});
