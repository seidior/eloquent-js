import { afterEach, beforeEach, describe, expect, it } from "bun:test";
import { fizzBuzz } from "./fizzBuzz.mjs";

describe("FizzBuzz", () => {
  let result = "";
  let originalLog;

  beforeEach(() => {
    // store the reference to the original console.log
    originalLog = console.log;

    // mock console.log
    console.log = output => {
      result += output + "\n";
    };
  });

  afterEach(() => {
    // restore the original console.log
    console.log = originalLog;

    // clear the results for each test case
    result = "";
  });

  it('should print "Fizz" for multiples of three', () => {
    fizzBuzz(3);
    expect(result).toStrictEqual("1\n2\nFizz\n");
  });

  it('should print "Buzz" for multiples of five', () => {
    fizzBuzz(5);
    expect(result).toStrictEqual("1\n2\nFizz\n4\nBuzz\n");
  });

  it('should print "FizzBuzz" for multiples of both three and five', () => {
    fizzBuzz(15);
    expect(result).toStrictEqual(
      "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n"
    );
  });
});
