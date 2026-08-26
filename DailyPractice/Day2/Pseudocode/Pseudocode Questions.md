# Pseudocode Questions

---

## Question No. 1
**What operation does the following pseudocode perform?**

```
Declare an array "word" of string data type
Declare a variable I
Take a string as input in the word

for I = 0 to 0
    print word[I]
End for
Algorithm End
```

- A) It prints the last character of the string
- B) It prints characters in increasing order
- C) It prints the first character of the string
- D) It reverses the string

---

## Question No. 2
**Set x = -2, y = 3, z = 1. Predict the output.**

```
if (x + (2 & 2) && y + (3 & 3) && z + (2 ^ 2))
    x = x - 2
    y = x
Else
    x = z
    y = y ^ 2
End if
Print x + y + z
```

- A) 2
- B) 11
- C) 3
- D) 0

---

## Question No. 3
**Print the output of the following pseudocode for x = 9, y = 7.**

```
Integer funn(Integer x, Integer y)
    Integer z
    Set z = 2
    y = y mod z
    x = x mod z
    return x + y
End function funn()
```

- A) 2
- B) 3
- C) 17
- D) 5

---

## Question No. 4
**Calculate the output of the following pseudocode.**

```
Integer x, y, z
Set x = 8, y = 6, z = 4
if (x > y)
    x = y
Else
    y = x
End if
if (z > y)
    z = y
Else
    y = z
End if
Print x + y + z
```

- A) 13
- B) 17
- C) 14
- D) 23

---

## Question No. 5
**Calculate the output of the following pseudocode.**

```
Integer a, b, c, d
Set a = 1, b = 1
for (each c from 1 to 2)
    for (each d from -2 to 0)
        a = a + 2
        if (a > c)
            Continue
        End if
        a = 1
        if (a > d)
            Jump out of the loop
        End if
    End for
End for
Print a + b
```

- A) 8
- B) 22
- C) 30
- D) 14

---

## Question No. 6
**Calculate the output of the following pseudocode for input p = 3, q = 8, r = 1.**

```
Integer p, q, r, sum
Read p, q, r
Set sum = p + q + r
if ((p NOT EQUALS 0) and (sum EQUALS 11) and (q EQUALS 4) and (r NOT EQUALS 0))
    Print "Success"
Otherwise
    Print "Fail"
End if
```

- A) Success
- B) Fail
- C) Error
- D) None of Above

---

## Question No. 7
**Calculate the output of the following pseudocode.**

```
Integer w, x, y, z
Set w = 1, x = 1
for (each y from 11 to 20)
    for (each z from -3 to 0)
        w = w + 5
        if (w > y)
            Continue
        End if
        w = 1
        if (w > z)
            Jump out of the loop
        End if
    End for
End for
Print w + x
```

- A) 8
- B) 22
- C) 3
- D) 2

---

## Question No. 8

```
Integer x, y, z
Set x = 10, y = 16, z = 3
if (x > y)
    x = y
Else
    y = x
End if
if (z > y)
    z = y
Else
    y = z
End if
Print x + y + z
```

- A) 13
- B) 12
- C) 16
- D) 20

---

## Question No. 9
**Predict the output of the following pseudocode for a = 11, b = 12.**

```
Integer solve(Integer a, Integer b)
    if (a < 3 && b < 4)
        return solve(a + 1, b + 1)
    Else
        Return a + b
    End if
End function solve()
```

- A) 13
- B) 12
- C) 22
- D) 23

---

## Question No. 10
**Predict the output of the following pseudocode for x = 4, y = 9.**

```
Integer solve(Integer x, Integer y)
    if (y > 0)
        if (x > 0)
            return x + y + solve(0, y + 1) + solve(0, y + 2) + solve(x + 3, 0)
        End if
    End if
    return x + y
End function solve()
```

- A) 20
- B) 15
- C) 41
- D) 30