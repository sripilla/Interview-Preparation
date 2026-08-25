# Pseudocode Answers & Explanations

## Question 1 — Answer: **C) 3 5 7 9 5**
Trace (in-place, left-to-right, so each step uses the still-original arr[i+1]):
- i=0: arr[0]=1+2=3 → [3,2,3,4,5]
- i=1: arr[1]=2+3=5 → [3,5,3,4,5]
- i=2: arr[2]=3+4=7 → [3,5,7,4,5]
- i=3: arr[3]=4+5=9 → [3,5,7,9,5]

Final: **3 5 7 9 5**

---

## Question 2 — Answer: **D) 7**
`1 | 2 = 3` and `2 | 3 = 3` (bitwise OR).
Condition: `(x + 3) && (y + 3)` → `(0+3)=3` (truthy) `&&` `(3+3)=6` (truthy) → **true**, so the `if` branch runs:
- x = x - 2 = 0 - 2 = **-2**
- y = x = **-2**

Print x + y + z = -2 + (-2) + 11 = **7**

---

## Question 3 — Answer: **D) It reverses the string**
The loop runs `l` from `length-1` down to `0`, printing `word[l]` at each step — i.e., printing characters from last to first, which reverses the string.

---

## Question 4 — Answer: **B) 18**
`solve(10, 5)`:
- y=5>0 ✔, x=10>0 ✔
- return `10 + 5 + solve(2, 0) + solve(0, 1)`

`solve(2, 0)`: y=0, not >0 → return x+y = 2+0 = **2**

`solve(0, 1)`: y=1>0 ✔, x=0, not >0 → return x+y = 0+1 = **1**

Total = 10 + 5 + 2 + 1 = **18**

---

## Question 5 — Answer: **B) 1 1 1 1 1**
Trace:
- i=0: arr[0]=5-4=1 → [1,4,3,2,1]
- i=1: arr[1]=4-3=1 → [1,1,3,2,1]
- i=2: arr[2]=3-2=1 → [1,1,1,2,1]
- i=3: arr[3]=2-1=1 → [1,1,1,1,1]

Final: **1 1 1 1 1**

---

## Question 6 — Answer: **C) 13**
`solve(5, 6)`: 5>4 ✔ and 6<7 ✔ → return `solve(6, 7)`

`solve(6, 7)`: 6>4 ✔ but 7<7 ✘ (false) → return n+m = 6+7 = **13**

---

## Question 7 — Answer: **B) It prints the original string**
The loop runs `l` from `0` to `length-1`, printing `word[l]` in normal forward order — i.e., prints the string unchanged.

---

## Question 8 — Answer: **B) 20 12 6 2 1**
Using arr[] = 5, 4, 3, 2, 1 (in-place, left-to-right, so each step uses the still-original arr[i+1]):
- i=0: arr[0]=5*4=20 → [20,4,3,2,1]
- i=1: arr[1]=4*3=12 → [20,12,3,2,1]
- i=2: arr[2]=3*2=6 → [20,12,6,2,1]
- i=3: arr[3]=2*1=2 → [20,12,6,2,1]

Final: **20 12 6 2 1**

---

## Question 9 — Answer: **B) 12**
Trace: w=21, x=11.
- y=21, z=-1: w=21-1=20. Check `w>y` → 20>21 false, so no continue. Set w=1. Check `w>z` → 1>-1 true → **jump out of the loop**.

Since w is reset to 1 immediately before the exit check on every possible pass through this logic, the loop terminates with **w = 1** regardless of exactly which loop(s) "jump out" exits.

Print w + x = 1 + 11 = **12**

---

## Question 10 — Answer: **D) 14**
x=10, y=16, z=3.
- `if(x>y)`: 10>16 false → Else: y = x/2 = 10/2 = **5**
- `if(z>y)`: 3>5 false → Else: y = z/2 = 3/2 = **1** (integer division)

Print x+y+z = 10 + 1 + 3 = **14**