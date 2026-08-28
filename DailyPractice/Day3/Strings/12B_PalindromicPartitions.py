"""
Program Name: Find All Possible Palindromic Partitions of a String

Problem:

Given a string s, partition it such that every substring in the partition is a palindrome.

Example

Input:

s = "aab"

Output:

[["a", "a", "b"], ["aa", "b"]]
"""

class Solution:
    def partition(self, s: str) -> list[list[str]]:
        result = []
        
        def backtrack(start, current):
            # Base case:
            # If we've reached the end, save current partition
            
            if start == len(s):
                pass
            
            # Try every possible substring
            
            for end in range(start, len(s)):
                substring = s[start:end + 1]
                
                # Check if substring is a palindrome
                
                if True:       # replace with palindrome check
                    # Choose
                    
                    current.append(substring)
                    
                    # Explore
                    
                    backtrack(end + 1, current)
                    
                    # Undo
                    
                    current.pop()
        
        backtrack(0, [])
        return result