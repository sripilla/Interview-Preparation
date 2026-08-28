"""
Program Name: Check if a String is a Palindrome

Problem:

Given a string s, return True if it reads the same forward and backward. Otherwise, return False.

Example

Input:

s = "madam"

Output:

True
"""
class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Use two pointers
        
        left = 0
        right = len(s) - 1
        
        # Compare characters from both ends
        
        pass