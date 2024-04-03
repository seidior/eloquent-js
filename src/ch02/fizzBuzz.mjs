/** @module fizzBuzz */

/**
 * Prints numbers from 1 to n, replacing multiples of three with 'Fizz',
 * multiples of five with 'Buzz', and multiples of both with 'FizzBuzz'.
 *
 * @param {number} n - The number to count up to.
 */
export const fizzBuzz = n => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
