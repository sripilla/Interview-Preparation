"""
Problem: Merge K Sorted Lists
Given k sorted lists, merge them into one sorted list.
e.g. [[1,4,5],[1,3,4],[2,6]] -> [1,1,2,3,4,4,5,6]

Pattern: Seed a heap with the first element of each list. Always
pop the smallest, then push that list's next element.
"""

import heapq


def merge_k_sorted(lists):
    heap = []
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


if __name__ == "__main__":
    test_cases = [
        [[1, 4, 5], [1, 3, 4], [2, 6]],
        [[1, 2, 3], [4, 5, 6]],
        [[], [1, 2], []],
        [[5], [1], [3]],
    ]
    for lists in test_cases:
        print(f"merge_k_sorted({lists}) -> {merge_k_sorted(lists)}")