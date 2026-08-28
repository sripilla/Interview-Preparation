"""
Program Name: Palindrome Number

Problem:
Given an integer x, return True if it reads the same forward and backward.

Example

Input:
x = 121

Output:
True
"""

class Solution:
    def isPalindrome(self, x: int) -> bool:
        original = x
        reverse = 0
        
        # Reverse the number
        
        return original == reverse