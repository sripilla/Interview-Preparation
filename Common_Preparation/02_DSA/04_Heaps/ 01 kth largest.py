"""
Problem: Kth Largest Element
Given an array of integers, find the kth largest element.
e.g. [3,2,1,5,6,4], k=2 -> 5

Pattern: Maintain a min-heap of size k. The root of that heap is
always the kth largest element seen so far.
"""

import heapq


def kth_largest(arr, k):
    min_heap = []
    for num in arr:
        heapq.heappush(min_heap, num)
        if len(min_heap) > k:
            heapq.heappop(min_heap)   # discard smallest, keep top k
    return min_heap[0]


if __name__ == "__main__":
    test_cases = [
        ([3, 2, 1, 5, 6, 4], 2),
        ([3, 2, 3, 1, 2, 4, 5, 5, 6], 4),
        ([1], 1),
        ([7, 10, 4, 3, 20, 15], 3),
    ]
    for arr, k in test_cases:
        print(f"kth_largest({arr}, k={k}) -> {kth_largest(arr, k)}")