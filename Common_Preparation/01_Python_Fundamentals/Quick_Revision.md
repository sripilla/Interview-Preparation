# Python Fundamentals Revision Sheet — Base for DSA Prep

Brush up on these BEFORE diving into DSA topics. This is the foundation everything else builds on.

## 1. Basic Syntax & Data Types
```python
x = 5
y = 5.0
s = "hello"
b = True
n = None

print(type(x))            # <class 'int'>
print(type(y))            # <class 'float'>
print(isinstance(x, int)) # True
```

## 2. Operators You Must Know
```python
print(7 // 2)    # 3   (floor/integer division)
print(7 % 2)     # 1   (modulo — very common in DSA)
print(2 ** 10)   # 1024 (exponent)
print(5 / 2)     # 2.5  (float division)

x = 5
print(1 < x < 10)   # True — comparison chaining, valid in Python

print(True and False)   # False
print(True or False)    # True
print(not True)          # False
```

## 3. Strings (immutable — important!)
```python
s = "hello world"

print(s[0])        # 'h'
print(s[-1])        # 'd'   (negative indexing)
print(s[0:5])        # 'hello'  (slicing)
print(s[::-1])        # 'dlrow olleh'  (reverse)

print(s.split(" "))     # ['hello', 'world']
print("-".join(["a","b"]))  # 'a-b'

print(s.upper())     # 'HELLO WORLD'
print(s.strip())      # removes leading/trailing whitespace
print(s.replace("o", "0"))  # 'hell0 w0rld'

print(ord('a'))    # 97
print(chr(97))      # 'a'

# Strings are immutable → build with list + join for efficiency
chars = []
chars.append('x')
chars.append('y')
result = ''.join(chars)
print(result)   # 'xy'
```

## 4. Lists (the workhorse of DSA)
```python
arr = [1, 2, 3]
arr.append(4)          # [1, 2, 3, 4]
print(arr.pop())         # 4  (removes and returns last)
print(arr)                # [1, 2, 3]

arr.insert(1, 99)          # [1, 99, 2, 3]
print(len(arr))              # 4
print(arr[1:3])                # [99, 2]
print(arr[::-1])                 # [3, 2, 99, 1]

nums = [4, 2, 7, 1]
print(sum(nums), max(nums), min(nums))   # 14 7 1
print(nums.index(7))                       # 2
print(3 in nums)                             # False (O(n) check!)

# List comprehension
squares = [x*x for x in range(5)]
print(squares)   # [0, 1, 4, 9, 16]

evens = [x for x in nums if x % 2 == 0]
print(evens)      # [4, 2]
```

## 5. Tuples & Unpacking
```python
t = (1, 2)
a, b = t
print(a, b)     # 1 2

a, b = 10, 20
a, b = b, a        # swap without temp var
print(a, b)          # 20 10

arr = ['x', 'y', 'z']
for i, val in enumerate(arr):
    print(i, val)
# 0 x
# 1 y
# 2 z

list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
for num, letter in zip(list1, list2):
    print(num, letter)
# 1 a
# 2 b
# 3 c
```

## 6. Dictionaries & Sets (core to hash map problems)
```python
d = {}
d["apple"] = 3
d["banana"] = 5
print(d.get("apple", 0))     # 3
print(d.get("mango", 0))       # 0  (safe default, no KeyError)
print("apple" in d)              # True  (O(1) check)

for k, v in d.items():
    print(k, v)
# apple 3
# banana 5

s = set()
s.add(1)
s.add(2)
s.add(1)          # duplicate ignored
print(s)            # {1, 2}
print(2 in s)         # True — O(1) lookup, faster than list
```

## 7. Functions
```python
def add(a, b=0):        # default argument
    return a + b

print(add(5))       # 5   (uses default b=0)
print(add(5, 3))      # 8

sq = lambda x: x*x
print(sq(4))     # 16

nums = [3, 1, 4, 1, 5]
nums.sort(key=lambda x: -x)
print(nums)   # [5, 4, 3, 1, 1]  (sorted descending)

def total(*args):
    return sum(args)
print(total(1, 2, 3))   # 6
```

## 8. Loops & Control Flow
```python
for i in range(5):
    print(i, end=" ")
# 0 1 2 3 4

for i in range(2, 10, 2):
    print(i, end=" ")
# 2 4 6 8

i = 0
while i < 3:
    print(i, end=" ")
    i += 1
# 0 1 2

# for-else: else runs only if loop completes without break
for i in range(3):
    if i == 5:
        break
else:
    print("completed without break")   # this prints
```

## 9. Recursion Basics
```python
def factorial(n):
    if n <= 1:               # base case
        return 1
    return n * factorial(n-1)   # recursive case

print(factorial(5))   # 120

import sys
sys.setrecursionlimit(10000)   # default ~1000, raise if needed for deep recursion
```

## 10. Common Built-in Functions (save you time)
```python
arr = [3, 1, 4, 1, 5]

print(sorted(arr))                  # [1, 1, 3, 4, 5]
print(sorted(arr, reverse=True))      # [5, 4, 3, 1, 1]

pairs = [(1,'b'), (2,'a')]
print(sorted(pairs, key=lambda x: x[1]))  # [(2, 'a'), (1, 'b')]

print(list(map(int, ["1", "2", "3"])))       # [1, 2, 3]
print(list(filter(lambda x: x > 2, arr)))      # [3, 4, 5]

print(any(x > 4 for x in arr))    # True
print(all(x > 0 for x in arr))      # True

print(abs(-5), round(3.14159, 2))     # 5 3.14
```

## 11. Input Parsing (common in assessments)
```python
# If input line is: 5
n = int(input())

# If input line is: 1 2 3 4 5
arr = list(map(int, input().split()))
print(arr)   # [1, 2, 3, 4, 5]
```

## 12. Object-Oriented Basics (sometimes needed for problem setup)
```python
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None    # for linked list problems
        self.left = None      # for tree problems
        self.right = None

# Building a tiny linked list: 1 -> 2
n1 = Node(1)
n2 = Node(2)
n1.next = n2
print(n1.val, n1.next.val)   # 1 2
```

## Priority Order to Revise (if short on time)
1. Lists + list comprehensions
2. Dictionaries + sets
3. String slicing/methods
4. Loops with enumerate/zip
5. Functions + lambda
6. Recursion + base cases
7. Tuples/unpacking
8. OOP basics (only if linked lists/trees expected)

Once comfortable with this, move to the DSA syllabus (Hash Maps → Stacks → Queues → Heaps → DP → Greedy → Math).