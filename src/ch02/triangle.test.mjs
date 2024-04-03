import { describe, expect, it } from "bun:test";

import { generateTriangle } from "./triangle.mjs";

describe("generateTriangle", () => {
  it("should return a triangle with the correct number of lines when given an input", () => {
    const numLines = 5;
    const result = generateTriangle(numLines);

    expect(result.split("\n").length).toBe(numLines);
  });

  it("should return a triangle where each line has one more hash symbol than the previous", () => {
    const numLines = 5;
    const result = generateTriangle(numLines);

    for (let i = 0; i < numLines; i++) {
      const line = result.split("\n")[i];
      const pattern = new RegExp("#".repeat(i + 1));

      expect(line).toHaveLength(i + 1);
      expect(pattern.test(line)).toStrictEqual(true);
    }
  });

  it("should return an empty string when given 0 as input", () => {
    const result = generateTriangle(0);

    expect(result).toEqual("");
  });
});
