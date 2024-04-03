/** @module beanCounting */

/**
 * Count the number of 'B's in a string
 *
 * @param {string} str - The input string to search through for 'B's.
 * @returns {number} The count of 'B's found in the input string.
 * @throws Will throw an error if input is not a string.
 */
export const countBs = str => {
  return countChar(str, "B");
};

/**
 * Count the number of a specific grapheme in a string
 *
 * @param {string} str - The input string to search through for 'char'.
 * @param {string} char - The grapheme to be counted in 'str'.
 * @returns {number} The count of 'char' found in 'str'.
 * @throws Will throw an error if either input is not a string or if the second
 *   input is not a single character.
 */
export const countChar = (str, char) => {
  if (typeof str !== "string" || typeof char !== "string") {
    throw new Error("Both inputs must be strings");
  }

  const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });

  if (Array.from(segmenter.segment(char)).length !== 1) {
    throw new Error("Second input must be a single grapheme");
  }

  let count = 0;

  for (const grapheme of Array.from(segmenter.segment(str))) {
    if (grapheme.segment === char) {
      count++;
    }
  }

  return count;
};

export default countChar;
