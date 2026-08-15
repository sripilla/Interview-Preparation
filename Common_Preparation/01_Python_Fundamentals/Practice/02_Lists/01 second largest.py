"""
Problem: Find the second largest number in a list (no sorting allowed).
"""

def second_largest(arr):
    if len(arr) < 2:
        return None

    largest = second = float("-inf")
    for num in arr:
        if num > largest:
            second = largest
            largest = num
        elif num > second and num != largest:
            second = num

    return second if second != float("-inf") else None


if __name__ == "__main__":
    test_cases = [
        [4, 2, 7, 1, 9, 5],
        [10, 10, 10],
        [5, 1],
        [3, 3, 4, 4, 2],
    ]
    for arr in test_cases:
        print(f"second_largest({arr}) -> {second_largest(arr)}")