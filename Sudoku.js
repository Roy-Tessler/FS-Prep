let puzzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],
  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],
  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7]
];
let p8zzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [8, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],
  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],
  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7]
];

// Getting a single row from the grid
function getRow(grid, rowIdx) {
  let rowResult = [];
  rowResult.push(...grid[rowIdx]);
  return rowResult;
}

// Getting a single column from a Sudoku grid.

function getColumn(grid, colIdx) {
  let columnResult = [];

  for (let i = 0; i < grid.length; i++) {
    columnResult.push(grid[i][colIdx]);
  }
  return columnResult;
}

//getting a single 3x3 subGrid

function getGrid(grid, xCorr, yCoor) {
  let subGridResult = [];
  let startingX = xCorr * 3;
  let startingY = yCoor * 3;

  for (let i = startingY; i < startingY + 3; i++) {
    for (let j = startingX; j < startingX + 3; j++) {
      subGridResult.push(grid[i][j]);
    }
  }
  return subGridResult;
}

//check that is each subsection includes numbers 1-9 with no duplicates

let numCounter = 0;

function includes1to9(gridSubsection) {
  for (let i = 0; i < gridSubsection.length; i++) {
    for (let j = 0; j < gridSubsection.length; j++) {
      let currentCheckedNum = gridSubsection[j];
      let currentNum = gridSubsection[i];

      if (currentCheckedNum === 0) {
        return "invalid input, numbers should be between 1-9";
      }

      if (currentNum === currentCheckedNum) {
        numCounter += 1;
        if (numCounter > 1) {
          return false;
        }
      }
    }
    numCounter = 0;
  }
  return true;
}

function sudokuIsValid(grid) {
  for (let j = 0; j < grid.length; j++) {
    if (
      includes1to9(getRow(grid, j)) === true &&
      includes1to9(getColumn(grid, j)) == true &&
      includes1to9(getGrid(grid, 2, 2)) === true
    ) {
      finalStageCheck = true;
    } else {
      finalStageCheck = false;
    }
  }
  return finalStageCheck;
}

// console.log(sudokuIsValid(puzzle));

//Bonus: Write a function isSame that takes two sudoku puzzles as parameters
//  and returns a boolean indicating whether they are identical puzzles.

function isSame(gridOne, gridTwo) {
  debugger;
  let isSameCheck = "";
  for (let i = 0; i < gridOne.length; i++) {
    let currentArrayOne = gridOne[i];
    let currentArrayTwo = gridTwo[i];
    if (currentArrayOne.toString() === currentArrayTwo.toString()) {
      isSameCheck = true;
    } else {
      isSameCheck = false;
      return isSameCheck;
    }
  }
  return isSameCheck;
}
console.log(isSame(p8zzle, puzzle));
