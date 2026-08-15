"""
Problem: Print a multiplication table (1-10) using nested loops.
"""

def print_multiplication_table():
    for i in range(1, 11):
        for j in range(1, 11):
            print(f"{i * j:4}", end="")
        print()   # newline after each row


if __name__ == "__main__":
    print_multiplication_table()