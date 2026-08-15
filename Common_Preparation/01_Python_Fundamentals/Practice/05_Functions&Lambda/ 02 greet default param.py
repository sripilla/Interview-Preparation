"""
Problem: Write a function with a default parameter that greets a
user (name defaults to "Guest").
"""

def greet(name="Guest"):
    return f"Hello, {name}!"


if __name__ == "__main__":
    print(greet())              # uses default
    print(greet("Alice"))
    print(greet("Bob"))