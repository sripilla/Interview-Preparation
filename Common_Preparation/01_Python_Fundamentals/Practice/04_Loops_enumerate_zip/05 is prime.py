"""
Problem: Check if a number is prime using a for loop.
"""

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True


if __name__ == "__main__":
    test_cases = [2, 17, 1, 15, 97, 100]
    for n in test_cases:
        print(f"is_prime({n}) -> {is_prime(n)}")