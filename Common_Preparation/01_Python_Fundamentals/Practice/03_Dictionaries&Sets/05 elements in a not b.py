"""
Problem: Given two lists, find elements present in list A but not
in list B (use sets).
"""

def elements_in_a_not_b(list_a, list_b):
    set_a = set(list_a)
    set_b = set(list_b)
    return list(set_a - set_b)


if __name__ == "__main__":
    test_cases = [
        ([1, 2, 3, 4], [3, 4, 5]),
        ([1, 2, 2, 3], [2]),
        (["a", "b", "c"], ["b", "c", "d"]),
    ]
    for a, b in test_cases:
        print(f"elements_in_a_not_b({a}, {b}) -> {elements_in_a_not_b(a, b)}")