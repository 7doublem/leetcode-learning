/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const words = paragraph.replace(/[!?,;.'"]/g, ' ').toLowerCase().split(/\s+/)
    console.log(words)
    const bannedSet = new Set(banned)
    let count = {};
    let maxWord = ''
    let maxCount = 0

    for (let word of words) {
        if (word === '' || bannedSet.has(word)) continue;

        count[word] = (count[word] || 0) + 1
        if (count[word] > maxCount) {
        maxWord = word;
        maxCount = count[word]
    }
    }

    return maxWord

};