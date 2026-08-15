"""
Problem: Write a recursive function to compute power(base, exponent).
"""

def power(base, exponent):
    if exponent == 0:            # base case
        return 1
    return base * power(base, exponent - 1)   # recursive case


if __name__ == "__main__":
    test_cases = [(2, 10), (5, 0), (3, 4), (7, 1)]
    for base, exp in test_cases:
        print(f"power({base}, {exp}) -> {power(base, exp)}")