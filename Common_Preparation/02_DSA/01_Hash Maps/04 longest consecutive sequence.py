"""
Problem: Longest Consecutive Sequence
Given an unsorted array of integers, find the length of the
longest run of consecutive integers.
e.g. [100, 4, 200, 1, 3, 2] -> 4   (the sequence 1,2,3,4)

Pattern: Set for O(1) existence checks. Only start counting a
sequence from its true starting point (num-1 not in set), so
each number is visited at most twice overall -> O(n).
"""

def longest_consecutive(nums):
    num_set = set(nums)
    longest = 0

    for num in num_set:
        if num - 1 not in num_set:   # this is the start of a sequence
            length = 1
            while num + length in num_set:
                length += 1
            longest = max(longest, length)

    return longest


if __name__ == "__main__":
    test_cases = [
        [100, 4, 200, 1, 3, 2],
        [0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
        [],
        [5],
    ]
    for nums in test_cases:
        print(f"longest_consecutive({nums}) -> {longest_consecutive(nums)}")