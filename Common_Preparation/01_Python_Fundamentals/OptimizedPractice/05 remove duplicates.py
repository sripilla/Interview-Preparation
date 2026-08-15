"""
Problem: Remove duplicates from a list while preserving order.
"""

def remove_duplicates(arr):
    seen = set()
    result = []
    for num in arr:
        if num not in seen:
            seen.add(num)
            result.append(num)
    return result


if __name__ == "__main__":
    test_cases = [
        [1, 2, 2, 3, 1, 4, 5, 3],
        [5, 5, 5, 5],
        [1, 2, 3],
    ]
    for arr in test_cases:
        print(f"remove_duplicates({arr}) -> {remove_duplicates(arr)}")