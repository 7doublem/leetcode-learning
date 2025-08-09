/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const n = candyType.length
    const doctorAdvise = (candyType.length / 2)
    let max = 0

    const candies = new Set()

    for (let i = 0; i < candyType.length; i++) {
        candies.add(candyType[i])
    }

    if (doctorAdvise === candies.size) {
        return candies.size
    } else if (candies.size > doctorAdvise) {
        return doctorAdvise
    } else if (candies.size < doctorAdvise) {
        return candies.size
    }

};