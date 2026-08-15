"""
Problem: Climbing Stairs
You can climb 1 or 2 steps at a time. Given n steps, how many
distinct ways can you reach the top?
e.g. n=5 -> 8

Pattern: 1D DP — dp[i] depends on dp[i-1] and dp[i-2], since you
can arrive at step i from either one step or two steps back.
"""

def climb_stairs(n):
    if n <= 2:
        return n

    dp = [0] * (n + 1)
    dp[1], dp[2] = 1, 2
    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]

    return dp[n]


if __name__ == "__main__":
    test_cases = [1, 2, 5, 10]
    for n in test_cases:
        print(f"climb_stairs({n}) -> {climb_stairs(n)}")