# Mock Test 4 — Questions Only

> This source consists of photographed screen questions paired with separately typed step-by-step solutions. Original on-screen question numbers are preserved where visible; unnumbered items are labeled by topic.

---

### Question A – Pseudo-Code Tracing (Bitwise XOR)

**Question:**
What will be the output of the following pseudo code?
```
1  Integer p,q,r
2  Set p=4, q=3, r=7
3  if((q^p^9)<(8+r+q))
4      r=(7^7)+q
5      q=(q+r)*p
6  End if
7  r=q+p
8  Print p+q+r
```
Select the correct option from the given choices.

---

### Question B – Pseudo-Code Tracing (Loop with OR condition)

**Question:**
What will be the output of the following pseudo code?
```
1  Integer p,q,r
2  Set p=9, q=2, r=10
3  for(each r from 3 to 4)
4      p=(p+q)+p
5  if((p+r)<r || 7>r)
6      p=12+p
7  Else
8      Continue
9  End if
10     End for
11 Print p+q
```
Select the correct option from the given choices.

---

### Question C – Nested IF/ELSE Pseudocode Trace

**Question:**
Consider the following pseudo code:
```
1  START
2
3  SET a = 10
4  SET b = 5
5  SET c = 3
6  SET result = 0
7
8  IF a > 8 THEN
      IF b < 7 THEN
          SET result = a * b
      ELSE
          SET result = a + c
      END IF
   ELSE
      SET result = b - c
   END IF
9
   STOP
```

---

### Question 6 – Pseudo-Code Tracing (Loop with Bitwise AND)

**Question:**
What will be the output of the depicted pseudo code?
```
1  Integer a,b,c
2  Set a=8, b=5, c=6
3  for(each c from 3 to 4)
4      b=9+b
       b=(b+7)+a
       b=(b&4)+b
   End for
   Print a+b
```

---

### Question 10 – Array Pseudo-Code Tracing

**Question:**
What will be the output of the following pseudo code?
```
1  Integer j
2  Integer arr[4]= {1, 4, 0, 1}
3  arr[0]=(arr[1]+1)+arr[3]
4  if((arr[1]&arr[3]&arr[0])<(arr[3]+arr[1]+arr[0]))
5      arr[2]=(arr[3]+arr[2])+arr[3]
6  Else
7      arr[1]=(2+1)+arr[2]
8      arr[1]=2+arr[0]
9  End if
10 Print arr[0]+arr[2]
```
Select the correct option from the given choices.

---

### Question 5 – C++ Protected Inheritance

**Question:**
Assume that a class Employee inherits Base using protected inheritance. Which employee class correctly uses level and allows access to getID? Analyze the given choices and select the correct option.

```cpp
class Base {
private:
    int code = 100;
protected:
    int level = 2;
public:
    int getID() { return 1; }
};
```

The Employee class should correctly use `level` and allow access to `getID()`.

---

### CSS Shape Question

**Question:**
Identify/write the CSS code that produces the given shape — a square with only the top-left and top-right corners rounded (flat bottom corners), shown in the reference image.

---

### Question 3 – HTML5 Video Element with Fallback

**Question:**
Assume that Dustin is using a browser that does not support the video element with a source, controls, and a fallback message. Which option denotes the correct HTML code Dustin can use for this purpose? Analyze the given choices and select the right option.

---

### Question 2 – JavaScript Fetch Function

**Question:**
Consider you are building a web application that requires an HTTP request to the API and returns the data as a JavaScript object. Which code snippet correctly declares a function that fulfills this requirement? Analyze the given choices and select the correct option.

---

### Question 1 – Array Rotation Function

**Question:**
What will be the output of the given code snippet? Analyze the given choices and select the correct option.
```javascript
// Assume solve([44, 1, 22, 111], 5);
function solve(arr, rotations) {
    if (rotations === 0) return arr;
    else for (let i = 0; i < rotations; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }
    return arr;
}
```

---

### Question 8 – Java Method Overriding (private final flipper)

**Question:**
Consider the given code. What will be the output of the code? Select the correct answer from the given choices.
```java
class Children {
    private final void flipper() {
        System.out.println("Children");
    }
}

public class Parent extends Children {
    public final void flipper() {
        System.out.println("Parent");
    }

    public static void main(String[] args) {
        new Parent().flipper();
    }
}
```

**Options seen (partial):**
- Children
- Parent
- Children Parent
- Parent Children

---

### Question 7 – Interface/Class Naming Conflict

**Question:**
Assume that Daisy has written the given code in her Java labs. She is trying to extend the interfaces. What will be the output that the given code will return? Select the correct option from the given choices.
```java
interface A {
    void method1();
    void method2();
}

interface B extends A {
    void method3();
}

class A implements B {
    public void method1() {
        System.out.println("Method 1");
    }
    public void method2() {
        System.out.println("Method 2");
    }
    public void method3() {
        System.out.println("Method 3");
    }
}
```

**Options seen (partial):**
- Error
- *(other options not fully captured)*
- A
- B

---