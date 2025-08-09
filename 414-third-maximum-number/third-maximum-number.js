/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a,b) => b - a)
    let count = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            count++
            if (count === 3) return nums[i]
        }
    }
    return nums[0]
};