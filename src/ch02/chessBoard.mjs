/** @module chessBoard */

/**
 * Generates a string representing an ASCII art chess board of the given size.
 * The board alternates between spaces and hashes.
 *
 * @param {number} size - The length (in squares) for each side of the board.
 * @returns {string} A string representation of the ASCII chess board.
 */
export const generateChessBoard = size => {
  let chessBoard = [];
  for (let i = 0; i < size; i++) {
    let line = "";
    for (let j = 0; j < size; j++) {
      line += (i + j) % 2 === 0 ? " " : "#";
    }
    chessBoard.push(line);
  }
  return chessBoard.join("\n");
};

/**
 * Prints a string representation of an ASCII art chess board of the given size
 * to console.log(). The board alternates between spaces and hashes.
 *
 * @param {number} size - The length (in squares) for each side of the board.
 */
export const printChessBoard = size => {
  console.log(generateChessBoard(size));
};
