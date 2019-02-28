// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
// 示例 1:

// 输入: [2,2,1]
// 输出: 1
// 示例 2:

// 输入: [4,1,2,1,2]
// 输出: 4

function getNum(arr) {
  const map = {}
  arr.forEach(i => {
    map[i] = map[i] || 0
    map[i]++
  });
  return Object.keys(map).find(key=> map[key]==1)
}
console.log(getNum([4,1,2,1,2]))

let singleNumber = (arr)=> {
  let res = 0;
  for (let num of arr) {
    console.log(num)
      res ^= num;
  }
  return res;
};

console.log(singleNumber([4,1,2,1,2]))
