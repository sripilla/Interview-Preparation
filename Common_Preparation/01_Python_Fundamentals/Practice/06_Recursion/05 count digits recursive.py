"""
Problem: Count number of digits in a number using recursion.
"""

def count_digits(n):
    n = abs(n)          # handle negative numbers
    if n < 10:            # base case: single digit
        return 1
    return 1 + count_digits(n // 10)   # recursive case


if __name__ == "__main__":
    test_cases = [12345, 7, 0, -9876, 100000]
    for n in test_cases:
        print(f"count_digits({n}) -> {count_digits(n)}")