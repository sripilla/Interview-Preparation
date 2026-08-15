# Queues — Quick Revision Sheet

## 1. Why Queues Matter in DSA
- FIFO (First In, First Out) — the first element added is the first removed
- Core use cases: BFS traversal (graphs/trees/grids), processing things in
  arrival order, sliding window problems, simulating "waves" of work

## 2. Core Operations (refresher)
```python
from collections import deque

q = deque()
q.append(x)         # enqueue — add to the right
q.popleft()           # dequeue — remove from the left (FIFO)
q.appendleft(x)         # push to front (used for some variations)
q[0]                      # peek at front
len(q) == 0                 # check if empty
```
**Important:** never use a plain list as a queue with `list.pop(0)` —
that's O(n) per removal. `deque` gives O(1) on both ends.

## 3. Pattern 1 — Implement Queue Using Two Stacks
Use to understand queue mechanics from first principles (common
interview/assessment question).
```python
class QueueUsingStacks:
    def __init__(self):
        self.in_stack = []
        self.out_stack = []

    def enqueue(self, x):
        self.in_stack.append(x)

    def dequeue(self):
        if not self.out_stack:
            while self.in_stack:
                self.out_stack.append(self.in_stack.pop())
        return self.out_stack.pop()

q = QueueUsingStacks()
q.enqueue(1); q.enqueue(2); q.enqueue(3)
print(q.dequeue())   # 1
print(q.dequeue())   # 2
```
**Key idea:** reversing onto a second stack flips LIFO into FIFO order.
Only transfer elements when `out_stack` is empty — this keeps it
amortized O(1) per operation.

## 4. Pattern 2 — Sliding Window Maximum (Monotonic Deque)
Use to track the max (or min) inside a moving window efficiently.
```python
def sliding_window_max(arr, k):
    dq = deque()   # stores indices, values kept in decreasing order
    result = []

    for i, num in enumerate(arr):
        while dq and arr[dq[-1]] < num:
            dq.pop()               # remove smaller values from the back
        dq.append(i)

        if dq[0] <= i - k:           # front is out of window
            dq.popleft()

        if i >= k - 1:                 # window fully formed
            result.append(arr[dq[0]])

    return result

print(sliding_window_max([1,3,-1,-3,5,3,6,7], 3))   # [3, 3, 5, 5, 6, 7]
```
**Key idea:** the deque holds indices in decreasing value order — the
front is always the current window's max. Each index is pushed/popped
at most once -> O(n) overall.

## 5. Pattern 3 — Frequency + Queue for "First Non-Repeating in Stream"
Use when uniqueness must be checked as data arrives one at a time.
```python
def first_non_repeating_stream(stream):
    freq = {}
    q = deque()
    result = []

    for ch in stream:
        freq[ch] = freq.get(ch, 0) + 1
        q.append(ch)

        while q and freq[q[0]] > 1:   # drop repeated chars from front
            q.popleft()

        result.append(q[0] if q else -1)

    return result

print(first_non_repeating_stream("aabc"))   # ['a', -1, 'b', 'b']
```
**Key idea:** the queue holds candidates for "first unique so far" in
arrival order; anything that becomes repeated gets popped from the front.

## 6. Pattern 4 — BFS Using a Queue (Rotting Oranges style)
Use for shortest-path / "spread level by level" problems on
grids or graphs.
```python
def rotting_oranges(grid):
    rows, cols = len(grid), len(grid[0])
    q = deque()
    fresh = 0

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 2:
                q.append((r, c, 0))   # (row, col, minute)
            elif grid[r][c] == 1:
                fresh += 1

    minutes = 0
    directions = [(-1,0),(1,0),(0,-1),(0,1)]

    while q:
        r, c, minute = q.popleft()
        minutes = max(minutes, minute)
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                grid[nr][nc] = 2
                fresh -= 1
                q.append((nr, nc, minute + 1))

    return minutes if fresh == 0 else -1

print(rotting_oranges([[2,1,1],[1,1,0],[0,1,1]]))   # 4
```
**Key idea:** BFS processes all cells at distance d before any cell at
distance d+1 — a queue naturally preserves this "wave" order, which is
why BFS always uses a queue (never a stack).

## 7. Pattern 5 — Generate Sequences Using a Queue
Use to build up sequences level by level (e.g. binary numbers).
```python
def generate_binary_numbers(n):
    result = []
    q = deque()
    q.append("1")

    for _ in range(n):
        front = q.popleft()
        result.append(front)
        q.append(front + "0")
        q.append(front + "1")

    return result

print(generate_binary_numbers(5))   # ['1','10','11','100','101']
```
**Key idea:** each dequeued item generates two new items — queue order
guarantees numbers come out in increasing order without needing to sort.

## 8. Complexity Quick Check
| Operation | deque | list (avoid!) |
|---|---|---|
| Enqueue (append right) | O(1) | O(1) |
| Dequeue (pop left) | O(1) | O(n) |
| Peek front/back | O(1) | O(1) |

## 9. Decision Checklist — "Should I use a queue here?"
- Am I doing BFS (graph, tree, or grid)? → **queue, always**
- Do I need max/min in a moving window? → **monotonic deque**
- Do I need "first unique so far" while streaming data? → **queue + frequency dict**
- Am I processing things strictly in arrival order? → **basic queue**
- Am I generating sequences level-by-level? → **queue-based generation**

## Priority Problems to Practice (in this order)
1. Implement Queue Using Two Stacks — mechanics fundamentals
2. Rotting Oranges (BFS) — most common queue pattern in assessments
3. Sliding Window Maximum — monotonic deque, moderately hard
4. First Non-Repeating Character in a Stream — queue + hash map combo
5. Generate Binary Numbers from 1 to N — quick, level-by-level generation