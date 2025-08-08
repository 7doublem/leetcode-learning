/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    const distinct = new Array(26).fill(0)

    for (let i = 0; i < allowed.length; i++) {
        distinct[allowed.charCodeAt(i) - 97] = 1
    }

    console.log(distinct)

    for (let i = 0; i < words.length; i++) {
        let ok = true
        const w = words[i]

        for (let j = 0; j < w.length; j++) {
            if (distinct[w.charCodeAt(j) - 97] !== 1) {ok = false; break;}
        }
        if(ok) {
            count++
        }
    }

    return count
};