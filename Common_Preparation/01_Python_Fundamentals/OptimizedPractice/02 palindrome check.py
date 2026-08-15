"""
Problem: Check if a string is a palindrome (ignore case).
"""

def is_palindrome(s):
    s = s.lower()
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True


if __name__ == "__main__":
    test_cases = ["Madam", "hello", "Racecar", "Level"]
    for s in test_cases:
        print(f"is_palindrome({s!r}) -> {is_palindrome(s)}")