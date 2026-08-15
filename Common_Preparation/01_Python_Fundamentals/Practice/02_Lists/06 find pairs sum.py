"""
Problem: Find all pairs in a list that sum to a target value
(brute force, no hashmap yet).
"""

def find_pairs(arr, target):
    pairs = []
    n = len(arr)
    for i in range(n):
        for j in range(i + 1, n):
            if arr[i] + arr[j] == target:
                pairs.append((arr[i], arr[j]))
    return pairs


if __name__ == "__main__":
    test_cases = [
        ([1, 2, 3, 4, 5], 6),
        ([2, 4, 3, 5, 7, 8], 10),
        ([1, 1, 1], 2),
    ]
    for arr, target in test_cases:
        print(f"find_pairs({arr}, target={target}) -> {find_pairs(arr, target)}")