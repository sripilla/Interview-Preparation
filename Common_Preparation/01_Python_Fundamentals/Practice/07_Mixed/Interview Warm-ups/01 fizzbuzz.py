"""
Problem: FizzBuzz (1 to 50): multiples of 3 -> "Fizz", 5 -> "Buzz",
both -> "FizzBuzz".
"""

def fizzbuzz(n):
    result = []
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))
    return result


if __name__ == "__main__":
    output = fizzbuzz(50)
    print(" ".join(output))