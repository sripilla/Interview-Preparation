"""
Problem: Min Stack
Design a stack that supports push, pop, top, and retrieving the
minimum element, all in O(1) time.

Pattern: Stack with auxiliary state — maintain a second stack that
tracks the running minimum at each level.
"""

class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []   # min_stack[i] = min of stack[0..i]

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


if __name__ == "__main__":
    ms = MinStack()
    ms.push(3)
    ms.push(1)
    ms.push(2)
    print(f"after push 3,1,2 -> get_min() = {ms.get_min()}")   # 1
    print(f"top() = {ms.top()}")                                  # 2

    ms.pop()
    print(f"after pop -> get_min() = {ms.get_min()}")            # 1 (stack: [3,1])

    ms.pop()
    print(f"after pop -> get_min() = {ms.get_min()}")            # 3 (stack: [3])