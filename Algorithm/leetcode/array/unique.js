// 去重的其他方法
// 1. Set
// 2. Object key
// 3. indexOf
// const removeDuplicates = (arr = [])=>{
//   const result = []
//   arr.forEach(v=>{
//     let repeat = false
//     result.forEach(rv => {
//       if (rv === v ){
//         repeat = true
//         return false
//       }
//     })
//     console.log(repeat,v)
//     if (!repeat)
//       result.push(v)
//   })
//   return result
// }

var removeDuplicates = function(nums) {
  // var sorted = 0;
  // console.log(nums)
  // for(var i = 1; i < nums.length; i++) {
  //     if(nums[i] !== nums[sorted]) {
  //         sorted++;
  //         nums[sorted] = nums[i];
  //     }
  // }
  // console.log(nums)
  // return sorted + 1;
  if(!nums || nums.length === 0) {
    return 0;
}

var end = 0;

// index: 012345678
// vals:  111222333
// first swap happen when end = 0; i points at index 3 with val 2
// end++ becomes end points at index 1 and swap with index 3
// after that vals become:
// vals:  121122333
// i at at index 4 and end is at index 2

for(var i = 1; i < nums.length; i++) {
    if(nums[i] !== nums[end]) {
        end++;
        
        if(i !== end) {
            nums[end] = nums[i];
        }
    }
}
console.log(nums)
return end+1;
};
const buildRandomArray = (l = 10) => Math.random().toString(10).slice(-l).split('')
console.log(removeDuplicates(buildRandomArray()))