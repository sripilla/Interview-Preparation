"""
Problem: Character frequency count in a string -> return as dict.
e.g. "hello" -> {'h':1,'e':1,'l':2,'o':1}
"""

def char_frequency(s):
    freq = {}
    for ch in s:
        freq[ch] = freq.get(ch, 0) + 1
    return freq


if __name__ == "__main__":
    test_cases = ["hello", "mississippi", "aabbcc"]
    for s in test_cases:
        print(f"char_frequency({s!r}) -> {char_frequency(s)}")