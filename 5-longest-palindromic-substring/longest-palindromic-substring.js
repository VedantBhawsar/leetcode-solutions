/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
     if (s.length === 0) {
        return "";
    }

    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(false));

    let start = 0;
    let maxLength = 1;

    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }

    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;

            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                start = i;
                maxLength = len;
            }
        }
    }

    return s.substring(start, start + maxLength);
};