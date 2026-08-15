"""
Problem: Find sum of digits of a number using a while loop.
"""

def sum_of_digits(n):
    n = abs(n)   # handle negative numbers
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    return total


if __name__ == "__main__":
    test_cases = [12345, 999, 0, 7]
    for n in test_cases:
        print(f"sum_of_digits({n}) -> {sum_of_digits(n)}")