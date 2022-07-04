// 即判断是否在空白的区域里
function isSafe(maze, x, y) {
  const n = maze.length;
  if (x >= 0 && y >= 0 && x < n && y < n && maze[x][y] !== 0) {
    return true;
  }
  return false;
}

// 使用递归
function findPath(maze, x, y, solution) {

  // 第一步是验证老鼠是否到达了终点
  // 如果到了，就将最后一个位置标记为 路径的一部分 并返回 true，表示移动成功结束
  const n = maze.length;
  if (x === n - 1 && y === n - 1) {
    solution[x][y] = 1;
    return true;
  }

  // 如果安全
  if (isSafe(maze, x, y) === true) {
    solution[x][y] = 1;
    if (findPath(maze, x + 1, y, solution)) {
      return true;
    }
    if (findPath(maze, x, y + 1, solution)) {
      return true;
    }
    solution[x][y] = 0;
    return false;
  }
  return false;
}


const maze = [
  [1, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
  [0, 1, 1, 1]
];

function ratInAMaze(maze) {
  // 创建一个包含解的矩阵，将每个位置初始化为零
  const solution = [];
  for (let i = 0; i < maze.length; i++) {
    solution[i] = [];
    for (let j = 0; j < maze[i].length; j++) {
      solution[i][j] = 0;
    }
  }

  if (findPath(maze, 0, 0, solution) === true) {
    return solution;
  }

  return 'NO PATH FOUND';
}

console.log(ratInAMaze(maze))
