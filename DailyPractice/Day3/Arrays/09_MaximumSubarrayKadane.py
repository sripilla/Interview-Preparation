"""
Program Name: Maximum Sum Contiguous Subarray — Kadane's Algorithm

Problem:

Given an integer array, find the contiguous subarray with the largest sum.

Example

Input:

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

Output:

6
"""

def maxsum(arr):
    maxsum=arr[0]
    currentsum=arr[0]
    for i in range(len(arr)):
        currentsum= max(arr[i], currentsum+arr[i])
        if currentsum>maxsum:
            maxsum=currentsum
    return maxsum

arr = []
n = int(input("Enter the size of the array: "))
print(f"Enter {n} elements:")
for i in range(n):
    arr.append(int(input()))
print("maximum sum:", maxsum(arr))
