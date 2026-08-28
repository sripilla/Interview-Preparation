"""
Program Name: Finding Roots of a Quadratic Equation

Problem:
Given coefficients a, b, and c of a quadratic equation ax² + bx + c = 0, return its roots.

Example

Input:
a = 1, b = -5, c = 6

Output:
[2, 3]
"""

class Solution:
    def quadraticRoots(self, a: float, b: float, c: float) -> list[float]:
        # Calculate the discriminant
        
        discriminant = 0
        
        # Determine the type of roots
        
        if discriminant > 0:
            # Two real roots
            pass
        elif discriminant == 0:
            # One repeated root
            pass
        else:
            # Complex roots
            pass