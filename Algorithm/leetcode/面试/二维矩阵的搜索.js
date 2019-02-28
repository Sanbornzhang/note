// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。
// 示例:

// 现有矩阵 matrix 如下：

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// 给定 target = 5，返回 true。

// 给定 target = 20，返回 false。

// 简单解 不考虑特性并且只考虑素组结构
const testArray = [
                    [1,   4,  7, 11, 15],
                    [2,   5,  8, 12, 19],
                    [3,   6,  9, 16, 22],
                    [10, 13, 14, 17, 24],
                    [18, 21, 23, 26, 30]
                  ]
function searchArray (arr = [[]], target) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element.indexOf(target) !== -1) return true
  }
  return false
}

function searchUnidimensionalArray (arr= [[]], target) {
  let vArr = []
  arr.forEach(v=>{
    vArr = [...vArr, ...v]
  })
  return vArr.indexOf(target) !== -1
}
function search(matrix= [[]], target) {
  if (matrix.length === 0) return false;
  const yMax = matrix.length - 1;
  let y = 0;
  let x = matrix[0].length - 1;
  while (y <= yMax && x >= 0) {
      if (target === matrix[y][x]) {
          return true;
      } else if (target < matrix[y][x]) {
          --x;
      } else if (target > matrix[y][x]) {
          ++y;
      }
  }
  return false;
}
console.log(search(testArray, 5))