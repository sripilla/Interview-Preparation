"""
Problem: Reverse a string without using [::-1] (use a loop).
"""

def reverse_string(s):
    result = ""
    for ch in s:
        result = ch + result   # prepend each character
    return result


if __name__ == "__main__":
    test_cases = ["hello", "python", "a", ""]
    for s in test_cases:
        print(f"reverse_string({s!r}) -> {reverse_string(s)!r}")