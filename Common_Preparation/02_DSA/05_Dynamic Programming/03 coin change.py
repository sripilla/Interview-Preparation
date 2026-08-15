"""
Problem: Coin Change
Given coin denominations and a target amount, find the minimum
number of coins needed to make that amount. Return -1 if
impossible.
e.g. coins=[1,2,5], amount=11 -> 3   (5+5+1)

Pattern: Unbounded DP — each coin can be reused unlimited times.
Loop coin in the OUTER loop, amount in the INNER loop.
"""

def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0   # base case: 0 coins needed to make amount 0

    for coin in coins:
        for amt in range(coin, amount + 1):
            dp[amt] = min(dp[amt], dp[amt - coin] + 1)

    return dp[amount] if dp[amount] != float('inf') else -1


if __name__ == "__main__":
    test_cases = [
        ([1, 2, 5], 11),
        ([2], 3),           # impossible -> -1
        ([1], 0),
        ([1, 3, 4], 6),
    ]
    for coins, amount in test_cases:
        print(f"coin_change({coins}, amount={amount}) -> {coin_change(coins, amount)}")