"""
Problem: Group words by first letter -> {'a': ['apple','ant'],
'b': [...]} — defaultdict practice, this pattern appears
everywhere in DSA.
"""

from collections import defaultdict


def group_by_first_letter(words):
    groups = defaultdict(list)
    for word in words:
        first_letter = word[0].lower()
        groups[first_letter].append(word)
    return dict(groups)   # convert to plain dict for clean printing


if __name__ == "__main__":
    test_cases = [
        ["apple", "ant", "banana", "bear", "cat"],
        ["dog", "deer", "elephant"],
    ]
    for words in test_cases:
        print(f"group_by_first_letter({words}) -> {group_by_first_letter(words)}")