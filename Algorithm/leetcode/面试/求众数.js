// 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在众数。

// 示例 1:

// 输入: [3,2,3]
// 输出: 3
// 示例 2:

// 输入: [2,2,1,1,1,2,2]
// 输出: 2

function majorityElement(arr = []) {
  const map = {}
  arr.forEach(element => {
    map[element] = map[element] || 0
    map[element] ++
  });
  return Object.keys(map).find(v=> map[v] > arr.length/2)
}
console.log(majorityElement([2,2,1,1,1,2,2]))

// 另一种思路是假定给的一定是有众数的 对数组进行取值

function majorityElementSort(arr = []) {
  return arr.sort()[Math.floor(arr.length/2)]
}
console.log(majorityElementSort([2,2,1,1,1,2,2]))

// 暴力 但是只循环一次
function majorityElementCount(arr = []) {
  let count = 0;
  let candidate = 0;
  for (let num of arr) {
      if (count === 0) {
          candidate = num;
      } 
      count = candidate === num ? count + 1 : count - 1;
  }
  return candidate;
}

console.log(majorityElementCount([2,2,1,1,1,2,2]))