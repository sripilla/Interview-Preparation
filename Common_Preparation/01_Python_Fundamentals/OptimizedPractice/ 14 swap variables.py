"""
Problem: Swap two variables without a temp variable — Python-
specific idiom (a, b = b, a).
"""

def swap_demo(a, b):
    print(f"before: a={a}, b={b}")
    a, b = b, a
    print(f"after:  a={a}, b={b}")
    return a, b


if __name__ == "__main__":
    swap_demo(5, 10)
    print()
    swap_demo("hello", "world")