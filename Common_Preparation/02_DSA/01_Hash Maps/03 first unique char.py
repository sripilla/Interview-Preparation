"""
Problem: First Unique Character
Given a string, find the index of the first character that does
not repeat. Return -1 if none exists.
e.g. "leetcode" -> 0 ('l' is first non-repeating)
     "aabb" -> -1

Pattern: Frequency counting with a hash map, then a second pass
to find the first count == 1.
"""

def first_unique_char(s):
    freq = {}
    for ch in s:
        freq[ch] = freq.get(ch, 0) + 1

    for i, ch in enumerate(s):
        if freq[ch] == 1:
            return i
    return -1


if __name__ == "__main__":
    test_cases = ["leetcode", "aabb", "swiss", "z", ""]
    for s in test_cases:
        print(f"first_unique_char({s!r}) -> {first_unique_char(s)}")