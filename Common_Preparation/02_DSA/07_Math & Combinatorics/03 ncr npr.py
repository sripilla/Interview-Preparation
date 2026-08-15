"""
Problem: nCr / nPr Calculation
Compute combinations (nCr, order doesn't matter) and permutations
(nPr, order matters) of n items taken r at a time.

Pattern: Direct factorial formulas, plus Python's built-in
math.comb / math.perm (preferred — avoids overflow/readability
issues from manual factorial division).
"""

import math


def n_choose_r(n, r):
    return math.factorial(n) // (math.factorial(r) * math.factorial(n - r))


def n_permute_r(n, r):
    return math.factorial(n) // math.factorial(n - r)


if __name__ == "__main__":
    test_cases = [(5, 2), (6, 3), (10, 0), (4, 4)]
    for n, r in test_cases:
        print(f"n_choose_r({n}, {r}) -> {n_choose_r(n, r)}   (math.comb: {math.comb(n, r)})")
        print(f"n_permute_r({n}, {r}) -> {n_permute_r(n, r)}   (math.perm: {math.perm(n, r)})")
        print()