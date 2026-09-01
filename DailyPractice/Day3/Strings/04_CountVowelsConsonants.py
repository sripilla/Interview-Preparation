"""
Program Name: Count Vowels and Consonants

Problem:

Given a string s, count the number of vowels and consonants in it.

Example

Input:

s = "Hello World"

Output:

Vowels = 3
Consonants = 7
"""
def count(s):
    vcount=0;
    ccount=0;
    for i in range(len(s)):
        if s[i] == 'a' or s[i] =='e' or s[i] =='i' or s[i] =='o' or s[i] =='u':
            vcount+=1;
        else:
            ccount+=1;
    print("Vowel count:", vcount);
    print("Consonent count:", ccount)
    
s=[]
n= int(input("Enter the size of the string:"))
print(f"Enter {n} string elements:")
for i in range(n):
    s.append(input())
count(s)




      
