"""
Problem: Print index and value of each element in a list using enumerate.
"""

def print_index_value(arr):
    for i, val in enumerate(arr):
        print(f"index {i} -> {val}")


if __name__ == "__main__":
    test_cases = [
        ["a", "b", "c"],
        [10, 20, 30, 40],
    ]
    for arr in test_cases:
        print(f"print_index_value({arr})")
        print_index_value(arr)
        print()