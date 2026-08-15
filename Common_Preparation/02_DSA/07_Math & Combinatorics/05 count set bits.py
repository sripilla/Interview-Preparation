"""
Problem: Count Set Bits
Given a number, count how many bits are set to 1 in its binary
representation.
e.g. 13 -> 3   (13 = 1101 in binary)

Pattern: Bit manipulation — repeatedly check the last bit with
n & 1, then shift right to check the next bit.
"""

def count_set_bits(n):
    count = 0
    while n > 0:
        count += n & 1     # check the last bit
        n >>= 1              # shift right by 1
    return count


def count_set_bits_builtin(n):
    return bin(n).count('1')


if __name__ == "__main__":
    test_cases = [13, 0, 1, 255, 1024]
    for n in test_cases:
        manual = count_set_bits(n)
        builtin = count_set_bits_builtin(n)
        print(f"count_set_bits({n}) -> {manual}   (builtin check: {builtin})")