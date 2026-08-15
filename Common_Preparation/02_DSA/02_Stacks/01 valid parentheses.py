"""
Problem: Valid Parentheses
Given a string containing just the characters '(', ')', '{', '}',
'[' and ']', determine if the input string is valid — every
opening bracket must be closed by the same type, in the correct
order.
e.g. "({[]})" -> True
     "(]"     -> False

Pattern: Basic stack for matching/balancing.
"""

def is_valid_parentheses(s):
    stack = []
    pairs = {')': '(', '}': '{', ']': '['}

    for ch in s:
        if ch in "({[":
            stack.append(ch)
        elif ch in ")}]":
            if not stack or stack.pop() != pairs[ch]:
                return False

    return len(stack) == 0


if __name__ == "__main__":
    test_cases = ["({[]})", "(]", "()[]{}", "(((", "", "]"]
    for s in test_cases:
        print(f"is_valid_parentheses({s!r}) -> {is_valid_parentheses(s)}")