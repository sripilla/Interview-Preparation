"""
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
The input is generated such that a majority element will exist in the array.
 
arr1=[]

m= int(input("Enter the size of the array:"))

print(f"Enter {m} elements of the first array:")
for i in range(m):
    arr1.append(int(input()))

for i in range(m):
    count =0
    for j in range(m):
        if arr1[i]==arr1[j]:
            count+=1

    if count >= m//2:
        print("Majority element:", arr1[i])
        break
