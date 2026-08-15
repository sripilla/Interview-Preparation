"""
Problem: Given a list of integers, find the number that appears
only once (all others appear twice) — try both brute force AND
using a set.
"""

def find_single_brute_force(arr):
    for i in range(len(arr)):
        count = 0
        for j in range(len(arr)):
            if arr[i] == arr[j]:
                count += 1
        if count == 1:
            return arr[i]
    return None


def find_single_using_set(arr):
    seen = set()
    for num in arr:
        if num in seen:
            seen.remove(num)   # appeared twice -> remove
        else:
            seen.add(num)       # first time seeing it
    # only the single element remains in the set
    return seen.pop() if seen else None


if __name__ == "__main__":
    test_cases = [
        [4, 1, 2, 1, 2],
        [7, 3, 5, 3, 7, 9, 5],
        [10, 20, 10],
    ]
    for arr in test_cases:
        print(f"find_single_brute_force({arr}) -> {find_single_brute_force(arr)}")
        print(f"find_single_using_set({arr})   -> {find_single_using_set(arr)}")
        print()