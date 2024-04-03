/**
 * @module min
 */

/**
 * Finds the smallest number between two inputs.
 * @param {number} a - The first input value.
 * @param {number} b - The second input value.
 * @return {number} - Returns the smaller of the two input values.
 * @throws Will throw an error if either of the inputs is not a number.
 */
export const min = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both inputs must be numbers");
  }
  return a < b ? a : b;
};

export default min;
