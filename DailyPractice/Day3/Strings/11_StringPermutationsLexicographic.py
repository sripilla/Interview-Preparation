"""
Program Name: Generate All Permutations in Lexicographic Order

Problem:

Given a string s, generate all possible permutations and return them in lexicographically sorted order.

Example

Input:

s = "abc"

Output:

["abc", "acb", "bac", "bca", "cab", "cba"]
"""

class Solution:
    def permutations(self, s: str) -> list[str]:
        result = []
        
        def backtrack(path, remaining):
            # Base case
            
            # Add completed permutation
            
            # Try every remaining character
            
            for i in range(len(remaining)):
                # Choose character
                
                # Recursively generate remaining permutations
                
                pass
        
        backtrack([], s)
        
        # Sort permutations lexicographically
        
        return result