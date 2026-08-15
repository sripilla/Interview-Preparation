"""
Problem: Group Anagrams
Given a list of strings, group the anagrams together.
e.g. ["eat","tea","tan","ate","nat","bat"]
  -> [["eat","tea","ate"], ["tan","nat"], ["bat"]]

Pattern: Bucketing using a hash map. The sorted version of a word
is the same for all its anagrams, so it makes a natural key.
"""

from collections import defaultdict


def group_anagrams(words):
    groups = defaultdict(list)
    for word in words:
        key = "".join(sorted(word))   # anagram signature
        groups[key].append(word)
    return list(groups.values())


if __name__ == "__main__":
    test_cases = [
        ["eat", "tea", "tan", "ate", "nat", "bat"],
        ["abc", "cab", "bca", "xyz"],
        [""],
    ]
    for words in test_cases:
        print(f"group_anagrams({words}) -> {group_anagrams(words)}")