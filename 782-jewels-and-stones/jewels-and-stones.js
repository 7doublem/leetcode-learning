/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let isJewel = new Array(128)
    for (let i = 0; i < 128; i++) {
        isJewel[i] = 0
    }

    for (let i = 0; i < jewels.length; i++) {
        let code = jewels.charCodeAt(i)
        isJewel[code] = 1
    }

    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        let code = stones.charCodeAt(i)
        if (isJewel[code] === 1) {
            count++
        }
    }

    return count
};