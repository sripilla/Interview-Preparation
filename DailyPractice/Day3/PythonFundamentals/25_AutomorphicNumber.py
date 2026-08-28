"""
Program Name: Automorphic Number

Problem:
Given an integer n, determine whether its square ends with the number itself.

Example

Input:
n = 25

Output:
True
"""

class Solution:
    def isAutomorphic(self, n: int) -> bool:
        square = n * n
        
        # Check whether square ends with n
        