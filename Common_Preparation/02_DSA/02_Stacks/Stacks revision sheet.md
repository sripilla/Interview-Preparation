# Stacks — Quick Revision Sheet

## 1. Why Stacks Matter in DSA
- LIFO (Last In, First Out) — the last element added is the first removed
- Core use cases: matching/balancing, "look back until something bigger/smaller" problems, undo operations, expression evaluation, tracking state while traversing

## 2. Core Operations (refresher)
```python
stack = []
stack.append(x)       # push
stack.pop()             # pop — removes and returns last element (LIFO)
stack[-1]                 # peek — look at top without removing
len(stack) == 0             # check if empty
```
No special import needed — a plain Python list works fine as a stack since
`.append()`/`.pop()` on the end are both O(1).

## 3. Pattern 1 — Matching / Balancing
Use when you need to check pairs open with a matching close, in the
right order.
```python
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

print(is_valid_parentheses("({[]})"))   # True
print(is_valid_parentheses("(]"))         # False
```
**Key idea:** push opening brackets, and on a closing bracket, check the
top of the stack matches. If stack is empty when you need to pop, or
anything is left over at the end, it's invalid.

## 4. Pattern 2 — Monotonic Stack (Next Greater/Smaller Element)
Use for "find the next element that is bigger/smaller" problems.
Keep the stack in increasing or decreasing order as you go.
```python
def next_greater_element(arr):
    result = [-1] * len(arr)
    stack = []   # stores indices, values kept decreasing

    for i in range(len(arr)):
        while stack and arr[stack[-1]] < arr[i]:
            idx = stack.pop()
            result[idx] = arr[i]
        stack.append(i)

    return result

print(next_greater_element([2, 1, 2, 4, 3]))   # [4, 2, 4, -1, -1]
```
**Key idea:** every element is pushed once and popped at most once ->
O(n) overall, even though there's a nested `while` loop.
**Used in:** Daily Temperatures, Next Greater Element, Stock Span

## 5. Pattern 3 — Stack with Extra State (Min Stack)
Use when you need O(1) access to more than just the top element
(e.g. current minimum).
```python
class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []   # tracks the minimum at each level

    def push(self, val):
        self.stack.append(val)
        current_min = min(val, self.min_stack[-1]) if self.min_stack else val
        self.min_stack.append(current_min)

    def pop(self):
        self.stack.pop()
        self.min_stack.pop()

    def top(self):
        return self.stack[-1]

    def get_min(self):
        return self.min_stack[-1]

ms = MinStack()
ms.push(3); ms.push(1); ms.push(2)
print(ms.get_min())   # 1
ms.pop()
print(ms.get_min())   # 1  (still 1, since 3 and 1 remain... wait: stack is [3,1])
```
**Key idea:** maintain a second stack in parallel that always tracks the
minimum "so far" at each push — no need to rescan on every query.

## 6. Pattern 4 — Expression Evaluation (Postfix / RPN)
Use for evaluating expressions written in Reverse Polish Notation.
```python
def eval_rpn(tokens):
    stack = []
    ops = {'+', '-', '*', '/'}

    for token in tokens:
        if token in ops:
            b = stack.pop()
            a = stack.pop()
            if token == '+': stack.append(a + b)
            elif token == '-': stack.append(a - b)
            elif token == '*': stack.append(a * b)
            elif token == '/': stack.append(int(a / b))   # truncate toward 0
        else:
            stack.append(int(token))

    return stack[-1]

print(eval_rpn(["2", "1", "+", "3", "*"]))   # 9  -> (2+1)*3
```
**Key idea:** operands get pushed; when you hit an operator, pop the
last two operands, apply the operator, push the result back.

## 7. Pattern 5 — "Days Until" / Distance-to-Next Problems
Use for problems like "how many days until a warmer temperature".
```python
def daily_temperatures(temps):
    result = [0] * len(temps)
    stack = []   # stores indices of temps waiting for a warmer day

    for i, temp in enumerate(temps):
        while stack and temps[stack[-1]] < temp:
            idx = stack.pop()
            result[idx] = i - idx
        stack.append(i)

    return result

print(daily_temperatures([73, 74, 75, 71, 69, 72, 76, 73]))
# [1, 1, 4, 2, 1, 1, 0, 0]
```
**Key idea:** same monotonic stack idea as Pattern 2, just storing the
distance instead of the value.

## 8. Complexity Quick Check
| Operation | Time |
|---|---|
| Push | O(1) |
| Pop | O(1) |
| Peek | O(1) |
| Monotonic stack traversal | O(n) total (amortized) |

## 9. Decision Checklist — "Should I use a stack here?"
- Do I need to match opening/closing pairs in order? → **basic stack**
- Do I need "next greater/smaller element" for each item? → **monotonic stack**
- Do I need O(1) access to min/max alongside normal push/pop? → **stack + auxiliary stack**
- Am I evaluating an expression (postfix/infix)? → **stack-based evaluation**
- Am I processing "undo" or "most recent first" logic? → **basic stack**

## Priority Problems to Practice (in this order)
1. Valid Parentheses — basic matching pattern (most fundamental)
2. Min Stack — stack with extra tracked state
3. Next Greater Element — monotonic stack pattern
4. Daily Temperatures — monotonic stack applied to distances
5. Evaluate Reverse Polish Notation — expression evaluation