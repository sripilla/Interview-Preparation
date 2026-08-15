"""
Problem: 0/1 Knapsack
Given item weights, values, and a capacity, find the maximum
value achievable without exceeding the capacity. Each item can be
used at most once.
e.g. weights=[1,3,4,5], values=[1,4,5,7], capacity=7 -> 9

Pattern: 2D DP — dp[i][w] = best value using first i items within
weight w. Compare "skip item i" vs "take item i" (if it fits).
"""

def knapsack_01(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(capacity + 1):
            dp[i][w] = dp[i-1][w]   # option 1: don't take item i-1
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w], dp[i-1][w - weights[i-1]] + values[i-1])

    return dp[n][capacity]


if __name__ == "__main__":
    test_cases = [
        ([1, 3, 4, 5], [1, 4, 5, 7], 7),
        ([2, 3, 4, 5], [3, 4, 5, 6], 5),
        ([1, 2, 3], [6, 10, 12], 5),
    ]
    for weights, values, capacity in test_cases:
        result = knapsack_01(weights, values, capacity)
        print(f"knapsack_01(weights={weights}, values={values}, capacity={capacity}) -> {result}")