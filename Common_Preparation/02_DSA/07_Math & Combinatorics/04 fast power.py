"""
Problem: Power(x, n) using Fast Exponentiation
Compute x^n efficiently in O(log n) instead of O(n).

Pattern: Binary exponentiation — repeatedly square the base and
halve the exponent, multiplying into the result only when the
current exponent bit is 1.
"""

def power(base, exponent):
    result = 1
    while exponent > 0:
        if exponent % 2 == 1:      # exponent is odd -> include this base power
            result *= base
        base *= base                  # square the base
        exponent //= 2                  # halve the exponent

    return result


if __name__ == "__main__":
    test_cases = [(2, 10), (3, 5), (5, 0), (7, 1), (2, 20)]
    for base, exp in test_cases:
        print(f"power({base}, {exp}) -> {power(base, exp)}")