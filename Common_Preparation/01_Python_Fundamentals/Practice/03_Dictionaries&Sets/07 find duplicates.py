"""
Problem: Find duplicate elements in a list using a set.
"""

def find_duplicates(arr):
    seen = set()
    duplicates = set()
    for num in arr:
        if num in seen:
            duplicates.add(num)
        else:
            seen.add(num)
    return list(duplicates)


if __name__ == "__main__":
    test_cases = [
        [1, 2, 3, 2, 4, 5, 1],
        [1, 1, 1, 1],
        [1, 2, 3, 4],
    ]
    for arr in test_cases:
        print(f"find_duplicates({arr}) -> {find_duplicates(arr)}")