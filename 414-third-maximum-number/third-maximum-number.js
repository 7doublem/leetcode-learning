/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const sorted = nums.sort((a,b) => b - a)
    const distinct = []

    for (let i = 0; i < sorted.length; i++) {
        if (!distinct.includes(sorted[i])) {
            distinct.push(sorted[i])
        }
    }
    console.log(distinct)
    if (distinct[2] !== undefined) {
        return distinct[2]
    } else {
        return distinct[0]
    }
};