"""
Problem: Find the intersection of two lists.
"""

def intersection(list1, list2):
    set2 = set(list2)
    result = []
    seen = set()
    for num in list1:
        if num in set2 and num not in seen:
            result.append(num)
            seen.add(num)
    return result


if __name__ == "__main__":
    test_cases = [
        ([1, 2, 3, 4], [3, 4, 5, 6]),
        ([1, 2, 2, 3], [2, 2, 4]),
        ([1, 2, 3], [4, 5, 6]),
    ]
    for l1, l2 in test_cases:
        print(f"intersection({l1}, {l2}) -> {intersection(l1, l2)}")