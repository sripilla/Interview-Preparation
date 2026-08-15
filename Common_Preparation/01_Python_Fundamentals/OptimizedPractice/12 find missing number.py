"""
Problem: Find the missing number from 1 to N in a list — math +
list logic (use sum formula: n*(n+1)//2).
"""

def find_missing_number(arr, n):
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(arr)
    return expected_sum - actual_sum


if __name__ == "__main__":
    test_cases = [
        ([1, 2, 4, 5], 5),        # missing 3
        ([2, 3, 4, 5], 5),        # missing 1
        ([1, 2, 3, 4], 5),        # missing 5
    ]
    for arr, n in test_cases:
        print(f"find_missing_number({arr}, n={n}) -> {find_missing_number(arr, n)}")