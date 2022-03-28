/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 1、双for循环 暴力破解方法  性能:一般  推荐指数:⭐️⭐️  算法复杂度O(n²)
var twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

// 2、哈希查找法 性能：较好  推荐指数：⭐️⭐️⭐️⭐️
var twoSum2 = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const crt = target - nums[i];
    if (map.has(crt)) {
      return [map.get(crt), i];
    }
    map.set(nums[i], i);
  }
};
