"""
Problem: Check if a list is sorted using recursion.
"""

def is_sorted(arr):
    if len(arr) <= 1:            # base case: 0 or 1 element is always sorted
        return True
    if arr[0] > arr[1]:            # adjacent pair out of order
        return False
    return is_sorted(arr[1:])       # recursive case: check rest of list


if __name__ == "__main__":
    test_cases = [
        [1, 2, 3, 4, 5],
        [5, 3, 1, 2],
        [1],
        [],
        [1, 1, 2, 2, 3],
    ]
    for arr in test_cases:
        print(f"is_sorted({arr}) -> {is_sorted(arr)}")