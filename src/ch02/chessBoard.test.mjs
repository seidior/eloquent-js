import { afterEach, beforeEach, describe, expect, it } from "bun:test";

import { generateChessBoard, printChessBoard } from "./chessBoard.mjs";

describe("generateChessBoard", () => {
  it("should return a string representing an ASCII art chess board of the given size", () => {
    const result = generateChessBoard(4);
    const expected = ` # #\n# # \n # #\n# # `;

    expect(result).toBe(expected);
  });
});

describe("printChessBoard", () => {
  let result = "";
  let originalLog;

  beforeEach(() => {
    originalLog = console.log;

    console.log = output => {
      result += output + "\n";
    };
  });

  afterEach(() => {
    console.log = originalLog;

    result = "";
  });

  it("should log a string representation of an ASCII art chess board of the given size to console.log()", () => {
    printChessBoard(4);

    expect(result).toEqual(` # #\n# # \n # #\n# # \n`);
  });
});
