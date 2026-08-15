"""
Problem: Print Fibonacci sequence up to N terms using a loop
(not recursion).
"""

def fibonacci(n):
    sequence = []
    a, b = 0, 1
    for _ in range(n):
        sequence.append(a)
        a, b = b, a + b
    return sequence


if __name__ == "__main__":
    test_cases = [1, 2, 5, 10]
    for n in test_cases:
        print(f"fibonacci({n}) -> {fibonacci(n)}")