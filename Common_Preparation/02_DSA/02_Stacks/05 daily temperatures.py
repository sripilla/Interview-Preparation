"""
Problem: Daily Temperatures
Given a list of daily temperatures, return a list such that for
each day, tells you how many days you'd have to wait until a
warmer temperature. If no warmer day exists, use 0.
e.g. [73,74,75,71,69,72,76,73] -> [1,1,4,2,1,1,0,0]

Pattern: Monotonic stack — same idea as Next Greater Element, but
storing the distance (index difference) instead of the value.
"""

def daily_temperatures(temps):
    result = [0] * len(temps)
    stack = []   # stores indices of temps still waiting for a warmer day

    for i, temp in enumerate(temps):
        while stack and temps[stack[-1]] < temp:
            idx = stack.pop()
            result[idx] = i - idx
        stack.append(i)

    return result


if __name__ == "__main__":
    test_cases = [
        [73, 74, 75, 71, 69, 72, 76, 73],
        [30, 40, 50, 60],
        [30, 60, 90],
        [90, 60, 30],
    ]
    for temps in test_cases:
        print(f"daily_temperatures({temps}) -> {daily_temperatures(temps)}")