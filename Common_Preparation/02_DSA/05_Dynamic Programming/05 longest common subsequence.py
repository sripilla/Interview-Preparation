"""
Problem: Longest Common Subsequence (LCS)
Given two strings, find the length of their longest common
subsequence (characters in the same relative order, not
necessarily contiguous).
e.g. "abcde", "ace" -> 3   ("ace")

Pattern: 2D DP on strings — dp[i][j] = LCS length of s1[:i] and
s2[:j]. If characters match, extend the diagonal; otherwise carry
forward the best of skipping a character from either string.
"""

def longest_common_subsequence(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    return dp[m][n]


if __name__ == "__main__":
    test_cases = [
        ("abcde", "ace"),
        ("abc", "abc"),
        ("abc", "def"),
        ("AGGTAB", "GXTXAYB"),
    ]
    for s1, s2 in test_cases:
        print(f"longest_common_subsequence({s1!r}, {s2!r}) -> {longest_common_subsequence(s1, s2)}")