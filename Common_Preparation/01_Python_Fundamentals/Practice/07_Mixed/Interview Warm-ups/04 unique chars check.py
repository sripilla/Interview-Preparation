"""
Problem: Given a string, check if all characters are unique.
"""

def has_all_unique_chars(s):
    seen = set()
    for ch in s:
        if ch in seen:
            return False
        seen.add(ch)
    return True


if __name__ == "__main__":
    test_cases = ["abcdef", "hello", "python", "abcabc", ""]
    for s in test_cases:
        print(f"has_all_unique_chars({s!r}) -> {has_all_unique_chars(s)}")