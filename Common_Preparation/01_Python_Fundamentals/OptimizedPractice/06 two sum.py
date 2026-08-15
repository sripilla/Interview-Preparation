"""
Problem: Two Sum (brute force): find a pair in a list that sums to
a target — classic pattern, do it both with nested loop AND with a
dict (see the speed difference).
"""

import time
import random


def two_sum_brute_force(arr, target):
    n = len(arr)
    for i in range(n):
        for j in range(i + 1, n):
            if arr[i] + arr[j] == target:
                return (i, j)
    return None


def two_sum_dict(arr, target):
    seen = {}   # value -> index
    for i, num in enumerate(arr):
        complement = target - num
        if complement in seen:
            return (seen[complement], i)
        seen[num] = i
    return None


if __name__ == "__main__":
    test_cases = [
        ([2, 7, 11, 15], 9),
        ([3, 2, 4], 6),
        ([1, 2, 3], 100),   # no pair exists
    ]
    for arr, target in test_cases:
        print(f"two_sum_brute_force({arr}, target={target}) -> {two_sum_brute_force(arr, target)}")
        print(f"two_sum_dict({arr}, target={target})         -> {two_sum_dict(arr, target)}")
        print()

    # Speed comparison on a larger list
    print("--- Speed comparison on 5000 elements ---")
    big_arr = list(range(5000))
    random.shuffle(big_arr)
    target = big_arr[-1] + big_arr[-2]   # guarantee a match near the end

    start = time.time()
    two_sum_brute_force(big_arr, target)
    brute_time = time.time() - start

    start = time.time()
    two_sum_dict(big_arr, target)
    dict_time = time.time() - start

    print(f"brute force (O(n^2)): {brute_time:.4f}s")
    print(f"dict approach (O(n)):  {dict_time:.6f}s")
    print("Observation: brute force checks every pair (n^2 comparisons).")
    print("The dict approach does a single pass, trading space for speed —")
    print("this is the pattern to default to whenever a lookup is needed.")