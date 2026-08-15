"""
Problem: Given two lists (keys, values), zip them into a dictionary.
"""

def lists_to_dict(keys, values):
    result = {}
    for k, v in zip(keys, values):
        result[k] = v
    return result


if __name__ == "__main__":
    test_cases = [
        (["a", "b", "c"], [1, 2, 3]),
        (["name", "age"], ["Alice", 30]),
        (["x", "y", "z"], [10, 20]),   # unequal lengths -> zip stops at shorter
    ]
    for keys, values in test_cases:
        print(f"lists_to_dict({keys}, {values}) -> {lists_to_dict(keys, values)}")