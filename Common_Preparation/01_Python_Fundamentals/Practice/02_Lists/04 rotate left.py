"""
Problem: Rotate a list left by k positions.
e.g. [1,2,3,4,5], k=2 -> [3,4,5,1,2]
"""

def rotate_left(arr, k):
    if not arr:
        return arr
    k = k % len(arr)   # handle k larger than list length
    return arr[k:] + arr[:k]


if __name__ == "__main__":
    test_cases = [
        ([1, 2, 3, 4, 5], 2),
        ([1, 2, 3, 4, 5], 0),
        ([1, 2, 3, 4, 5], 5),
        ([1, 2, 3, 4, 5], 7),   # k > len(arr)
    ]
    for arr, k in test_cases:
        print(f"rotate_left({arr}, k={k}) -> {rotate_left(arr, k)}")