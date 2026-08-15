"""
Problem: Generate Binary Numbers from 1 to N
Using a queue, generate the binary representations of numbers
1 through N, in order.
e.g. n=5 -> ['1', '10', '11', '100', '101']

Pattern: Queue-based level generation — each dequeued item
produces two new candidates (append '0' and '1'), and queue order
guarantees they come out sorted without needing an actual sort.
"""

from collections import deque


def generate_binary_numbers(n):
    result = []
    q = deque()
    q.append("1")

    for _ in range(n):
        front = q.popleft()
        result.append(front)
        q.append(front + "0")
        q.append(front + "1")

    return result


if __name__ == "__main__":
    test_cases = [1, 5, 10]
    for n in test_cases:
        print(f"generate_binary_numbers({n}) -> {generate_binary_numbers(n)}")