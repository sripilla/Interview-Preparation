"""
Problem: Group a list of words by their first letter
-> {'a': ['apple','ant'], ...}
"""

def group_by_first_letter(words):
    groups = {}
    for word in words:
        first_letter = word[0].lower()
        if first_letter not in groups:
            groups[first_letter] = []
        groups[first_letter].append(word)
    return groups


if __name__ == "__main__":
    test_cases = [
        ["apple", "ant", "banana", "bear", "cat"],
        ["dog", "deer", "elephant"],
        ["Zebra", "zoo", "Ant"],
    ]
    for words in test_cases:
        print(f"group_by_first_letter({words}) -> {group_by_first_letter(words)}")