/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const row0 = "qwertyuiop"
    const row1 = "asdfghjkl"
    const row2 = "zxcvbnm"

    const rowId = new Array(26);

    for (let i = 0; i < 26; i++) {
        rowId[i] = 99
    }

    for (let i = 0; i < row0.length; i++) {
        rowId[row0.charCodeAt(i) -97] = 0
    }

    for (let i = 0; i < row1.length; i++) {
        rowId[row1.charCodeAt(i) -97] = 1
    }

    for (let i = 0; i < row2.length; i++) {
        rowId[row2.charCodeAt(i) -97] = 2
    }

    const res = []

    for (let i = 0; i < words.length; i++) {
        const s = words[i].toLowerCase()
        let id = rowId[s.charCodeAt(0) - 97]
        let ok = true;
        for (let j = 1; j < s.length; j++) {
            if (rowId[s.charCodeAt(j) - 97] !== id) {
                ok = false
                break;
            }
        } 
        if (ok) res.push(words[i])
    }

    return res
};