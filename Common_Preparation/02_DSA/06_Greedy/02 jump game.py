"""
Problem: Jump Game
Given an array where each element represents the max jump length
from that position, determine if you can reach the last index
starting from index 0.
e.g. [2,3,1,1,4] -> True
     [3,2,1,0,4] -> False

Pattern: Greedy — track the farthest reachable index as you scan;
if the current position ever exceeds that, it's unreachable.
"""

def can_jump(nums):
    farthest = 0
    for i, num in enumerate(nums):
        if i > farthest:   # current position is unreachable
            return False
        farthest = max(farthest, i + num)
    return True


if __name__ == "__main__":
    test_cases = [
        [2, 3, 1, 1, 4],
        [3, 2, 1, 0, 4],
        [0],
        [1, 0, 1, 0],
    ]
    for nums in test_cases:
        print(f"can_jump({nums}) -> {can_jump(nums)}")