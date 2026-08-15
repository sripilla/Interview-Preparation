"""
Problem: Sum of a list using recursion (no loops).
"""

def sum_list(arr):
    if not arr:            # base case: empty list
        return 0
    return arr[0] + sum_list(arr[1:])   # recursive case


if __name__ == "__main__":
    test_cases = [
        [1, 2, 3, 4, 5],
        [10, 20, 30],
        [],
        [7],
    ]
    for arr in test_cases:
        print(f"sum_list({arr}) -> {sum_list(arr)}")