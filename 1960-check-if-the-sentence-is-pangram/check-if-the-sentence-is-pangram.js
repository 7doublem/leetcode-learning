/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {

    let seen = new Array(26);
    for (let i = 0; i < 26; i++) {
        seen[i] = 0
    }

    let count = 0;

    for(let i = 0; i < sentence.length; i++) {
        let code = sentence.charCodeAt(i);
        if(code >= 97 && code <=122) {
            let index = code - 97
            if (seen[index] === 0) {
                seen[index] = 1
                count ++
            }
        }
    }

    return count === 26
};