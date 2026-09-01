"""
Program Name: Check if Two Strings are Anagrams

Problem:

Given two strings s and t, determine whether they contain the same characters with the same frequencies.

Example

Input:

s = "listen"
t = "silent"

Output:

True
"""

def anagram(s1, s2):
    if len(s1)!=len(s2):
        return 0
    else:
        for i in range(len(s1)):
            for j in range(len(s2)):
                if s1[i]== s2[j]:
                    s2.pop(j);
                    break;
    return 1


s1=[]
s2=[]
m= int(input("Enter the size of the string1:"))
n= int(input("Enter the size of the string2:"))

print(f"Enter {m} string1 elements:")
for i in range(m):
    s1.append(input())

print(f"Enter {n} string2 elements:")
for i in range(n):
    s2.append(input())

if anagram(s1, s2)== 1:
    print("True")
else:
    print("False")
