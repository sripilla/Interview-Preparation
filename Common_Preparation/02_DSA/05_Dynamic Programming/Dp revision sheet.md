# Dynamic Programming — Quick Revision Sheet

## 1. Why DP Matters in DSA
- DP solves problems by breaking them into overlapping subproblems and
  storing (caching) results so you never recompute the same thing twice
- Turns exponential brute-force recursion (O(2^n)) into polynomial time
- Core signal that a problem is DP: "count the number of ways", "find
  min/max cost/value", and the problem has **overlapping subproblems**
  + **optimal substructure** (optimal answer built from optimal sub-answers)

## 2. Two Ways to Write DP

### Top-down (memoization) — start from recursion, add caching
```python
from functools import lru_cache

@lru_cache(maxsize=None)
def solve(n):
    if n <= 1:              # base case
        return n
    return solve(n-1) + solve(n-2)   # recursive case, cached automatically
```

### Bottom-up (tabulation) — build the answer iteratively
```python
def solve(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
```
**Rule of thumb:** top-down is easier to write first (just add
`@lru_cache` to plain recursion). Bottom-up avoids recursion depth
limits and is usually what's expected in an assessment.

## 3. Pattern 1 — 1D DP (Climbing Stairs style)
State depends on a fixed number of previous states.
```python
def climb_stairs(n):
    if n <= 2:
        return n
    dp = [0] * (n + 1)
    dp[1], dp[2] = 1, 2
    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]   # arrive via 1-step or 2-step
    return dp[n]

print(climb_stairs(5))   # 8
```
**Key idea:** `dp[i]` depends only on `dp[i-1]` and `dp[i-2]` — this
"look back a fixed amount" shape is the simplest DP pattern.

## 4. Pattern 2 — 1D DP with Skip Constraint (House Robber style)
Choose to include or exclude each element, can't take adjacent ones.
```python
def house_robber(nums):
    if not nums:
        return 0
    dp = [0] * len(nums)
    dp[0] = nums[0]
    for i in range(1, len(nums)):
        take = nums[i] + (dp[i-2] if i >= 2 else 0)
        skip = dp[i-1]
        dp[i] = max(take, skip)
    return dp[-1]

print(house_robber([2, 7, 9, 3, 1]))   # 12
```
**Key idea:** at each step choose `max(take current + best 2 back,
skip current = best 1 back)` — this take/skip choice pattern shows up
constantly in DP.

## 5. Pattern 3 — 2D DP (Knapsack style)
State depends on two changing dimensions (item index + capacity).
```python
def knapsack_01(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(capacity + 1):
            dp[i][w] = dp[i-1][w]   # don't take item i-1
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w], dp[i-1][w - weights[i-1]] + values[i-1])

    return dp[n][capacity]

print(knapsack_01([1, 3, 4, 5], [1, 4, 5, 7], 7))   # 9
```
**Key idea:** `dp[i][w]` = best value using first i items within
weight w. Always compare "skip item" vs "take item" (if it fits).

## 6. Pattern 4 — 2D DP on Strings (LCS style)
State depends on positions in two strings.
```python
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

print(longest_common_subsequence("abcde", "ace"))   # 3
```
**Key idea:** if characters match, extend the diagonal; otherwise
carry forward the best of skipping a character from either string.
**Used in:** LCS, Edit Distance, Longest Common Substring

## 7. Pattern 5 — Unbounded Choice (Coin Change style)
Same item can be reused unlimited times (unlike knapsack).
```python
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0

    for coin in coins:
        for amt in range(coin, amount + 1):
            dp[amt] = min(dp[amt], dp[amt - coin] + 1)

    return dp[amount] if dp[amount] != float('inf') else -1

print(coin_change([1, 2, 5], 11))   # 3   (5+5+1)
```
**Key idea:** looping `coin` in the OUTER loop and `amount` in the
INNER loop allows reusing the same coin multiple times — this is
what makes it "unbounded" instead of 0/1.

## 8. How to Recognize Which DP Pattern Fits
| Signal in the problem | Likely pattern |
|---|---|
| "ways to climb/reach position i" | 1D DP, look back fixed steps |
| "can't pick adjacent items" | 1D DP with take/skip |
| "N items, weight/capacity limit, pick each once" | 2D Knapsack |
| "compare two strings/sequences" | 2D DP on strings |
| "unlimited reuse of items (coins, cuts)" | Unbounded DP |

## 9. Complexity Quick Check
| Pattern | Time | Space |
|---|---|---|
| 1D DP | O(n) | O(n) (often reducible to O(1)) |
| 2D Knapsack | O(n × capacity) | O(n × capacity) |
| 2D String DP | O(m × n) | O(m × n) |
| Unbounded (coin change) | O(amount × coins) | O(amount) |

## 10. Common Mistakes to Avoid
- Forgetting the base case(s) — always define `dp[0]` (and `dp[1]` if needed) explicitly
- Off-by-one errors in loop ranges — DP tables are often sized `n+1` to include index 0
- Confusing 0/1 knapsack (loop item outer, can't reuse) with unbounded (loop item outer, amount inner, CAN reuse)
- Not initializing "impossible" states properly (e.g. `float('inf')` for min-cost problems, so an unreachable state never wins a `min()` comparison)

## Priority Problems to Practice (in this order)
1. Climbing Stairs — simplest 1D DP, warm-up
2. House Robber — 1D DP with take/skip decision
3. Coin Change — unbounded DP, very common in assessments
4. 0/1 Knapsack — 2D DP, foundational for many variants
5. Longest Common Subsequence — 2D DP on strings, do last (most complex)