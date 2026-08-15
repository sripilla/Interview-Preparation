"""
Problem: Sliding Window Maximum
Given an array and window size k, return the maximum value in
each window of size k as it slides from left to right.
e.g. [1,3,-1,-3,5,3,6,7], k=3 -> [3,3,5,5,6,7]

Pattern: Monotonic deque — front of deque always holds the index
of the current window's maximum.
"""

from collections import deque


def sliding_window_max(arr, k):
    dq = deque()   # stores indices, values kept in decreasing order
    result = []

    for i, num in enumerate(arr):
        while dq and arr[dq[-1]] < num:
            dq.pop()               # remove smaller values from the back
        dq.append(i)

        if dq[0] <= i - k:           # front index is outside the window
            dq.popleft()

        if i >= k - 1:                 # window has reached full size
            result.append(arr[dq[0]])

    return result


if __name__ == "__main__":
    test_cases = [
        ([1, 3, -1, -3, 5, 3, 6, 7], 3),
        ([4, 3, 2, 1], 2),
        ([9], 1),
        ([1, 2, 3, 4, 5], 5),
    ]
    for arr, k in test_cases:
        print(f"sliding_window_max({arr}, k={k}) -> {sliding_window_max(arr, k)}")