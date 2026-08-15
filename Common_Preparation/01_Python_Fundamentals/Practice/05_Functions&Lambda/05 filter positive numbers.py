"""
Problem: Use filter() to get only positive numbers from a mixed list.
"""

def get_positive_numbers(arr):
    return list(filter(lambda x: x > 0, arr))


if __name__ == "__main__":
    test_cases = [
        [-3, 5, -1, 0, 8, -7, 2],
        [1, 2, 3],
        [-1, -2, -3],
    ]
    for arr in test_cases:
        print(f"get_positive_numbers({arr}) -> {get_positive_numbers(arr)}")