"""
Problem: Subarray Sum Equals K
Given an array of integers and a target k, count the number of
contiguous subarrays that sum to exactly k.
e.g. [1, 1, 1], k=2 -> 2   (subarrays [1,1] at index 0-1 and 1-2)

Pattern: Prefix sum + hash map. If (prefix_sum - k) has been seen
before, the subarray between that point and now sums to k.
"""

def subarray_sum_equals_k(arr, k):
    count = 0
    prefix_sum = 0
    seen = {0: 1}   # prefix_sum : frequency (0 sum seen once by default)

    for num in arr:
        prefix_sum += num
        if (prefix_sum - k) in seen:
            count += seen[prefix_sum - k]
        seen[prefix_sum] = seen.get(prefix_sum, 0) + 1

    return count


if __name__ == "__main__":
    test_cases = [
        ([1, 1, 1], 2),
        ([1, 2, 3], 3),
        ([1, -1, 0], 0),
        ([3, 4, 7, 2, -3, 1, 4, 2], 7),
    ]
    for arr, k in test_cases:
        print(f"subarray_sum_equals_k({arr}, k={k}) -> {subarray_sum_equals_k(arr, k)}")