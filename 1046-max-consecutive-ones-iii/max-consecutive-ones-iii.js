/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let zeroes = 0;
    let best = 0

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeroes++

        while (zeroes > k) {
            if (nums[left] === 0) zeroes--
            left++
        }
        best = Math.max(best, right - left + 1)
    }

    return best
};