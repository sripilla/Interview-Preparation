"""
Problem: Remove all duplicate characters from a string, keep first
occurrence order.
"""

def remove_duplicates(s):
    seen = set()
    result = []
    for ch in s:
        if ch not in seen:
            seen.add(ch)
            result.append(ch)
    return "".join(result)


if __name__ == "__main__":
    test_cases = ["programming", "mississippi", "aabbccddeeff"]
    for s in test_cases:
        print(f"remove_duplicates({s!r}) -> {remove_duplicates(s)!r}")