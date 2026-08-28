"""
Program Name: Check String Match with Wildcard Characters

Problem:

Given strings s and p, determine whether they match.

? matches exactly one character.
* matches zero or more characters.

Example

Input:

s = "adceb"
p = "*a*b"

Output:

True
"""

class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        # Use two pointers / dynamic programming
        
        i = 0
        j = 0
        
        # Keep track of the last '*' if needed
        
        # Process both strings
        
        while i < len(s) and j < len(p):
            # Normal character or '?'
            
            # '*' case
            
            pass
        
        # Handle remaining '*' characters
        
        pass