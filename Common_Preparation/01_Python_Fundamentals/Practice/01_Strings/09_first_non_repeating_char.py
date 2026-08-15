"""
Problem: Find the first non-repeating character in a string.
"""

def first_non_repeating_char(s):
    freq = {}
    for ch in s:
        freq[ch] = freq.get(ch, 0) + 1

    for ch in s:
        if freq[ch] == 1:
            return ch
    return None   # no non-repeating character found


if __name__ == "__main__":
    test_cases = ["swiss", "hello", "aabbcc", "programming"]
    for s in test_cases:
        print(f"first_non_repeating_char({s!r}) -> {first_non_repeating_char(s)!r}")