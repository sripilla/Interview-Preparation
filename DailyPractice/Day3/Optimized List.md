# Placement Coding Prep — Optimized List (Python)
**For:** Final Year B.Tech AI/ML, MIT Manipal
**Goal:** Fast, high-yield coverage for Indian campus placements (TCS NQT/CodeVita, Infosys, Wipro, Cognizant, Accenture + coding rounds at Amazon/product companies)

Legend: 🔴 Must-do (asked constantly, do till you can write blind) · 🟡 High-value (shows up often) · 🟢 Good-to-have (adds depth, do if time permits)

> ⚠️ **Only 2 days left? Jump to the [2-Day Emergency Sprint](#2-day-emergency-sprint) at the bottom of this doc.** In that mode: only touch 🔴 items in each phase below — skip 🟡/🟢 entirely unless you finish early.

---

## Phase 1 — Number/Math Fundamentals (Day 1–2)
Fast, instant-recall problems. Service-based companies (TCS, Wipro, Infosys) love these.

- 🔴 Even or Odd number
- 🔴 Sum of first N natural numbers (formula + loop)
- 🔴 Factorial of a number (iterative + recursive)
- 🔴 Reverse of a number
- 🔴 Palindrome number
- 🔴 Armstrong number
- 🔴 Prime number check + Prime numbers in a range (1–100)
- 🔴 GCD/HCF and LCM of two numbers
- 🔴 Sum of digits of a number
- 🟡 Fibonacci series up to nth term + Nth term via recursion
- 🟡 Power of a number (iterative + recursive, also fast exponentiation)
- 🟡 Perfect number / Strong number
- 🟡 Binary ↔ Decimal conversion
- 🟢 Automorphic number, Harshad number
- 🟢 Sum of digits until single digit (digital root)

---

## Phase 2 — Arrays (Day 3–6)
**The single highest-weight topic.** Product companies (Amazon, MAQ, service+dev roles) test this heavily.

### Core (🔴 must be instant)
- Largest / smallest element in an array
- Second largest / second smallest element
- Reverse an array
- Sort an array (know built-in `sorted()` + at least one manual sort: bubble/selection)
- Sum of array elements
- Find frequency of elements (use `collections.Counter`)
- Remove duplicates from an array
- Find duplicate(s) in array of N+1 integers (Floyd's cycle / XOR trick)

### High-value (🟡)
- **Kadane's Algorithm** — largest sum contiguous subarray (asked EVERYWHERE)
- Move all negative elements to one side
- Union and Intersection of two sorted arrays
- Rotate array (left/right) — try O(1) space (juggling/block-swap or Python slicing trick)
- Two Sum / all pairs with sum = K
- Best time to buy and sell stock (I and II variants)
- Find the "Kth" largest/smallest element (heap-based, `heapq`)
- Trapping Rain Water
- Merge Intervals
- Next Permutation
- Subarray with sum equal to 0

### Good-to-have (🟢)
- Find equilibrium index of an array
- Longest consecutive subsequence
- Chocolate distribution problem
- Median of two sorted arrays (equal & different size — classic hard interview Q)
- Rearrange array in alternating positive/negative
- Elements appearing more than N/K times (Boyer-Moore voting generalization)

---

## Phase 3 — Strings (Day 7–8)
Very common in service-company rounds + easy marks.

- 🔴 Reverse a string
- 🔴 Check palindrome
- 🔴 Check anagram
- 🔴 Count vowels/consonants
- 🔴 Remove duplicate characters
- 🔴 Remove spaces from a string
- 🟡 Character frequency count (`Counter`)
- 🟡 Find non-repeating character (first unique char)
- 🟡 Toggle case of each character
- 🟡 Check if two strings match with wildcard characters
- 🟢 All permutations of a string (lexicographic order)
- 🟢 Longest palindromic substring / palindromic partitions
- 🟢 Remove brackets from an algebraic expression

---

## Phase 4 — Recursion (Day 9)
Product companies test recursive thinking; also builds DP intuition.

- 🔴 Factorial, Fibonacci (recursive)
- 🔴 Sum of digits (recursive)
- 🟡 Power of a number (recursive, fast exponentiation)
- 🟡 Print all subsets of a set
- 🟡 Print all permutations of a string
- 🟢 Generate all balanced parentheses combinations
- 🟢 Nth row of Pascal's triangle

---

## Phase 5 — Matrix (Day 10)
Lower frequency than arrays but shows up in service-company rounds.

- 🔴 Spiral traversal of a matrix
- 🟡 Rotate matrix by 90 degrees
- 🟡 Search an element in a row-column sorted matrix
- 🟢 Common elements in all rows of a matrix

---

## Phase 6 — Pattern Printing (Day 11, half-day)
**TCS NQT / Wipro / Cognizant staple.** Practice writing these fast, no thinking needed at interview time.

### Star Patterns
- 🔴 Square, Hollow Square
- 🔴 Triangle, Pyramid, Hollow Pyramid
- 🔴 Inverted Pyramid
- 🟡 Diamond, Half-Diamond
- 🟡 Rhombus, Parallelogram
- 🟢 Rectangle, Hollow Rectangle

### Number Patterns
These trip people up more than star patterns because the *logic changes per row* — the star just prints `*`, but here you're tracking a value. Master the "what changes per row vs per column" framing and all of these fall out fast.

- 🔴 Basic Square Pattern (same digit filling every row, e.g. row of 1s repeated)
- 🔴 Basic Square Incrementing Pattern (row number fills the whole row — row 1 → `1111`, row 2 → `2222`)
- 🔴 Basic Right Triangle Number Pattern (running count: `1` / `23` / `456` / `78910` — continues counting across rows, doesn't reset)
- 🟡 Basic Right Triangle Number Pattern (Inverted) — same running-count logic, just top-down reversed
- 🟡 Basic Incrementing Triangle Pattern, initialised at N (start value increases per row, e.g. start=3 → `333`,`313`,`323`,`333` style or countdown `6666`,`555`,`44`,`3`)
- 🟡 Basic Double-Incrementing Triangle Pattern, initialised at N (grows then mirrors — rows increase then decrease symmetrically, like `3/45/678/9101112/678/45/3`)
- 🟢 Basic Incrementing Triangle Pattern (Inverted, Mirrored) — inverted + reflected version of the above
- 🟢 Basic Incrementing Diamond Pattern (Inverted Sandwich) — two incrementing triangles stacked to form a diamond
- 🟢 Basic Double-Incrementing Triangle Pattern, initialised Sandwich variant

**Interview tip:** don't memorize each one separately — identify the row/column relationship (row-constant vs running-counter vs row-value-as-fill) and derive it live. That's what these variants are actually testing.

---

## Suggested 11-Day Sprint (if you have the time)

| Days | Focus |
|---|---|
| 1–2 | Number/Math fundamentals (🔴 all, 🟡 most) |
| 3–6 | Arrays — spend the most time here; Kadane's, Two Sum, rotations, stock problems are non-negotiable |
| 7–8 | Strings |
| 9 | Recursion |
| 10 | Matrix |
| 11 | Pattern printing (quick refresh, half day) |

Then loop back: redo every 🔴 item cold, no notes, timed to under 5 minutes each. That's the actual bar for placement rounds.

---

## 2-Day Emergency Sprint
**Rule: only 🔴 items. Nothing else.** You're optimizing for coverage-per-minute, not depth. Skip anything you can already write cold — don't waste time re-solving what you know.

### Day 1 — Numbers, Arrays, Strings (the 80% that shows up)

**Morning (3 hrs) — Number fundamentals, rapid-fire**
Do all of these back-to-back, 5 min cap each, no looking up syntax:
- Even/Odd, Sum of N naturals, Factorial (loop), Reverse a number, Palindrome number, Armstrong number, Prime check + primes in range, GCD/HCF & LCM, Sum of digits

**Afternoon (4 hrs) — Arrays (heaviest weight, don't shortcut this)**
- Largest/smallest + 2nd largest/smallest
- Reverse array, sort array (manual + `sorted()`)
- Frequency count (`Counter`), remove duplicates
- Find duplicate in array of N+1 integers
- **Kadane's Algorithm** — do this until you can write it in under 3 minutes, it's the single most-asked array problem
- Move negatives to one side
- Union/Intersection of two sorted arrays

**Evening (2 hrs) — Strings**
- Reverse string, palindrome check, anagram check
- Vowel/consonant count, remove duplicate chars, remove spaces

### Day 2 — Remaining Arrays, Recursion, Matrix, Patterns + Mock Practice

**Morning (2.5 hrs) — Array 🔴 problems you didn't finish + these two if not yet done**
- Two Sum / pairs with sum K
- Best time to buy and sell stock

**Late morning (1.5 hrs) — Recursion**
- Factorial (recursive), Fibonacci (recursive), Sum of digits (recursive)

**Afternoon (1 hr) — Matrix**
- Spiral traversal of a matrix (this alone covers most matrix questions asked)

**Afternoon (1 hr) — Patterns**
- Square, Hollow Square, Triangle, Pyramid
- Basic Square Incrementing Pattern, Basic Right Triangle Number Pattern (the running-counter one) — these are the number-pattern archetypes, everything else is a variant

**Evening (2–3 hrs) — Timed mock**
- Pick 6–8 random 🔴 items from across all phases, solve each in under 5 minutes with no notes. This simulates the actual pressure of an online test. Wherever you hesitate, that's your last revision target before the exam.

**Skip entirely if under 2 days:** everything 🟡 and 🟢, all number-pattern variants beyond the two archetypes above, matrix problems beyond spiral traversal, all "advanced arrays" (trapping rain water, merge intervals, next permutation, median of two arrays).

---

## Python-specific tips for interviews
- Use `collections.Counter`, `heapq`, `itertools.permutations` — mention you know them, but also be ready to implement manually if asked ("don't use built-in").
- Practice writing clean O(n) array solutions using two-pointer / sliding window — this pattern alone solves ~40% of the "high-value" list above (Kadane's, trapping rain water, two sum, subarray sum 0, best time to buy/sell).
- For service-company online tests (TCS NQT, Wipro), speed and correctness on Phase 1–3 matters more than optimal complexity — write it fast and move on.
- For product-company/dev rounds, focus energy on the 🟡/🟢 array and string problems — that's where the real signal is.