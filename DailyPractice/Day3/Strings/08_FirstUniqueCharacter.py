"""
Program Name: Find the First Non-Repeating Character

Problem:

Given a string s, find the first character that occurs exactly once.

Example

Input:

s = "leetcode"

Output:

"l"
"""

from collections import Counter

class Solution:
    def firstUniqueChar(self, s: str) -> str:
        frequency = Counter(s)
        
        # Traverse the string in original order
        
        for ch in s:
            # Check whether this character occurs once
            
            pass
        
        return ""