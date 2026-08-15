"""
Problem: Convert a decimal number to binary without using bin().
"""

def decimal_to_binary(n):
    if n == 0:
        return "0"

    is_negative = n < 0
    n = abs(n)

    digits = []
    while n > 0:
        digits.append(str(n % 2))
        n //= 2

    binary = "".join(reversed(digits))
    return "-" + binary if is_negative else binary


if __name__ == "__main__":
    test_cases = [10, 0, 1, 255, -5, 1024]
    for n in test_cases:
        print(f"decimal_to_binary({n}) -> {decimal_to_binary(n)}")