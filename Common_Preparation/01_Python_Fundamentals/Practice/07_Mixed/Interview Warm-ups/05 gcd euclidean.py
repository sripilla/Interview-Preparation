"""
Problem: Write a function to find GCD of two numbers (without
math.gcd) — implement Euclidean algorithm manually.
"""

def gcd(a, b):
    a, b = abs(a), abs(b)
    while b != 0:
        a, b = b, a % b
    return a


if __name__ == "__main__":
    test_cases = [(48, 18), (100, 75), (17, 13), (0, 5), (270, 192)]
    for a, b in test_cases:
        print(f"gcd({a}, {b}) -> {gcd(a, b)}")