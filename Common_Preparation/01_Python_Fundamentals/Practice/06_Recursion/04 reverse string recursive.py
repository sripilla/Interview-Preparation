"""
Problem: Reverse a string using recursion.
"""

def reverse_string_recursive(s):
    if len(s) <= 1:          # base case: empty or single char
        return s
    return reverse_string_recursive(s[1:]) + s[0]   # recursive case


if __name__ == "__main__":
    test_cases = ["hello", "python", "a", ""]
    for s in test_cases:
        print(f"reverse_string_recursive({s!r}) -> {reverse_string_recursive(s)!r}")