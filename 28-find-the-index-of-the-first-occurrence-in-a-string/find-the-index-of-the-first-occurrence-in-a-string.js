/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") return 0;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let section = haystack.substring(i, i + needle.length)
        if (section === needle) return i
    } 
    return -1
};