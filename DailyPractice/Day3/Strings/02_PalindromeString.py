"""
Program Name: Check if a String is a Palindrome

Problem:

Given a string s, return True if it reads the same forward and backward. Otherwise, return False.

Example

Input:

s = "madam"

Output:

True


def rev(s):
    start=0;
    end=len(s)-1
    r=[]
    while start<=end:
        r.append(s[end])   
        end-=1
    return r

s=[]
n= int(input("Enter the size of the string:"))
print(f"Enter the string elements:")
for i in range(n):
    s.append(input())
if s==rev(s):
    print("palindrome")
else:
    print("Not palindrome")
print("Reverse of the string:", rev(s))
