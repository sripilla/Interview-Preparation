"""
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
"""


strs = []
m = int(input("Enter the number of strings: "))
print(f"Enter {m} strings:")
for i in range(m):
    strs.append(input())
prefix = strs[0]
for i in range(1, m):
    j = 0
    while j < len(prefix) and j < len(strs[i]):
        if prefix[j] != strs[i][j]:
            break
        j += 1
    prefix = prefix[:j]

    if prefix == "":
        break
print("Longest common prefix:", prefix)
