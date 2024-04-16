/** @module linkedList */

/**
 * Prepend an element to a linked list
 *
 * @param {any} element - The value to prepend to the linked list
 * @param {object} linkedList - The linked list to be prepended to
 * @returns {object} A new linked list with the given element prepended
 */
export const prepend = (element, linkedList) => {
  return {
    value: element,
    rest: linkedList
  };
};

/**
 * Convert an array into a linked list
 *
 * @param {Array} sourceArray - The array to be converted into a linked list
 * @returns {object} A new linked list with the contents of the given array
 */
export const arrayToList = sourceArray => {
  const arrayCopy = structuredClone(sourceArray); // Create a copy of the original array
  let linkedList = null;

  while (arrayCopy.length) {
    linkedList = prepend(arrayCopy.pop(), linkedList);
  }

  return linkedList;
};

/**
 * Convert a linked list into an array
 *
 * @param {object} sourceList - The linked list to be converted into an array
 * @returns {Array} A new array with the contents of the given linked list
 */
export const listToArray = sourceList => {
  const returnArray = [];
  let currentNode = sourceList;

  while (currentNode !== null) {
    returnArray.push(currentNode.value);
    currentNode = currentNode.rest;
  }

  return returnArray;
};

/**
 * Get the value at a specific index in a linked list
 *
 * @param {object} sourceList - The linked list to get the value from
 * @param {number} index - The zero-based index of the value to get
 * @returns {any} The value at the given index in the given linked list
 */
export const nth = (sourceList, index) => {
  if (index === 0) {
    return sourceList.value;
  } else {
    return nth(sourceList.rest, index - 1);
  }
};
