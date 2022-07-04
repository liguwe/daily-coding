function usedInBox(matrix, row, col, num) {
  // 先判断这个位置的数在那个方块里
  let list = []; // 用户存方块里的内容
  matrix.forEach((rowItem, rowIndex) => {
    rowItem.forEach((colItem, colIndex) => {
      if (row % 3 === rowIndex % 3 && colIndex % 3 === col % 3) {
        list.push(colItem)
      }
    })
  })
  console.log(list);
  return list.includes(num);
}

function isSafe(matrix, row, col, num) {
  return (
    matrix[row].includes(num)  // 这一行是否已经填充好这个数num
    && matrix[col].includes(num) // 这一列是否已经填充好这个数num
    // && usedInBox(matrix, row, col, num) // 方块里包含num
  );
}

function solveSudoku(matrix) {
  let row = 0;
  let col = 0;
  // 是否有空格，如果没有空格了，标识已经填充好了
  let checkBlankSpaces = false;

  for (row = 0; row < matrix.length; row++) {
    for (col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        checkBlankSpaces = true;
        break;
      }
    }
    if (checkBlankSpaces === true) {
      break;
    }
  }
  if (checkBlankSpaces === false) {
    return true;
  }

  for (let num = 1; num <= 9; num++) {
    if (isSafe(matrix, row, col, num)) {
      matrix[row][col] = num;
      if (solveSudoku(matrix)) {
        return true;
      }
      matrix[row][col] = 0;
    }
  }
  return false;
}

function sudokuSolver(matrix) {
  if (solveSudoku(matrix) === true) {
    return matrix;
  }
  return 'NO SOLUTION EXISTS!';
}


const sudokuGrid = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
]

console.log(sudokuSolver(sudokuGrid));


let isValid = function (s) {
  let stack = [],
    length = s.length;
  if (length % 2) return false;
  for (let item of s) {
    switch (item) {
      // 左括号，直接入栈
      case "{":
      case "[":
      case "(":
        stack.push(item);
        break;
      //  如果是有括号，出栈并对比，对应则取消继续，否则直接break了
      case "}":
        if (stack.pop() !== "{")
          return false;
        break;
      case "]":
        if (stack.pop() !== "[")
          return false;
        break;
      case ")":
        if (stack.pop() !== "(")
          return false;
        break;
    }
  }
  return !stack.length;
};

