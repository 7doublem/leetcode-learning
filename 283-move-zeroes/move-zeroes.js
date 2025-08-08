/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    let nonZeroIndex = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i]
            nonZeroIndex++
        }
    }

    while (nonZeroIndex < nums.length) {
        nums[nonZeroIndex] = 0;
        nonZeroIndex++
    }

    console.log(nums)
};