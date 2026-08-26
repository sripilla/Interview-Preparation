"""
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
"""
index=-1
count=0
w= input("Enter the word: ")
s=input(f"Enter the string:")

for i in range(len(s)- len(w)+1):
    for j in range(len(w)):
        if s[i+j]==w[j]:
            count+=1
    if count==len(w):
        index= i
        break
print("Index:", index)
