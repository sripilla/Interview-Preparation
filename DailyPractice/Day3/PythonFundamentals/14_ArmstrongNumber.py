"""
Program Name: Armstrong Number

Problem:
Given an integer n, determine whether it is an Armstrong number.

Example

Input:
n = 153

Output:
True
"""
class Solution:
    def isArmstrong(self, n: int) -> bool:
        original = n
        digits = len(str(n))
        total = 0
        
        # Process each digit
        
        return total == original