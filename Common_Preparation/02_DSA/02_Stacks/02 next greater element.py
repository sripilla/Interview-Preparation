"""
Problem: Next Greater Element
Given an array, for each element find the next element to its
right that is greater than it. If none exists, use -1.
e.g. [2, 1, 2, 4, 3] -> [4, 2, 4, -1, -1]

Pattern: Monotonic stack — keep indices whose values are still
"waiting" for a greater element to their right.
"""

def next_greater_element(arr):
    result = [-1] * len(arr)
    stack = []   # stores indices, values kept in decreasing order

    for i in range(len(arr)):
        while stack and arr[stack[-1]] < arr[i]:
            idx = stack.pop()
            result[idx] = arr[i]
        stack.append(i)

    return result


if __name__ == "__main__":
    test_cases = [
        [2, 1, 2, 4, 3],
        [4, 3, 2, 1],
        [1, 2, 3, 4],
        [5],
    ]
    for arr in test_cases:
        print(f"next_greater_element({arr}) -> {next_greater_element(arr)}")