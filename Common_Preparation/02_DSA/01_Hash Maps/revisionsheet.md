# Hash Maps — Quick Revision Sheet

## 1. Why Hash Maps Matter in DSA
- O(1) average lookup, insert, delete — trades space for speed
- The #1 tool to convert an O(n²) brute force into O(n)
- Core use cases: frequency counting, lookups, grouping, complement search

## 2. Core Operations (refresher)
```python
d = {}
d["a"] = 1                    # insert/update
print(d.get("a", 0))          # 1  (safe access, no KeyError)
print(d.get("z", 0))          # 0  (default if missing)
print("a" in d)                # True — O(1) check
del d["a"]                       # remove key
```

## 3. Pattern 1 — Frequency Counting
Use when you need to count occurrences of elements.
```python
from collections import Counter, defaultdict

arr = ['a', 'b', 'a', 'c', 'b', 'a']

# Manual way
freq = {}
for x in arr:
    freq[x] = freq.get(x, 0) + 1
print(freq)   # {'a': 3, 'b': 2, 'c': 1}

# Counter way (faster to write)
freq2 = Counter(arr)
print(freq2)                   # Counter({'a': 3, 'b': 2, 'c': 1})
print(freq2.most_common(2))     # [('a', 3), ('b', 2)]
```
**Used in:** first unique char, anagram check, top-K frequent elements

## 4. Pattern 2 — Complement / Two-Sum Style Lookup
Use when you need to find a pair/element satisfying `target - x`.
```python
def two_sum(arr, target):
    seen = {}   # value -> index
    for i, num in enumerate(arr):
        complement = target - num
        if complement in seen:
            return (seen[complement], i)
        seen[num] = i
    return None

print(two_sum([2, 7, 11, 15], 9))   # (0, 1)
```
**Key idea:** single pass, O(n) — build the map WHILE scanning, don't pre-build then search.

## 5. Pattern 3 — Grouping / Bucketing
Use when you need to cluster items by some derived key.
```python
from collections import defaultdict

def group_anagrams(words):
    groups = defaultdict(list)
    for word in words:
        key = "".join(sorted(word))   # sorted letters = anagram signature
        groups[key].append(word)
    return dict(groups)

print(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
# {'aet': ['eat', 'tea', 'ate'], 'ant': ['tan', 'nat'], 'abt': ['bat']}
```
**Used in:** group anagrams, group words by first letter, categorize by property

## 6. Pattern 4 — Set for Existence / Uniqueness
Use `set` (not dict) when you only care about presence, not counts.
```python
def longest_consecutive(nums):
    num_set = set(nums)
    longest = 0
    for num in num_set:
        if num - 1 not in num_set:   # only start counting from sequence start
            length = 1
            while num + length in num_set:
                length += 1
            longest = max(longest, length)
    return longest

print(longest_consecutive([100, 4, 200, 1, 3, 2]))   # 4  (1,2,3,4)
```
**Key idea:** checking `num - 1 not in num_set` avoids redundant work — O(n) overall.

## 7. Pattern 5 — Prefix Sum + Hash Map
Use for subarray sum problems.
```python
def subarray_sum_equals_k(arr, k):
    count = 0
    prefix_sum = 0
    seen = {0: 1}   # prefix_sum : how many times seen (0 sum seen once, empty prefix)

    for num in arr:
        prefix_sum += num
        if (prefix_sum - k) in seen:
            count += seen[prefix_sum - k]
        seen[prefix_sum] = seen.get(prefix_sum, 0) + 1

    return count

print(subarray_sum_equals_k([1, 1, 1], 2))   # 2
```
**Key idea:** if `prefix_sum - k` was seen before, the subarray between those points sums to k.

## 8. `defaultdict` vs regular `dict`
```python
from collections import defaultdict

d = defaultdict(int)     # default value 0 for missing keys
d['x'] += 1                # no KeyError even though 'x' didn't exist
print(d['x'])                # 1

d2 = defaultdict(list)     # default value [] for missing keys
d2['a'].append(1)            # works directly, no need to check existence first
print(d2['a'])                # [1]
```
**Use `defaultdict`** whenever you're grouping/counting — saves the `if key not in d` check.

## 9. Complexity Quick Check
| Operation | Dict/Set | List |
|---|---|---|
| Lookup (`in`) | O(1) avg | O(n) |
| Insert | O(1) avg | O(1) end, O(n) middle |
| Delete | O(1) avg | O(n) |

## 10. Decision Checklist — "Should I use a hash map here?"
- Do I need to check "have I seen this before"? → **set**
- Do I need to count occurrences? → **dict / Counter**
- Do I need to find a complement (`target - x`)? → **dict, single pass**
- Do I need to group items by a derived key? → **defaultdict(list)**
- Do I need a running sum lookup (subarrays)? → **prefix sum + dict**

## Priority Problems to Practice (in this order)
1. Two Sum — complement pattern (most fundamental)
2. Group Anagrams — bucketing pattern
3. First Unique Character — frequency pattern
4. Longest Consecutive Sequence — set-based O(n) trick
5. Subarray Sum Equals K — prefix sum pattern (hardest, do last)