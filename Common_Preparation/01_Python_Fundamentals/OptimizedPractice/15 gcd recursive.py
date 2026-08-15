"""
Problem: GCD of two numbers using recursion (Euclidean algorithm,
don't use math.gcd) — recursion + math combined, mirrors DSA math
section.
"""

def gcd_recursive(a, b):
    a, b = abs(a), abs(b)
    if b == 0:            # base case
        return a
    return gcd_recursive(b, a % b)   # recursive case


if __name__ == "__main__":
    test_cases = [(48, 18), (100, 75), (17, 13), (0, 5), (270, 192)]
    for a, b in test_cases:
        print(f"gcd_recursive({a}, {b}) -> {gcd_recursive(a, b)}")