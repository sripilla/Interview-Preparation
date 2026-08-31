"""
Program Name: Reverse an Array

Problem:

Given an array of integers, reverse the array in-place.

Example

Input:

nums = [1, 2, 3, 4, 5]

Output:

[5, 4, 3, 2, 1]
"""
def reverse(arr):
    start = 0
    end = len(arr) - 1

    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1
    return arr

arr = []
n = int(input("Enter the size of the array: "))
print(f"Enter {n} elements:")
for i in range(n):
    arr.append(int(input()))

print("Reversed array:", reverse(arr))
