"""
Problem: Top K Frequent Elements
Given an array, return the k most frequent elements.
e.g. [1,1,1,2,2,3], k=2 -> [1,2]  (order may vary)

Pattern: Frequency dict + heap of size k, keyed on (count, value)
so the heap naturally orders by frequency.
"""

import heapq
from collections import Counter


def top_k_frequent(arr, k):
    freq = Counter(arr)
    heap = []
    for val, count in freq.items():
        heapq.heappush(heap, (count, val))
        if len(heap) > k:
            heapq.heappop(heap)   # discard least frequent, keep top k
    return [val for count, val in heap]


if __name__ == "__main__":
    test_cases = [
        ([1, 1, 1, 2, 2, 3], 2),
        ([4, 4, 4, 6, 6, 7, 7, 7, 7], 1),
        ([1, 2, 3], 3),
    ]
    for arr, k in test_cases:
        print(f"top_k_frequent({arr}, k={k}) -> {sorted(top_k_frequent(arr, k))}")