"""
Program Name: Find Second Largest and Second Smallest Element

Problem:

Given an array of integers, find the second largest and second smallest distinct elements.

Example

Input:

nums = [5, 2, 9, 1, 7]

Output:

Second Largest = 7
Second Smallest = 2
"""

def secmaxele(arr):
    lar = arr[0]
    seclar = arr[1]

    if seclar > lar:
        lar, seclar = seclar, lar

    for i in range(len(arr)):
        if arr[i] > lar:
            seclar = lar
            lar = arr[i]

        elif arr[i] > seclar and arr[i] != lar:
            seclar = arr[i]

    return seclar


arr = []
n = int(input("Enter the size of the array:"))

print(f"Enter {n} elements:")

for i in range(n):
    arr.append(int(input()))

print("Second largest element:", secmaxele(arr))
