"""
Program Name: Find Frequency of Elements

Problem:

Given an array of integers, find the frequency of each element.

Example

Input:

nums = [1, 2, 2, 3, 1, 1]

Output:

{1: 3, 2: 2, 3: 1}
"""
def frequency(arr):
    freq = {}
    for i in range(len(arr)):
        if arr[i] in freq:
            freq[arr[i]] += 1
        else:
            freq[arr[i]] = 1
    return freq

arr = []
n = int(input("Enter the size of the array: "))
print(f"Enter {n} elements:")
for i in range(n):
    arr.append(int(input()))
print("Frequency:", frequency(arr))
