/** @module triangle */

/**
 * This function prints a left-aligned triangle pattern of hash symbols to the
 * console based on the input argument passed. The first line will have one hash
 * symbol, the second will have two, and so forth until it reaches the number
 * specified by the input parameter.
 *
 * @param {number} num - This is the number of lines to print in the triangle
 *   pattern
 */
export const generateTriangle = numTriangles => {
  let triangle = [];
  for (let i = 1; i <= numTriangles; i++) {
    triangle.push("#".repeat(i));
  }
  return triangle.join("\n");
};
