/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    noSpaceS = s.replace(/\s+/g, ' ').trim()
    stringArr = noSpaceS.split(" ")
    return stringArr[stringArr.length - 1].length
};