"""
Program Name: Character Frequency Count

Problem:

Given a string s, find the frequency of every character.

Example

Input:

s = "banana"

Output:

{
    'b': 1,
    'a': 3,
    'n': 2
}
"""

from collections import Counter

class Solution:
    def characterFrequency(self, s: str):
        # Count frequency of every character
        
        frequency = Counter(s)
        
        # Return the frequency dictionary
        
        pass