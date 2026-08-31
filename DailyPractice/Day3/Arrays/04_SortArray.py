"""
Program Name: Sort an Array

Problem:

Given an array of integers, sort the elements in ascending order.

Example

Input:

nums = [5, 2, 8, 1, 3]

Output:

[1, 2, 3, 5, 8]

"""
def sort(arr):
    arr.sort()
    return arr
arr = []
n = int(input("Enter the size of the array: "))
print(f"Enter {n} elements:")
for i in range(n):
    arr.append(int(input()))

print("sorted array:", sort(arr))
