"""
Problem: Find all keys in a dict where value > some threshold.
"""

def keys_above_threshold(d, threshold):
    result = []
    for k, v in d.items():
        if v > threshold:
            result.append(k)
    return result


if __name__ == "__main__":
    test_cases = [
        ({"a": 10, "b": 25, "c": 5, "d": 30}, 10),
        ({"apple": 3, "banana": 8, "cherry": 1}, 5),
        ({"x": 1, "y": 2}, 100),
    ]
    for d, threshold in test_cases:
        print(f"keys_above_threshold({d}, threshold={threshold}) -> {keys_above_threshold(d, threshold)}")