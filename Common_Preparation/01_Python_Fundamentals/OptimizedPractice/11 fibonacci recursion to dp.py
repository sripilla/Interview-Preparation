"""
Problem: Fibonacci using recursion, then convert to @lru_cache
version — direct bridge into DP later.
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
    n = 28

    start = time.time()
    result_plain = fib_plain(n)
    time_plain = time.time() - start

    start = time.time()
    result_cached = fib_cached(n)
    time_cached = time.time() - start

    print(f"fib_plain({n})  -> {result_plain}, time = {time_plain:.4f}s")
    print(f"fib_cached({n}) -> {result_cached}, time = {time_cached:.6f}s")
    print()
    print("This is the bridge into DP: @lru_cache is 'top-down DP'")
    print("(memoized recursion). The bottom-up equivalent builds a dp[]")
    print("array iteratively instead of relying on the call stack.")