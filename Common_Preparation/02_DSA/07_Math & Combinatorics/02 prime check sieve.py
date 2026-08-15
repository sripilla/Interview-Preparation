"""
Problem: Prime Check + Sieve of Eratosthenes
1. Check if a single number is prime.
2. Generate all primes up to N efficiently.

Pattern: Single-number check only needs divisors up to sqrt(n).
For many primes, the Sieve marks multiples of each prime as
composite, starting from i*i.
"""

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True


def sieve_of_eratosthenes(n):
    is_prime_arr = [True] * (n + 1)
    is_prime_arr[0] = is_prime_arr[1] = False

    for i in range(2, int(n ** 0.5) + 1):
        if is_prime_arr[i]:
            for multiple in range(i * i, n + 1, i):
                is_prime_arr[multiple] = False

    return [i for i, prime in enumerate(is_prime_arr) if prime]


if __name__ == "__main__":
    print("--- is_prime ---")
    for n in [2, 17, 1, 15, 97, 100]:
        print(f"is_prime({n}) -> {is_prime(n)}")

    print()
    print("--- sieve_of_eratosthenes ---")
    for n in [10, 30, 50]:
        print(f"sieve_of_eratosthenes({n}) -> {sieve_of_eratosthenes(n)}")