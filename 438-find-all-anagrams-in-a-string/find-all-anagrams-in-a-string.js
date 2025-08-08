/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const result = [];

    if (s.length < p.length) return result;

    const pCount = new Array(26).fill(0)
    const sCount = new Array(26).fill(0)

    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - 97]++
        sCount[s.charCodeAt(i) - 97]++
    }

    if (arraysMatch(pCount, sCount)) {
        result.push(0)
    }

    for (let i = p.length; i < s.length; i++) {
        sCount[s.charCodeAt(i) - 97]++
        sCount[s.charCodeAt(i - p.length) - 97]--

        if (arraysMatch(pCount, sCount)) {
            result.push(i - p.length + 1)
        }
    }
    return result
}

function arraysMatch(a1, a2) {
    for (let i = 0; i < 26; i++) {
        if(a1[i] !== a2[i]) return false
    }
    return true;
}