# Pseudocode Questions

## Question 1
**What will be the output of the following pseudocode for arr[] = 1,2,3,4,5**

```
Initialize i, n
Set arr[]= 1, 2, 3, 4, 5
for i = 0 to n - 2
    arr[i] = arr[i] + arr[i+1]
End for
print the array of elements
```

Options:
- A) 3 3 4 9 5
- B) 4 3 7 5 2
- C) 3 5 7 9 5
- D) 1 2 3 4 5

---

## Question 2
**Predict the output of the following pseudocode.**

```
Integer x, y, z
Set x = 0, y = 3, z = 11
if(x + (1 | 2) && y + (2 | 3))
    x = x - 2
    y = x
Else
    x = z
    y = y ^ 2
End if
Print x + y + z
```

Options:
- A) 15
- B) 10
- C) 13
- D) 7

---

## Question 3
**What operation does the following pseudocode perform?**

```
Declare an array "word" of string data type
Declare a variable l
Take a string as input in the word
for l = (length of word) - 1 to 0
    print word[l]
End for
Algorithm End
```

Options:
- A) None of the above
- B) It prints characters in increasing order
- C) It deletes the string
- D) It reverses the string

---

## Question 4
**Predict the output of the following pseudocode for x = 10, y = 5.**

```
Integer solve(Integer x, Integer y)
if(y > 0)
    if(x > 0)
        return x + y + solve(2, y - 5) + solve(x - 10, 1)
    End if
End if
return x + y
End function solve()
```

Options:
- A) 15
- B) 18
- C) 13
- D) 17

---

## Question 5
**What will be the output of the following pseudocode for arr[] = 5, 4, 3, 2, 1?**

```
Initialize i, n
Initialize an array of size n
Take the values for the array
for i = 0 to n - 2
    arr[i] = arr[i] - arr[i+1]
End for
print the array of elements
```

Options:
- A) 3 3 4 9 5
- B) 1 1 1 1 1
- C) 3 5 7 9 5
- D) 2 2 2 2 2

---

## Question 6
**Predict the output of the following pseudocode for n = 5, m = 6.**

```
Integer solve(Integer n, Integer m)
if(n > 4 && m < 7)
    return solve(n + 1, m + 1)
Else
    Return n + m
End if
End function solve()

print the array of elements
```

Options:
- A) 15
- B) 21
- C) 13
- D) 10

---

## Question 7
**What operation does the following pseudocode perform?**

```
Declare an array "word" of string data type
Declare a variable l
Take a string as input in the word
for l = 0 to (length of word) - 1
    print word[l]
End for
Algorithm End
```

Options:
- A) None of the above
- B) It prints the original string
- C) It deletes the string
- D) It reverses the string

---

## Question 8
**What will be the output of the following pseudocode? (for arr[] = 5, 4, 3, 2, 1)**

```
Initialize i, n
Initialize an array of size n
Take the values for the array
for i = 0 to n - 2
    arr[i] = arr[i] * arr[i+1]
End for
print the array of elements
```

Options:
- A) 10 12 8 2 1
- B) 20 12 6 2 1
- C) 5 10 6 2 0
- D) 20 4 6 1 1

---

## Question 9
**Predict the output of the following pseudocode.**

```
Integer w, x, y, z
Set w = 21, x = 11
for (each y from 21 to 30)
    for (each z from -1 to 0)
        w = w - 1
        if(w > y)
            Continue
        End if
        w = 1
        if(w > z)
            Jump out of the loop
        End if
    End for
End for
Print w + x
```

Options:
- A) 8
- B) 12
- C) 3
- D) 2

---

## Question 10
**Predict the output of the following pseudocode.**

```
Integer x, y, z
Set x = 10, y = 16, z = 3
if(x > y)
    x = 2 * y
Else
    y = x / 2
End if
if(z > y)
    z = 2 * y
Else
    y = z / 2
End if
Print x + y + z
```

Options:
- A) 38
- B) 20
- C) 33
- D) 14