/*
    给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
    不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
    元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 快慢指针
var removeElement = function (nums, val) {
  if (nums.length <= 0) {
    return 0;
  }
  let fast = 0,
    slow = 0;
  while (fast < nums.length) {
    if (nums[fast] != val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};


// 递归遍历查找 ⭐️⭐️
var removeElement = function (nums, val) {
  if (nums.length <= 0) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      removeElement(nums, val);
    }
  }
  return nums.length;
};

// 循环遍历法
var removeElement = function (nums, val) {
  if (nums.length <= 0) {
    return 0;
  }
  let idx;
  for (idx = 0; idx < nums.length; ) {
    if (nums[i] === val) {
      nums.splice(idx, 1);
    } else {
      idx++;
    }
  }
  return nums.length;
};
