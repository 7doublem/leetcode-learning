/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const freq = new Array(26).fill(0);
    const A = 'A'.charCodeAt(0);

    let left = 0;
    let maxCount = 0;   // max frequency of a single char in the current window
    let best = 0;

    for (let right = 0; right < s.length; right++) {
        const idx = s.charCodeAt(right) - A;
        freq[idx]++;
        if (freq[idx] > maxCount) maxCount = freq[idx];

        // If changes needed > k, shrink from the left
        while ((right - left + 1) - maxCount > k) {
            freq[s.charCodeAt(left) - A]--;
            left++;
        }

        // window [left..right] is valid here
        best = Math.max(best, right - left + 1);
    }

    return best;
};