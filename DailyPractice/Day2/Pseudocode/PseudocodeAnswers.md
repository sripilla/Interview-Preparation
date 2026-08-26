# Answer Key with Explanations

---

### Q1. Answer: **C) It prints the first character of the string**
The loop runs `for I = 0 to 0`, meaning it executes exactly once with I = 0.
`word[0]` is the first character of the string (0-indexed array), so only the first character is printed.

---

### Q2. Answer: **C) 3**
- `2 & 2 = 2` → `x + 2 = -2 + 2 = 0`
- `3 & 3 = 3` → `y + 3 = 3 + 3 = 6`
- `2 ^ 2 = 0` → `z + 0 = 1 + 0 = 1`
- Condition: `0 && 6 && 1` → **false** (0 is falsy)
- So the **Else** branch runs:
  - `x = z = 1`
  - `y = y ^ 2 = 3 ^ 2 = 1`
- `Print x + y + z = 1 + 1 + 1 = 3`

---

### Q3. Answer: **A) 2**
- `z = 2`
- `y = y mod z = 7 mod 2 = 1`
- `x = x mod z = 9 mod 2 = 1`
- `return x + y = 1 + 1 = 2`

---

### Q4. Answer: **C) 14**
- `x=8, y=6, z=4`
- `if(x>y)`: 8>6 true → `x = y = 6`
- `if(z>y)`: 4>6 false → Else: `y = z = 4`
- `Print x+y+z = 6+4+4 = 14`

---

### Q5. Answer: **D) 14**
Trace (a starts at 1, b=1):

**c=1:**
- d=-2: a=1+2=3; (3>1) → Continue
- d=-1: a=3+2=5; (5>1) → Continue
- d=0: a=5+2=7; (7>1) → Continue

**c=2:**
- d=-2: a=7+2=9; (9>2) → Continue
- d=-1: a=9+2=11; (11>2) → Continue
- d=0: a=11+2=13; (13>2) → Continue

Loops end normally with **a = 13**.
`Print a+b = 13+1 = 14`

---

### Q6. Answer: **B) Fail**
- `sum = p+q+r = 3+8+1 = 12`
- Condition needs: `p≠0` (true) AND `sum==11` (12≠11 → **false**) AND `q==4` AND `r≠0`
- Since one condition is false, overall is false → `Print "Fail"`

---

### Q7. Answer: **D) 2**
Trace (w starts at 1, x=1):

For **each y (11 to 20)**:
- z=-3: w = w+5; if w>y? For the first outer pass w=1+5=6, (6>11) false → w resets to 1; then if(1 > -3) true → **Jump out of inner loop**

Since `w` resets to 1 right before breaking out each time, every outer iteration behaves identically: `w` ends each y-pass at 1.

After all iterations: **w = 1**
`Print w+x = 1+1 = 2`

---

### Q8. Answer: **C) 16**
- `x=10, y=16, z=3`
- `if(x>y)`: 10>16 false → Else: `y = x = 10`
- `if(z>y)`: 3>10 false → Else: `y = z = 3`
- `Print x+y+z = 10+3+3 = 16`

---

### Q9. Answer: **D) 23**
- `solve(11,12)`: check `a<3 && b<4` → `11<3` is false
- Else branch: `return a+b = 11+12 = 23`

---

### Q10. Answer: **C) 41**
`solve(4,9)`:
- y>0 true, x>0 true
- `return 4+9 + solve(0,10) + solve(0,11) + solve(7,0)`

Sub-calls:
- `solve(0,10)`: y>0 true, x>0 false → skip inner block → `return x+y = 0+10 = 10`
- `solve(0,11)`: similarly → `return 0+11 = 11`
- `solve(7,0)`: y>0 false → `return x+y = 7+0 = 7`

Total: `4+9+10+11+7 = 41`

---

## Answer Summary Table

| Question | Answer |
|----------|--------|
| Q1 | C — Prints the first character |
| Q2 | C — 3 |
| Q3 | A — 2 |
| Q4 | C — 14 |
| Q5 | D — 14 |
| Q6 | B — Fail |
| Q7 | D — 2 |
| Q8 | C — 16 |
| Q9 | D — 23 |
| Q10 | C — 41 |