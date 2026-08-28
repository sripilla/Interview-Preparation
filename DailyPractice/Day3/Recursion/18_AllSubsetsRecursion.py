"""
Program Name: Find All Subsets of a Given Set

Problem:
Given a set of positive integers, return all possible subsets.

Example

Input:
arr = [1, 2, 3]

Output:

[[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
"""

class Solution:
    def subsets(self, arr: list[int]) -> list[list[int]]:
        result = []
        
        def generate(index, current):
            # Base case
            
            # Include current element
            
            # Exclude current element
            
            pass
        
        generate(0, [])
        return result