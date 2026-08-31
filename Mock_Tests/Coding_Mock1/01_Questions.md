# Mock Test 3 — Questions Only

> Original source numbering preserved. This source has heavy internal repetition — several questions (SQL trigger/logging, Is-A/Has-A inheritance, onabort event, private-final method overriding, indexing, ORDER BY, increment-by-three loop) are repeated 2–3 times under different question numbers. Duplicates are marked inline. A few numbers (e.g., Q20–22) were not captured in the source screenshots.

---

### Question 1 – Pseudo-Code Tracing (Bitwise AND)

**Question:**
Initial values: p = 1, q = 8, r = 9
```
q = (11 + 9) & q
p = p + q
Print p + q + r
```

**Options:**
A. 6  
B. 10  
C. 18  
D. 24  

---

### Question 2 – Pseudo-Code Tracing

**Question:**
Values: a = 2, b = 8, c = 8
```
c = 9 + a

if ((4 + 10 + a) < (7 + c))
    if ((7 + 6) < c)
        if ((5 + c) < (b + 5))
            b = a + b

Print a + b + c
```

**Options:**
A. 17  
B. 21  
C. 22  
D. 23  

---

### Question 3 – Pseudo-Code Tracing

**Question:**
Values: a = 7, b = 4, c = 10
```
if ((b + c) < (c + a + b))
    b = b + c
    c = (b + b) + a

Print a + b + c
```

**Options:**
A. 32  
B. 35  
C. 56  
D. 28  

---

### Question 4 – Array / Bitwise AND

**Question:**
Array: arr = {{1,2},{2,4}}
```
arr = arr + arr & arr
arr = (3 + 7) & arr
Print arr + arr
```

**Options:**
A. 0.0  
B. 4.0  
C. 8.0  
D. 16.0  

---

### Question 5 – Pseudo-Code Tracing

**Question:**
Values: a = 1, b = 2, c = 10
```
if (((a+b)+(b+c)) > (a+b+c))
    if (a < b)
        b = b + c

Print a + b + c
```

**Options:**
A. 9  
B. 13  
C. 15  
D. 23  

---

### Question 6 – Pseudo-Code Tracing

**Question:**
Values: a = 3, b = 8, c = 6
```
c = c + a
b = (c + c) + c
c = (b + b) + a
Print a + b + c
```

**Options:**
A. 37  
B. 51  
C. 87  
D. 39  

---

### Question 7 – Array / Bitwise XOR

**Question:**
Array: arr = {{0,1},{4,1}}
```
arr = (4 + 1) + arr
arr = 2 + arr
arr = (arr ^ 1) + arr
Print arr + arr
```

**Options:**
A. 19  
B. 17  
C. 34  
D. 9  

---

### Question 8 – Recursive Pseudo-Code

**Question:**
A recursive function returns `number + func(number - 1)` if `number > 1`.

**Options:**
A. Calculates factorial  
B. Computes sum of number and predecessors  
C. Multiplies predecessors  
D. Finds square  

---

### Question 9 – JavaScript Array Method

**Question:**
```javascript
var my_arr = [1,2,3];
function myfunction(elem) {
  return elem + 5;
}
document.write(my_arr.map(myfunction));
```

**Options:**
A. 6,7,8  
B. 3,2,1  
C. 16  
D. True  

---

### Question 10 – SQL UPDATE Query

**Question:**
Update the status of orders placed before January 1, 2023 to 'Shipped'. Which SQL query correctly performs this update?

**Options:**
A. `UPDATE orders SET status = 'Delivered' WHERE order_date < '2023-01-01';`  
B. `UPDATE orders SET status = 'Shipped' WHERE order_date > '2023-01-01';`  
C. `UPDATE orders SET status = 'Shipped' WHERE status = '2023-01-01';`  
D. `UPDATE orders SET status = 'Shipped' WHERE order_date < '2023-01-01';`  

---

### Question 11 – SQL GROUP BY Clause

**Question:**
Which of the following shows the correct usage of the GROUP BY clause?

