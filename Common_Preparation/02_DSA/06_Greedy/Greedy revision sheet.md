# Greedy Algorithms — Quick Revision Sheet

## 1. Why Greedy Matters in DSA
- Greedy makes the locally optimal choice at each step, hoping it leads
  to a globally optimal solution — no backtracking, no trying all options
- Much faster than DP (usually O(n log n) from sorting) when it applies
- Core signal: the problem can be solved by **sorting first**, then
  making one pass with a simple local decision at each step

## 2. Greedy vs DP — How to Tell Them Apart
This is the #1 trap in assessments. Ask yourself:
- **Can a locally best choice ever become wrong later?** If yes → DP
  (you need to explore multiple options and keep the best).
  If no — the locally best choice is always safe → **Greedy**.
- Example: House Robber (DP) — taking the biggest house now might
  block a better combination later, so you must consider both
  take/skip. Activity Selection (Greedy) — picking the activity that
  ends earliest is ALWAYS safe, it never blocks a better solution.
- **If you're unsure, DP is the safer default** — it never gives a
  wrong answer, just potentially more time/space than needed. Only
  use greedy if you can convince yourself the local choice is provably
  safe.

## 3. Pattern 1 — Activity Selection / Non-overlapping Intervals
Sort by END time, greedily pick the earliest-ending activity that
doesn't conflict with the last one picked.
```python
def max_non_overlapping_intervals(intervals):
    if not intervals:
        return 0

    intervals.sort(key=lambda x: x[1])   # sort by end time
    count = 1
    last_end = intervals[0][1]

    for start, end in intervals[1:]:
        if start >= last_end:   # no overlap with the last picked interval
            count += 1
            last_end = end

    return count

print(max_non_overlapping_intervals([(1,3),(2,4),(3,5),(6,8)]))   # 3
```
**Key idea:** ending earliest leaves the most room for future
activities — this is always the safe choice, which is why sorting by
end time (not start time) is the correct greedy strategy.

## 4. Pattern 2 — Minimum Platforms / Meeting Rooms
Sort arrivals and departures separately, sweep through with two
pointers to track overlap count.
```python
def min_platforms(arrivals, departures):
    arrivals = sorted(arrivals)
    departures = sorted(departures)

    platforms_needed = 0
    max_platforms = 0
    i = j = 0

    while i < len(arrivals):
        if arrivals[i] <= departures[j]:
            platforms_needed += 1
            max_platforms = max(max_platforms, platforms_needed)
            i += 1
        else:
            platforms_needed -= 1
            j += 1

    return max_platforms

print(min_platforms([900, 940, 950, 1100, 1500, 1800],
                     [910, 1200, 1120, 1130, 1900, 2000]))   # 3
```
**Key idea:** this is really "max overlapping intervals at any point
in time" — sorting arrivals/departures independently and sweeping
tracks the overlap count without needing to check every pair.

## 5. Pattern 3 — Fractional Knapsack
Sort by value/weight ratio, greedily take as much of the best
ratio items as possible.
```python
def fractional_knapsack(weights, values, capacity):
    items = sorted(zip(values, weights), key=lambda x: x[0] / x[1], reverse=True)

    total_value = 0.0
    for value, weight in items:
        if capacity >= weight:
            total_value += value
            capacity -= weight
        else:
            total_value += value * (capacity / weight)   # take a fraction
            break

    return total_value

print(fractional_knapsack([10, 20, 30], [60, 100, 120], 50))   # 240.0
```
**Key idea:** unlike 0/1 Knapsack (DP, must take whole items),
fractional knapsack ALLOWS partial items — this is exactly what
makes greedy valid here: always take the best ratio first, and
partial credit means no combination can beat "highest ratio first".

## 6. Pattern 4 — Jump Game (Reachability)
Track the farthest index reachable so far — greedily extend
reach with every step.
```python
def can_jump(nums):
    farthest = 0
    for i, num in enumerate(nums):
        if i > farthest:   # current position is unreachable
            return False
        farthest = max(farthest, i + num)
    return True

print(can_jump([2, 3, 1, 1, 4]))   # True
print(can_jump([3, 2, 1, 0, 4]))   # False
```
**Key idea:** you don't need to know the exact path — just whether
the farthest reachable point ever falls behind your current
position. One pass, O(n).

## 7. Pattern 5 — Gas Station (Circular Feasibility)
Track running balance; reset start point whenever balance goes
negative.
```python
def can_complete_circuit(gas, cost):
    total_balance = 0
    running_balance = 0
    start = 0

    for i in range(len(gas)):
        diff = gas[i] - cost[i]
        total_balance += diff
        running_balance += diff

        if running_balance < 0:
            start = i + 1        # can't start from here or earlier
            running_balance = 0

    return start if total_balance >= 0 else -1

print(can_complete_circuit([1,2,3,4,5], [3,4,5,1,2]))   # 3
```
**Key idea:** if total gas >= total cost, a valid start MUST exist.
Whenever running balance drops below 0, no station up to this point
could have been a valid start — so jump the candidate start forward.

## 8. Complexity Quick Check
| Pattern | Time | Why |
|---|---|---|
| Activity Selection | O(n log n) | dominated by the sort |
| Min Platforms | O(n log n) | two sorts + one sweep |
| Fractional Knapsack | O(n log n) | sort by ratio |
| Jump Game | O(n) | single pass, no sort needed |
| Gas Station | O(n) | single pass, no sort needed |

## 9. Decision Checklist — "Should I use Greedy here?"
- Can I prove the locally best choice never blocks a better global
  solution? → **Greedy is safe**
- Does the problem allow "take a fraction" of something? → **strong
  greedy signal** (fractional knapsack)
- Do I need to try multiple combinations and keep the best? → **DP,
  not greedy**
- Does sorting by some key (end time, ratio, etc.) simplify the
  problem to one pass? → **likely greedy**

## Priority Problems to Practice (in this order)
1. Activity Selection / Non-overlapping Intervals — clearest, most
   fundamental greedy pattern
2. Jump Game — simple reachability tracking, good warm-up
3. Gas Station — circular feasibility, moderate difficulty
4. Fractional Knapsack — direct contrast with 0/1 Knapsack (DP)
5. Minimum Platforms — two-pointer sweep, do last (slightly fiddly)