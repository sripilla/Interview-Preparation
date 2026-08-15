"""
Problem: Write a list comprehension to get squares of even numbers
from 1-20.
"""

def squares_of_evens():
    return [x * x for x in range(1, 21) if x % 2 == 0]


if __name__ == "__main__":
    print(f"squares_of_evens() -> {squares_of_evens()}")