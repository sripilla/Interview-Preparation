# Math & Combinatorics — Quick Revision Sheet

## 1. Why Math Matters in DSA
- Lowest depth needed of all topics — mostly formula/function recall,
  not complex pattern recognition
- Core use cases: number theory basics (GCD/LCM, primes), counting
  problems (combinations/permutations), fast computation (exponentiation,
  bit tricks)
- High value-per-minute: quick to revise, shows up reliably in MCQs and
  short coding questions

## 2. Pattern 1 — GCD & LCM
```python
def gcd(a, b):
    a, b = abs(a), abs(b)
    while b != 0:
        a, b = b, a % b
    return a

def lcm(a, b):
    return abs(a * b) // gcd(a, b)

print(gcd(48, 18))   # 6
print(lcm(4, 6))       # 12
```
**Key idea:** GCD via the Euclidean algorithm — repeatedly replace
`(a, b)` with `(b, a % b)` until b is 0. LCM comes directly from GCD:
`lcm(a,b) = a*b / gcd(a,b)`.

## 3. Pattern 2 — Prime Checking + Sieve of Eratosthenes
```python
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def sieve_of_eratosthenes(n):
    is_prime_arr = [True] * (n + 1)
    is_prime_arr[0] = is_prime_arr[1] = False

    for i in range(2, int(n ** 0.5) + 1):
        if is_prime_arr[i]:
            for multiple in range(i * i, n + 1, i):
                is_prime_arr[multiple] = False

    return [i for i, prime in enumerate(is_prime_arr) if prime]

print(is_prime(17))            # True
print(sieve_of_eratosthenes(30))   # [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```
**Key idea:** single-number check only needs to test divisors up to
`sqrt(n)`. For MANY primes up to N, the Sieve is far faster (O(n log
log n)) than checking each number individually — mark multiples of
each prime as not-prime, starting from `i*i` (smaller multiples were
already marked by smaller primes).

## 4. Pattern 3 — Combinations & Permutations (nCr / nPr)
```python
import math

def n_choose_r(n, r):
    return math.factorial(n) // (math.factorial(r) * math.factorial(n - r))

def n_permute_r(n, r):
    return math.factorial(n) // math.factorial(n - r)

print(n_choose_r(5, 2))     # 10  — ways to choose 2 from 5, order doesn't matter
print(n_permute_r(5, 2))      # 20  — ways to arrange 2 from 5, order matters

# Python 3.8+ also has these built directly into math:
print(math.comb(5, 2))          # 10 — same as n_choose_r
print(math.perm(5, 2))            # 20 — same as n_permute_r
```
**Key idea:** nCr counts selections (order doesn't matter), nPr counts
arrangements (order matters). `math.comb`/`math.perm` exist in modern
Python — prefer them over hand-rolled factorial division to avoid
overflow/readability issues.

## 5. Pattern 4 — Fast Exponentiation (Power in O(log n))
```python
def power(base, exponent):
    result = 1
    while exponent > 0:
        if exponent % 2 == 1:          # exponent is odd
            result *= base
        base *= base                     # square the base
        exponent //= 2                     # halve the exponent

    return result

print(power(2, 10))   # 1024
print(power(3, 5))      # 243
```
**Key idea:** instead of multiplying `base` by itself `n` times
(O(n)), repeatedly square the base and halve the exponent — this
"binary exponentiation" trick runs in O(log n). Recognize this
pattern whenever a problem needs `x^n` for large n.

## 6. Pattern 5 — Bit Manipulation Basics (Count Set Bits)
```python
def count_set_bits(n):
    count = 0
    while n > 0:
        count += n & 1     # check the last bit
        n >>= 1              # shift right by 1
    return count

# Alternative one-liner using Python's built-in
def count_set_bits_builtin(n):
    return bin(n).count('1')

print(count_set_bits(13))            # 3   (13 = 1101 in binary)
print(count_set_bits_builtin(13))     # 3
```
**Key idea:** `n & 1` isolates the last bit, `n >>= 1` shifts
everything right (drops the last bit, like integer division by 2).
Common bit tricks to also remember:
- `n & (n-1)` clears the lowest set bit — useful for counting bits
  faster, or checking if n is a power of 2 (`n & (n-1) == 0`)
- `n << k` = multiply by `2^k`, `n >> k` = divide by `2^k`
- `n & 1` checks if n is odd (1) or even (0)

## 7. Quick Formula Reference
| Concept | Formula / Function |
|---|---|
| GCD | Euclidean algorithm, or `math.gcd(a, b)` |
| LCM | `a * b // gcd(a, b)`, or `math.lcm(a, b)` (3.9+) |
| nCr | `math.comb(n, r)` |
| nPr | `math.perm(n, r)` |
| Sum 1 to N | `n * (n + 1) // 2` |
| Power in O(log n) | binary exponentiation |
| Is power of 2 | `n > 0 and (n & (n-1)) == 0` |
| Count set bits | `bin(n).count('1')` |

## 8. Complexity Quick Check
| Operation | Time |
|---|---|
| GCD (Euclidean) | O(log(min(a,b))) |
| Prime check (single n) | O(√n) |
| Sieve of Eratosthenes (up to n) | O(n log log n) |
| nCr / nPr | O(r) with `math.comb`/`math.perm` |
| Fast exponentiation | O(log n) |
| Count set bits | O(number of bits) = O(log n) |

## 9. Decision Checklist — "Which math tool do I need?"
- Need the greatest common factor / smallest common multiple? → **GCD/LCM**
- Checking ONE number for primality? → **O(√n) check**
- Need ALL primes up to N? → **Sieve of Eratosthenes**
- Counting selections/arrangements? → **math.comb / math.perm**
- Computing `x^n` for large n efficiently? → **fast exponentiation**
- Working with binary representation / powers of 2? → **bit tricks**

## Priority Problems to Practice (in this order)
1. GCD/LCM — quick, foundational, shows up as a building block elsewhere
2. Prime Check + Sieve — very commonly asked, both versions
3. nCr/nPr — quick with `math.comb`/`math.perm`, know the difference
4. Power(x, n) fast exponentiation — recognize the O(log n) pattern
5. Count Set Bits — quick bit manipulation warm-up, do last