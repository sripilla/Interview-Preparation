"""
Problem: Given a sentence, find the longest word.
"""

def longest_word(sentence):
    words = sentence.split()
    longest = ""
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest


if __name__ == "__main__":
    test_cases = [
        "the quick brown fox jumps",
        "I love python programming",
        "a bb ccc dddd",
    ]
    for s in test_cases:
        print(f"longest_word({s!r}) -> {longest_word(s)!r}")