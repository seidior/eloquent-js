/** @module sumRange */

/**
 * Generates a range of numbers from start to end with a given step size.
 *
 * @param {number} start - The starting number in the range.
 * @param {number} end - The ending number in the range.
 * @param {number} [step=1] - The step size for each number in the range. It can
 *   be a positive or negative number, default is 1 if not provided. Default is
 *   `1`
 * @returns {Number[]} An array of numbers representing the generated range.
 * @throws {Error} Throws an error when step is neither positive nor negative
 *   number.
 */
export const range = (start, end, step = 1) => {
  const rangeArray = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      rangeArray.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i >= end; i += step) {
      rangeArray.push(i);
    }
  } else {
    throw new Error("step needs to be a positive or negative number");
  }

  return rangeArray;
};

/**
 * Calculates the sum of numbers in an array.
 *
 * @param {Number[]} rangeArray - An array containing numbers.
 * @returns {number} The sum of all numbers in the array.
 */
export const sum = rangeArray => {
  let runningSum = 0;

  for (let arrayItem of rangeArray) {
    runningSum += arrayItem;
  }

  return runningSum;
};
