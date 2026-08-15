"""
Problem: Flatten a nested list: [[1,2],[3,4],[5]] -> [1,2,3,4,5]
"""

def flatten(nested):
    result = []
    for sublist in nested:
        for item in sublist:
            result.append(item)
    return result


if __name__ == "__main__":
    test_cases = [
        [[1, 2], [3, 4], [5]],
        [[1], [2], [3]],
        [[], [1, 2], []],
    ]
    for nested in test_cases:
        print(f"flatten({nested}) -> {flatten(nested)}")