/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0
    const map = new Map([
    ['I', 1], 
    ['IV', 4], 
    ['V', 5],
    ['IX', 9],
    ['X', 10], 
    ['XL', 40], 
    ['L', 50], 
    ['XC', 90], 
    ['C', 100], 
    ['CD', 400], 
    ['D', 500], 
    ['CM', 900], 
    ['M', 1000],
    ]);
    const stringArr = s.split(''); // splitting the string into individual elements in an array

    //looping over the array and using map to get the values for each roman numeral

    for (let i = 0; i < stringArr.length; i++) {
        if (map.get(stringArr[i]) < map.get(stringArr[i+1])) {
           total -= map.get(stringArr[i]);
        } else {
            total += map.get(stringArr[i]);
        }
    }
    return total;
};