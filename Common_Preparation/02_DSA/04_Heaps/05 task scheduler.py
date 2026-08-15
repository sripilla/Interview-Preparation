"""
Problem: Task Scheduler
Given a list of tasks and a cooldown period n (same task can't run
again within n intervals), find the minimum total time to finish
all tasks (idle slots count as time too).
e.g. ['A','A','A','B','B','B'], n=2 -> 8

Pattern: Max-heap greedy — always run the currently most frequent
task next; use idle time only when nothing else is ready.
"""

import heapq
from collections import Counter


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
            if count + 1 < 0:            # task still has instances left
                heapq.heappush(max_heap, count + 1)

        # if heap still has tasks, this cycle was a full n+1 slots
        # (including idle time); if heap is empty, only count actual work
        time += len(cycle) if not max_heap else n + 1

    return time


if __name__ == "__main__":
    test_cases = [
        (['A', 'A', 'A', 'B', 'B', 'B'], 2),
        (['A', 'A', 'A', 'B', 'B', 'B'], 0),
        (['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2),
    ]
    for tasks, n in test_cases:
        print(f"task_scheduler({tasks}, n={n}) -> {task_scheduler(tasks, n)}")