"""
Problem: Count vowels in a string.
"""

def count_vowels(s):
    vowels = set("aeiouAEIOU")
    count = 0
    for ch in s:
        if ch in vowels:
            count += 1
    return count


if __name__ == "__main__":
    test_cases = ["hello world", "Python Programming", "xyz", "AEIOU"]
    for s in test_cases:
        print(f"count_vowels({s!r}) -> {count_vowels(s)}")