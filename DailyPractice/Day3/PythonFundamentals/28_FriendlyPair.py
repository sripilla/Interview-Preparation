"""
Program Name: Friendly Pair

Problem:
Given two positive integers a and b, determine whether they form a friendly/amicable pair.

Example

Input:
a = 220, b = 284

Output:
True

"""

class Solution:
    def isFriendlyPair(self, a: int, b: int) -> bool:
        sum_a = 0
        sum_b = 0
        
        # Find proper divisor sum of a
        
        # Find proper divisor sum of b
        
        return sum_a == b and sum_b == a