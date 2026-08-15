"""
Problem: Two Sum
Given an array of integers and a target, return the indices of
the two numbers that add up to the target.

Pattern: Complement lookup using a hash map (single pass, O(n)).
"""

def two_sum(arr, target):
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
        ([3, 3], 6),
        ([1, 2, 3], 100),   # no pair exists
    ]
    for arr, target in test_cases:
        print(f"two_sum({arr}, target={target}) -> {two_sum(arr, target)}")