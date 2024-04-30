/** @module flattenArray */

/**
 * Flattens an array of arbitrarily nested arrays of values into a flat array of
 * values. If the function is called on a non-array input, returns that same
 * value unchanged.
 *
 * @param {any} baseArray - The input value, which might be an array or not.
 * @returns {any | any[]} Flattened version of the input array (if it was an
 *   array), or the original value (if it wasn't an array).
 */
export const flattenArray = baseArray => {
  if (!Array.isArray(baseArray)) {
    return baseArray;
  }
  if (baseArray.length === 0) {
    return baseArray;
  }
  return baseArray.reduce((previous, current) => {
    const flattenedSubArray = flattenArray(current);
    return previous.concat(flattenedSubArray);
  }, []);
};
