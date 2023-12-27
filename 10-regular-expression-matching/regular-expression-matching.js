/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const memo = {};

    const dp = (i, j) => {
        if (memo.hasOwnProperty(`${i},${j}`)) {
            return memo[`${i},${j}`];
        }

        let result;
        if (j === p.length) {
            result = i === s.length;
        } else {
            const firstMatch = i < s.length && (s[i] === p[j] || p[j] === '.');

            if (j + 1 < p.length && p[j + 1] === '*') {
                result = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
            } else {
                result = firstMatch && dp(i + 1, j + 1);
            }
        }

        memo[`${i},${j}`] = result;
        return result;
    };

    return dp(0, 0);
};