/** @module recursion */

/**
 * This function checks if a number is even or not using recursive calls.
 *
 * @param {number} num - The number to be checked
 * @returns {boolean} - Returns true if the number is even, false otherwise
 * @throws {Error} Will throw an error if input isn't a number or if it's
 *   negative
 */
export const isEven = num => {
  if (typeof num !== "number") {
    throw new Error("Must be given a number");
  } else if (num < 0) {
    throw new Error("Negative numbers are not allowed");
  } else if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
};

export default isEven;
