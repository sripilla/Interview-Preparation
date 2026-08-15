"""
Problem: Implement Queue using Two Stacks
Design a FIFO queue using only two stacks.

Pattern: Push new items onto in_stack. When dequeueing, if
out_stack is empty, dump everything from in_stack into it
(reversing order), then pop from out_stack.
"""

class QueueUsingStacks:
    def __init__(self):
        self.in_stack = []
        self.out_stack = []

    def enqueue(self, x):
        self.in_stack.append(x)

    def dequeue(self):
        if not self.out_stack:
            while self.in_stack:
                self.out_stack.append(self.in_stack.pop())
        if not self.out_stack:
            return None   # queue is empty
        return self.out_stack.pop()

    def is_empty(self):
        return not self.in_stack and not self.out_stack


if __name__ == "__main__":
    q = QueueUsingStacks()
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    print(f"dequeue() -> {q.dequeue()}")   # 1

    q.enqueue(4)
    print(f"dequeue() -> {q.dequeue()}")   # 2
    print(f"dequeue() -> {q.dequeue()}")   # 3
    print(f"dequeue() -> {q.dequeue()}")   # 4
    print(f"dequeue() -> {q.dequeue()}")   # None (empty)