**Options:**
A. `SELECT column_name1, column_name2 FROM table_name WHERE column_name = operator value GROUP BY column_name1`  
B. `SELECT * FROM table_name WHERE column_name = operator value GROUP BY column_name`  
C. `SELECT column_name, aggregate_function(column_name) FROM table_name WHERE column_name = operator value GROUP BY column_name`  
D. `SELECT * FROM table_name GROUP BY column_name`  

---

### Question 12 – SQL Query Optimization

**Question:**
Queries searching customers by Email are slow in a table with over 5 million rows. Which technique improves performance the most?

**Options:**
A. Adding more rows to the table  
B. Creating an index on the Email column  
C. Using a Foreign Key on the Email column  
D. Denormalizing the table  

*(Repeated as Question 35 with identical content.)*

---

### Question 13 – HTML Audio Autoplay

**Question:**
Which code correctly implements autoplay for an audio element?

**Options:**
A.
```html
<audio autoplay>
  <source src="test.mp3">
  <source src="test.ogg">
</audio>
```
B. `<audio controls><source src="test.mp3"></audio>`  
C. `<audio src="test.mp3"></audio>`  
D. `<audio autoplay controls src="test.mp3"></audio>`  

---

### Q.14 – Recursive Factorial Pseudocode

**Question:**
```
FUNCTION cal(number):
    IF number is 0 OR number is 1
        RETURN 1
    ELSE
        RETURN some_operation(number, cal(number - 1))
    END IF
END FUNCTION cal

result = cal(input_number)
PRINT result
```

**Options:**
A. Calculates the factorial of input_number  
B. Computes the sum of input_number and its predecessors  
C. Multiplies input_number by the product of its predecessors  
D. Determines the square of input_number  

---

### Q.15 – JavaScript setAttributeNode

**Question:**
```html
<body>
<button onclick="myFunction(this);">Test attribute!</button>
<script type="text/javascript">
function myFunction(button) {
    var newAttr = document.createAttribute("myAttribute");
    newAttr.value = "My Value";
    button.setAttributeNode(newAttr);
    document.write(button.getAttribute("myAttribute"));
}
</script>
</body>
```

**Options:**
A. False  
B. Test attribute!  
C. My Value  
D. Nothing will happen  

---

### Q16 – HTML onabort Event

**Question:**
```html
<html>
<head>
<script language="JavaScript">
  function myFunction() { alert("My Function is called"); }
</script>
</head>
<body>
  <img src="http://www.example.com/mylogo.png" onabort="myFunction()">
</body>
</html>
```
When is `myFunction()` triggered?

**Options:**
A. When the page is closed  
B. When the page is loaded  
C. When the user clicks on ESC before the page loads  
D. When the page is refreshed  

*(Repeated as Question 32 with identical content.)*

---

### Q17 – SQL ORDER BY (Ascending)

**Question:**
Which statement retrieves items in ascending order from a table in SQL?

**Options:**
A. `SELECT * FROM [table] ORDER BY [tbl_clm];`  
B. `SELECT * FROM [table] SORT BY [tbl_clm];`  
C. `SELECT * FROM [table] ORDER BY [tbl_clm] ASC;`  
D. `SELECT * FROM [table] GROUP BY [tbl_clm] ASC;`  

*(Repeated as Question 25 with identical content.)*

---

### Q18 – Pseudocode Function Loop

**Question:**
```
FUNCTION incrementByThree(n)
  RETURN n + 3
END FUNCTION

total = 0
FOR i = 1 TO 3
  total = total + incrementByThree(i)
END FOR
DISPLAY total
```

**Options:**
A. 15  
B. 12  
C. 18  
D. 9  

*(Repeated as Question 26 with identical content.)*

---

### Q19 – Java Is-A / Has-A Relationship

**Question:**
```java
class Employee extends Person {
    Address address;
}
```

**Options:**
A. Employee has "Is-A" relationship with Person and "Has-A" relationship with Address  
B. Employee has "Is-A" relationship with Address and "Has-A" relationship with Person  
C. Employee has "Is-A" relationship with Person and Address  
D. Employee has "Has-A" relationship with Address and Person  

