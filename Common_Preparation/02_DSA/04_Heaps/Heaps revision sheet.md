# Heaps — Quick Revision Sheet

## 1. Why Heaps Matter in DSA
- A heap gives O(log n) insert/remove while always keeping the
  smallest (or largest) element accessible in O(1)
- Core use cases: "Kth largest/smallest", "Top K" problems, merging
  sorted data, scheduling/priority problems, running median

## 2. Core Operations (refresher)
```python
import heapq

h = []
heapq.heappush(h, 5)
heapq.heappush(h, 1)
heapq.heappush(h, 3)
print(h[0])            # 1 — smallest element always at index 0
print(heapq.heappop(h))  # 1 — removes and returns smallest

arr = [5, 1, 3, 2]
heapq.heapify(arr)        # convert list to heap in-place, O(n)
print(arr[0])                # smallest element
```
**Important:** Python's `heapq` is a MIN-heap only. For a max-heap,
negate values on the way in and out.
```python
max_h = []
heapq.heappush(max_h, -5)
heapq.heappush(max_h, -1)
heapq.heappush(max_h, -3)
print(-heapq.heappop(max_h))   # 5 — largest value
```

## 3. Pattern 1 — Kth Largest / Smallest Element
Use a heap of size K to avoid sorting the whole array.
```python
def kth_largest(arr, k):
    min_heap = []
    for num in arr:
        heapq.heappush(min_heap, num)
        if len(min_heap) > k:
            heapq.heappop(min_heap)   # discard smallest, keep top k
    return min_heap[0]   # kth largest = smallest of the top-k

print(kth_largest([3, 2, 1, 5, 6, 4], 2))   # 5
```
**Key idea:** keep a MIN-heap of size k holding the k largest values
seen so far — its root is the kth largest. O(n log k), better than
sorting (O(n log n)) when k is small.

## 4. Pattern 2 — Top K Frequent Elements
Combine a frequency dict with a heap.
```python
from collections import Counter

def top_k_frequent(arr, k):
    freq = Counter(arr)
    # heap of (frequency, value), keep only top k
    heap = []
    for val, count in freq.items():
        heapq.heappush(heap, (count, val))
        if len(heap) > k:
            heapq.heappop(heap)
    return [val for count, val in heap]

print(top_k_frequent([1,1,1,2,2,3], 2))   # [2, 1] (order may vary)
```
**Key idea:** push `(count, value)` tuples — heap compares by count
first automatically. Same size-k trick as Pattern 1.

## 5. Pattern 3 — Merge K Sorted Lists
Use a heap to always pick the smallest "next" element across lists.
```python
def merge_k_sorted(lists):
    heap = []
    # seed heap with the first element of each list
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst[0], i, 0))   # (value, list_idx, elem_idx)

    result = []
    while heap:
        val, list_idx, elem_idx = heapq.heappop(heap)
        result.append(val)
        if elem_idx + 1 < len(lists[list_idx]):
            next_val = lists[list_idx][elem_idx + 1]
            heapq.heappush(heap, (next_val, list_idx, elem_idx + 1))

    return result

print(merge_k_sorted([[1,4,5],[1,3,4],[2,6]]))   # [1,1,2,3,4,4,5,6]
```
**Key idea:** the `list_idx`/`elem_idx` tiebreakers prevent comparison
errors when values are equal (tuples compare element by element).

## 6. Pattern 4 — Running Median (Two Heaps)
Use a max-heap for the lower half and a min-heap for the upper half.
```python
class MedianFinder:
    def __init__(self):
        self.small = []   # max-heap (negated) for lower half
        self.large = []   # min-heap for upper half

    def add_num(self, num):
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))

    def find_median(self):
        if len(self.small) > len(self.large):
            return -self.small[0]
        return (-self.small[0] + self.large[0]) / 2

mf = MedianFinder()
for n in [5, 15, 1, 3]:
    mf.add_num(n)
print(mf.find_median())   # 4.0
```
**Key idea:** keep both heaps balanced in size (within 1) — the
median is always at the root(s), giving O(log n) insert and O(1)
median lookup.

## 7. Pattern 5 — Scheduling with Cooldown (Task Scheduler style)
Use a max-heap to always process the most frequent task first.
```python
def task_scheduler(tasks, n):
    freq = Counter(tasks)
    max_heap = [-count for count in freq.values()]
    heapq.heapify(max_heap)

    time = 0
    while max_heap:
        cycle = []
        for _ in range(n + 1):
            if max_heap:
                cycle.append(heapq.heappop(max_heap))
        for count in cycle:
            if count + 1 < 0:            # still has remaining instances
                heapq.heappush(max_heap, count + 1)
        time += len(cycle) if not max_heap else n + 1

    return time

print(task_scheduler(['A','A','A','B','B','B'], 2))   # 8
```
**Key idea:** always run the currently most frequent task, using
cooldown slots as idle time if nothing else is ready — this greedy
choice is optimal, and a heap makes "most frequent" O(log n) to find.

## 8. Complexity Quick Check
| Operation | Time |
|---|---|
| Push | O(log n) |
| Pop (min/max) | O(log n) |
| Peek min/max | O(1) |
| Heapify (build from list) | O(n) |
| Kth largest (heap of size k) | O(n log k) |

## 9. Decision Checklist — "Should I use a heap here?"
- Do I need the Kth largest/smallest without fully sorting? → **heap of size k**
- Do I need the top K by frequency or some score? → **heap of (score, value) tuples**
- Am I merging multiple sorted sources? → **heap seeded with one element per source**
- Do I need a running median or balance two halves of data? → **two heaps**
- Am I picking "most/least urgent next" repeatedly (scheduling)? → **max/min-heap**

## Priority Problems to Practice (in this order)
1. Kth Largest Element — most fundamental heap-of-size-k pattern
2. Top K Frequent Elements — same pattern + frequency dict combo
3. Merge K Sorted Lists — multi-source merge pattern
4. Task Scheduler — greedy + max-heap
5. Find Median from a Data Stream — two-heap pattern (hardest, do last)