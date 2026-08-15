"""
Problem: Write factorial using recursion.
"""

def factorial(n):
    if n <= 1:            # base case
        return 1
    return n * factorial(n - 1)   # recursive case


if __name__ == "__main__":
    test_cases = [0, 1, 5, 7, 10]
    for n in test_cases:
        print(f"factorial({n}) -> {factorial(n)}")