*(Repeated as Question 30 and Question 33 with identical content.)*

---

### Q23 – Java Method Overriding (private final)

**Question:**
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

**Options:**
A. Children  
B. Parent  
C. Children Parent  
D. Parent Children  

*(Repeated as Question 37 with identical content.)*

---

### Q24 – SQL Trigger for Automatic Logging

**Question:**
A company wants to automatically log whenever an employee record is deleted.

**Schema:**
```sql
CREATE TABLE Employees (
  EmpID INT PRIMARY KEY,
  Name VARCHAR(50)
);

CREATE TABLE Auditing (
  LogID INT PRIMARY KEY AUTO_INCREMENT,
  EmpID INT,
  DeletedOn DATETIME
);
```

**Options:**
A.
```sql
CREATE TRIGGER trg_DeleteEmployee
AFTER DELETE
ON Employees
FOR EACH ROW
INSERT INTO Auditing (EmpID, DeletedOn)
VALUES (OLD.EmpID, NOW());
```
B.
```sql
CREATE TRIGGER trg_DeleteEmployee
BEFORE DELETE
ON Employees
FOR EACH ROW
INSERT INTO Auditing (EmpID, DeletedOn)
VALUES (NEW.EmpID, NOW());
```
C.
```sql
CREATE TRIGGER trg_DeleteEmployee
AFTER INSERT
ON Employees
FOR EACH ROW
INSERT INTO Auditing (EmpID, DeletedOn)
VALUES (NEW.EmpID, NOW());
```
D.
```sql
CREATE TRIGGER trg_DeleteEmployee
AFTER DELETE
ON Auditing
FOR EACH ROW
INSERT INTO Employees (EmpID)
VALUES (OLD.EmpID);
```

*(Repeated as Question 27 and Question 28 with identical content.)*

---

### Q29 – HTML5 Canvas Fallback Content

**Question:**
```html
<canvas id="myCanvas">HTML5 Canvas not supported.</canvas>
```
What does the text inside the `<canvas>` tag represent?

**Options:**
A. A comment for the user  
B. A comment for incompatible browsers  
C. A comment for Internet Explorer and Opera  
D. All of the given options  

---

### Q34 – JavaScript Array Method (variant)

**Question:**
```javascript
var my_arr = [3, 16, 2, 18];
function myFunction(elem) {
  return elem + 5;
}
document.write(my_arr.map(myFunction));
```

**Options:**
A. 8, 21, 7, 23  
B. 3, 16, 2, 18  
C. False  
D. True  

---

### Q36 – SQL LIKE Pattern Matching

**Question:**
```sql
SELECT emp_name FROM employees WHERE emp_name LIKE '%a%';
```

**Options:**
A. Names starting with the alphabet 'a'  
B. Names ending with the alphabet 'a'  
C. Names containing the alphabet 'a' anywhere  
D. Names that do not contain the alphabet 'a'  

---

### Question 3 (second question bank) – Method Call Independence

**Question:**
Code calls `t.F1(21)` and then prints `t.F2()`, where `F2()` simply returns 5.

**Options:**
A. 21  
B. 9  
C. 5  
D. 0  

---

### Question 4 (second question bank) – Polymorphism in TeaMac Code

**Question:**
```java
class tmac {
  // Method to choose tea based on user input
  public Coffee boilTea(ChooseTea Choosed) {
    switch (Choosed) {
      case "GreenTea":
        return "BoiledGreenTea";
      default:
        return "DefaultTea";
    }
  }

  // Method to create a list of boiled teas
  public List boilTea(ChooseTea Choosed) {
    List teas = new ArrayList(number);
    for (int i = 0; i < number; i++) {
      teas.add(boilTea(Choosed));
    }
    return teas;
  }
}
```
Which of the following correctly describes the polymorphism demonstrated in the pseudocode?

**Options:**
A. Dynamical polymorphism – runtime polymorphism, occurs if the method boilTea(ChooseTea) is overridden in a subclass.  
B. Static polymorphism – compile-time polymorphism due to method overloading (boilTea has two versions in the same class).  
C. Late Binding  
D. Method Overriding  

---