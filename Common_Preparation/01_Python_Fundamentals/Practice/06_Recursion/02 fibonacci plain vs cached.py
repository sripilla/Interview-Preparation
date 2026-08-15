"""
Problem: Write Fibonacci using plain recursion (no memoization) —
then add @lru_cache and compare speed mentally.
"""

import time
from functools import lru_cache


def fib_plain(n):
    if n <= 1:
        return n
    return fib_plain(n - 1) + fib_plain(n - 2)


@lru_cache(maxsize=None)
def fib_cached(n):
    if n <= 1:
        return n
    return fib_cached(n - 1) + fib_cached(n - 2)


if __name__ == "__main__":
    n = 28   # kept modest so plain recursion doesn't take too long

    print(f"fib_plain({n})...")
    start = time.time()
    result_plain = fib_plain(n)
    elapsed_plain = time.time() - start
    print(f"  result = {result_plain}, time = {elapsed_plain:.4f}s")

    print(f"fib_cached({n})...")
    start = time.time()
    result_cached = fib_cached(n)
    elapsed_cached = time.time() - start
    print(f"  result = {result_cached}, time = {elapsed_cached:.6f}s")

    print()
    print("Observation: plain recursion re-solves the same subproblems")
    print("exponentially many times (O(2^n)). @lru_cache stores results")
    print("of each unique call, so repeated calls with the same n are")
    print("instant lookups (O(n) overall). The speed gap widens fast as")
    print("n grows — try n=35 with fib_plain and watch it crawl, while")
    print("fib_cached stays near-instant.")