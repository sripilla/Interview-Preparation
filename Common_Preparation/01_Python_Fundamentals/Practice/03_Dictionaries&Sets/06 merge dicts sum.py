"""
Problem: Merge two dictionaries; if a key exists in both, sum the values.
"""

def merge_dicts_sum(d1, d2):
    result = dict(d1)   # start with a copy of d1
    for k, v in d2.items():
        result[k] = result.get(k, 0) + v
    return result


if __name__ == "__main__":
    test_cases = [
        ({"a": 1, "b": 2}, {"b": 3, "c": 4}),
        ({"x": 5}, {"y": 10}),
        ({}, {"a": 1}),
    ]
    for d1, d2 in test_cases:
        print(f"merge_dicts_sum({d1}, {d2}) -> {merge_dicts_sum(d1, d2)}")