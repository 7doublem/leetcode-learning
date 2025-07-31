/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lo = 0;
    let hi = nums.length;
    while (lo < hi) {
        const m = Math.floor((lo + hi) / 2)
        if (nums[m] === target) {
            return m
        } else if (nums[m] < target) {
            lo = m + 1
        } else (
            hi = m
        )
    }
    return -1
};