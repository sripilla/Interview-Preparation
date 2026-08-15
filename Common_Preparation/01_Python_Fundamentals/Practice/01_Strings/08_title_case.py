"""
Problem: Convert a string to title case WITHOUT using .title().
"""

def to_title_case(s):
    words = s.split(" ")
    result = []
    for word in words:
        if word:
            first_char = word[0].upper()
            rest = word[1:].lower()
            result.append(first_char + rest)
        else:
            result.append(word)
    return " ".join(result)


if __name__ == "__main__":
    test_cases = ["hello world", "PYTHON programming", "the QUICK brown FOX"]
    for s in test_cases:
        print(f"to_title_case({s!r}) -> {to_title_case(s)!r}")