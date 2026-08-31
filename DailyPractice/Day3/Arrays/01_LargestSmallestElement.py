"""
Program Name: Find Largest and Smallest Element in an Array

Problem:

Given an array of integers, find the largest and smallest elements in the array.

Example

Input:

nums = [5, 2, 9, 1, 7]

Output:

Largest = 9
Smallest = 1
"""

def maxElement(arr):
    
    maxelement=arr[0];
    for i in range(len(arr)):
        if arr[i]>maxelement:
            maxelement= arr[i];
    return maxelement;


arr = []

n = int(input("Enter the number of elements: "))

print("Enter the array:")

for i in range(n):
    arr.append(int(input()))

print("Maximum element:", maxElement(arr))

