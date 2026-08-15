"""
Problem: Use sorted() with a lambda to sort a list of tuples by
the second element.
e.g. [(1,'b'),(2,'a')] -> sorted by letter -> [(2,'a'),(1,'b')]
"""

def sort_by_second_element(pairs):
    return sorted(pairs, key=lambda pair: pair[1])


if __name__ == "__main__":
    test_cases = [
        [(1, 'b'), (2, 'a')],
        [(1, 'z'), (2, 'a'), (3, 'm')],
        [(10, 3), (20, 1), (30, 2)],
    ]
    for pairs in test_cases:
        print(f"sort_by_second_element({pairs}) -> {sort_by_second_element(pairs)}")