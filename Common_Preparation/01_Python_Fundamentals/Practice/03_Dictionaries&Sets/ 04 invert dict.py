"""
Problem: Invert a dictionary (swap keys and values).
"""

def invert_dict(d):
    result = {}
    for k, v in d.items():
        result[v] = k
    return result


if __name__ == "__main__":
    test_cases = [
        {"a": 1, "b": 2, "c": 3},
        {"name": "Alice", "city": "NY"},
        {1: "one", 2: "two"},
    ]
    for d in test_cases:
        print(f"invert_dict({d}) -> {invert_dict(d)}")