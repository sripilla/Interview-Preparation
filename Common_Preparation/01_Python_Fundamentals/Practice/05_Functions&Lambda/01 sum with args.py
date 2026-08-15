"""
Problem: Write a function that takes *args and returns their sum.
"""

def sum_all(*args):
    return sum(args)


if __name__ == "__main__":
    print(f"sum_all(1, 2, 3) -> {sum_all(1, 2, 3)}")
    print(f"sum_all(10, 20, 30, 40) -> {sum_all(10, 20, 30, 40)}")
    print(f"sum_all(5) -> {sum_all(5)}")
    print(f"sum_all() -> {sum_all()}")