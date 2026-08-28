"""
Program Name: Prime Number

Problem:
Given an integer n, return True if n is a prime number. Otherwise, return False.

Example

Input:
n = 17

Output:
True
"""
class Solution:
    def isPrime(self, n: int) -> bool:
        if n < 2:
            return False
        
        # Check divisibility
        