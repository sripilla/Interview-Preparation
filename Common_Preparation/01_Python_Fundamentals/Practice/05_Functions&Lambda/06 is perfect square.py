"""
Problem: Write a function that returns True/False for whether a
number is a perfect square.
"""

def is_perfect_square(n):
    if n < 0:
        return False
    root = int(n ** 0.5)
    # check root and root+1 to avoid floating point rounding errors
    return root * root == n or (root + 1) * (root + 1) == n


if __name__ == "__main__":
    test_cases = [16, 15, 1, 0, 25, 26, 100]
    for n in test_cases:
        print(f"is_perfect_square({n}) -> {is_perfect_square(n)}")