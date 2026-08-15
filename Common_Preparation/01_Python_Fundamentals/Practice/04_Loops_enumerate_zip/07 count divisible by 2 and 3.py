"""
Problem: Count how many numbers in a list are divisible by both
2 and 3.
"""

def count_divisible_by_2_and_3(arr):
    count = 0
    for num in arr:
        if num % 2 == 0 and num % 3 == 0:
            count += 1
    return count


if __name__ == "__main__":
    test_cases = [
        [6, 12, 5, 18, 7, 9, 24],
        [1, 2, 3, 4, 5],
        [6, 12, 18, 24],
    ]
    for arr in test_cases:
        print(f"count_divisible_by_2_and_3({arr}) -> {count_divisible_by_2_and_3(arr)}")