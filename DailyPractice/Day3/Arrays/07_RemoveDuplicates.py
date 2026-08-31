"""
Program Name: Remove Duplicates from an Array

Problem:

Given an array, remove duplicate elements while keeping one occurrence of each element.

Example

Input:

nums = [1, 2, 2, 3, 1, 4]

Output:

[1, 2, 3, 4]
"""

def removedup(arr, n):

    newarr = []

    for i in range(n):
        if arr[i] not in newarr:
            newarr.append(arr[i])

    return newarr


arr = []

n = int(input("Enter the size of the array: "))

print(f"Enter {n} elements:")

for i in range(n):
    arr.append(int(input()))

print("Array after removing duplicates:", removedup(arr, n))
