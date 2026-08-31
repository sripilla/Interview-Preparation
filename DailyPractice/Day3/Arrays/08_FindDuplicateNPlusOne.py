"""
Program Name: Find Duplicate in Array of N+1 Integers

Problem:

Given an array containing n + 1 integers where each integer is in the range [1, n], find the duplicate number.

Example

Input:

nums = [1, 3, 4, 2, 2]

Output:

2
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
