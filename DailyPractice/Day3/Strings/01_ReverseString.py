"""
Program Name: Reverse a String

Problem:

Given a string s, return the string in reverse order.

Example

Input:

s = "hello"

Output:

"olleh"
"""

def rev(s):
    start=0;
    end=len(s)-1

    while start<end:
        s[start], s[end]= s[end], s[start]
        start+=1
        end-=1
    return s
s=[]
n= int(input("Enter the size of the string:"))
print(f"Enter the string elements:")
for i in range(n):
    s.append(input())
print("Reverse of the string:", rev(s))
