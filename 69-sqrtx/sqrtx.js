/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let lo = 0;
    let hi = x;
    while (lo <= hi) {
        mid = Math.floor((lo + hi) / 2)
        if (mid*mid === x) {
            return mid
        } else if (mid*mid > x) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }
    return hi;
};