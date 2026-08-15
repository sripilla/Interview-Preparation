"""
Problem: Given two lists of same length, print element-wise sum
using zip.
"""

def print_elementwise_sum(list1, list2):
    for a, b in zip(list1, list2):
        print(f"{a} + {b} = {a + b}")


if __name__ == "__main__":
    test_cases = [
        ([1, 2, 3], [4, 5, 6]),
        ([10, 20], [5, 15]),
    ]
    for l1, l2 in test_cases:
        print(f"print_elementwise_sum({l1}, {l2})")
        print_elementwise_sum(l1, l2)
        print()