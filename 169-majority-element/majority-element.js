/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}
    let n = nums.length

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i]
        if (map[key] !== undefined) {
            map[key] += 1
        } else {
            map[key] = 1
        }

        if (map[key] > (n/2)) {
            return key
        }
    }

};