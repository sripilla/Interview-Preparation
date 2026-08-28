"""
Program Name: Harshad Number

Problem:
Given an integer n, determine whether it is divisible by the sum of its digits.

Example

Input:
n = 18

Output:
True
"""
class Solution:
    def isHarshad(self, n: int) -> bool:
        original = n
        digit_sum = 0
        
        # Calculate digit sum
        
        # Check divisibility
        