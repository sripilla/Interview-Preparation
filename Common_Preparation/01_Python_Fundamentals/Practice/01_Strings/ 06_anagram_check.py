"""
Problem: Check if two strings are anagrams of each other.
"""

def is_anagram(s1, s2):
    s1 = s1.replace(" ", "").lower()
    s2 = s2.replace(" ", "").lower()

    if len(s1) != len(s2):
        return False

    freq = {}
    for ch in s1:
        freq[ch] = freq.get(ch, 0) + 1
    for ch in s2:
        if ch not in freq:
            return False
        freq[ch] -= 1
        if freq[ch] == 0:
            del freq[ch]

    return len(freq) == 0


if __name__ == "__main__":
    test_cases = [
        ("listen", "silent"),
        ("hello", "world"),
        ("Dormitory", "Dirty Room"),
        ("abc", "cab"),
    ]
    for s1, s2 in test_cases:
        print(f"is_anagram({s1!r}, {s2!r}) -> {is_anagram(s1, s2)}")