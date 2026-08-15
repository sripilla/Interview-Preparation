"""
Problem: Evaluate Reverse Polish Notation (postfix expression)
Given a list of tokens representing an arithmetic expression in
postfix (RPN) form, evaluate it.
e.g. ["2","1","+","3","*"] -> 9   (i.e. (2+1)*3)

Pattern: Stack-based expression evaluation — push operands, and on
an operator pop the last two operands, apply it, push result back.
"""

def eval_rpn(tokens):
    stack = []
    ops = {'+', '-', '*', '/'}

    for token in tokens:
        if token in ops:
            b = stack.pop()
            a = stack.pop()
            if token == '+':
                stack.append(a + b)
            elif token == '-':
                stack.append(a - b)
            elif token == '*':
                stack.append(a * b)
            elif token == '/':
                stack.append(int(a / b))   # truncate toward zero
        else:
            stack.append(int(token))

    return stack[-1]


if __name__ == "__main__":
    test_cases = [
        ["2", "1", "+", "3", "*"],
        ["4", "13", "5", "/", "+"],
        ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"],
    ]
    for tokens in test_cases:
        print(f"eval_rpn({tokens}) -> {eval_rpn(tokens)}")