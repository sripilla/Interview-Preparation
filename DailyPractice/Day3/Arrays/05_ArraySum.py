"""
Program Name: Find Sum of Array Elements

Problem:

Given an array of integers, return the sum of all elements.

Example

Input:

nums = [1, 2, 3, 4, 5]

Output:

15
"""

def sum(arr):
    sum=0;
    for i in range(len(arr)):
        sum+=arr[i]
    return sum;
arr = []
n = int(input("Enter the size of the array: "))
print(f"Enter {n} elements:")
for i in range(n):
    arr.append(int(input()))

print("sum of array:", sum(arr))
