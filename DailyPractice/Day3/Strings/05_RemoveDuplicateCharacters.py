"""
Program Name: Remove Duplicate Characters from a String

Problem:

Given a string s, remove duplicate characters while preserving the first occurrence of each character.

Example

Input:

s = "programming"

Output:

"progamin"
"""

def removedup(s):
    for i in range(len(s)-1):
        for j in range(i+1, len(s)):
            if s[i]==s[j]:
                s.pop(j)
                break;
    return s

s=[]
n= int(input("Enter the size of the string:"))
print(f"Enter {n} string elements:")
for i in range(n):
    s.append(input())

print("string after removing duplicates:", removedup(s))
