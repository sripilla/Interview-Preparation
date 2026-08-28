"""
Program Name: Can a Number Be Expressed as a Sum of Two Prime Numbers?

Problem:
Given an integer n, determine whether it can be expressed as the sum of two prime numbers.

Example

Input:
n = 10

Output:
True

Explanation:
10 = 3 + 7
"""

class Solution:
    def canBeSumOfTwoPrimes(self, n: int) -> bool:
        # Try possible prime pairs
        
        for i in range(2, n):
            # Check whether i and n-i are prime
            
            pass
        
        return False