/** @module reverseArray */

export const reverseArray = sourceArray => {
  const destArray = [];

  for (let arrayElement of sourceArray) {
    destArray.unshift(arrayElement);
  }

  return destArray;
};

export const reverseArrayInPlace = sourceArray => {
  const tempArray = [];

  while (sourceArray.length > 0) {
    tempArray.push(sourceArray.pop());
  }

  for (let tempElement of tempArray) {
    sourceArray.push(tempElement);
  }
};
