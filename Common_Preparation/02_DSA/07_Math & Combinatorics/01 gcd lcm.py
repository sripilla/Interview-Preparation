"""
Problem: GCD and LCM of two numbers
Compute the greatest common divisor and least common multiple.

Pattern: Euclidean algorithm for GCD; LCM derived from GCD using
lcm(a,b) = a*b / gcd(a,b).
"""

def gcd(a, b):
    a, b = abs(a), abs(b)
    while b != 0:
        a, b = b, a % b
    return a


def lcm(a, b):
    return abs(a * b) // gcd(a, b)


if __name__ == "__main__":
    test_cases = [(48, 18), (4, 6), (17, 13), (0, 5), (270, 192)]
    for a, b in test_cases:
        print(f"gcd({a}, {b}) -> {gcd(a, b)}, lcm({a}, {b}) -> {lcm(a, b)}")