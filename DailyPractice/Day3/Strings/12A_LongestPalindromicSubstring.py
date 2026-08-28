"""
Program Name: Longest Palindromic Substring

Problem:

Given a string s, find the longest substring that is a palindrome.

Example

Input:

s = "babad"

Output:

"bab"

"aba" is also a valid answer.
"""

class Solution:
    def longestPalindrome(self, s: str) -> str:
        # Store the best palindrome found
        
        best = ""
        
        def expand(left, right):
            # Expand while characters match
            
            while left >= 0 and right < len(s):
                # Check palindrome condition
                
                pass
            
            # Return the palindrome boundaries
            
            pass
        
        # Every character can be the center
        
        for i in range(len(s)):
            # Odd-length palindrome
            
            # Even-length palindrome
            
            pass
        
        return best