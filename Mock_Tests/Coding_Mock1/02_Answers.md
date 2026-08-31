# Mock Test 3 — Answer Key

> Original source numbering preserved. Several questions repeat verbatim under different numbers (noted below) — same answer applies to all instances.

---

**Question 1 — Answer: B. 10**
(20 & 8) = 0, so p + q + r = 1 + 0 + 9 = 10.

**Question 2 — Answer: B. 21**
Inner conditions fail, so b remains unchanged.

**Question 3 — Answer: C. 56**
b becomes 14, c = 35, total = 56.

**Question 4 — Answer: A. 0.0**
Bitwise AND with 10 clears all bits.

**Question 5 — Answer: D. 23**
Condition true, b updated to 12.

**Question 6 — Answer: C. 87**
Sequential execution gives sum = 87.

**Question 7 — Answer: C. 34**
Final scalar value becomes 17, doubled to 34.

**Question 8 — Answer: B. Computes sum of number and predecessors**
Recursive addition forms a cumulative sum.

**Question 9 — Answer: A. 6,7,8**
map() applies function to each element.

**Question 10 — Answer: D**
`UPDATE orders SET status = 'Shipped' WHERE order_date < '2023-01-01';`
Updates only the orders with a date before 2023-01-01 and sets status to 'Shipped'.

**Question 11 — Answer: C**
`SELECT column_name, aggregate_function(column_name) FROM table_name WHERE column_name = operator value GROUP BY column_name`
GROUP BY must be used with aggregate functions like COUNT(), SUM(), etc., to summarize grouped data.

**Question 12 — Answer: B. Creating an index on the Email column**
Indexing the Email column allows the database to quickly locate rows, greatly improving query performance.
*(Same answer applies to Question 35, an identical repeat.)*

**Question 13 — Answer: A**
```html
<audio autoplay>
  <source src="test.mp3">
  <source src="test.ogg">
</audio>
```
The autoplay attribute plays the audio automatically when the page loads.

**Q.14 — Answer: A. Calculates the factorial of input_number**
The function recursively multiplies the number by the factorial of its predecessor, which defines the factorial operation.

**Q.15 — Answer: C. My Value**
The code creates a custom attribute myAttribute with value "My Value" and then retrieves it using getAttribute(), printing "My Value".

**Q16 — Answer: C. When the user clicks on ESC before the page loads**
The onabort event is triggered when loading of an image is interrupted, such as pressing ESC before the image fully loads.
*(Same answer applies to Question 32, an identical repeat.)*

**Q17 — Answer: C. SELECT * FROM [table] ORDER BY [tbl_clm] ASC;**
The ORDER BY [column] ASC clause sorts the result set in ascending order.
*(Same answer applies to Question 25, an identical repeat.)*

**Q18 — Answer: A. 15**
The function adds 3 to each value of i (1, 2, 3), giving 4 + 5 + 6 = 15.
*(Same answer applies to Question 26, an identical repeat.)*

**Q19 — Answer: A**
Employee has "Is-A" relationship with Person and "Has-A" relationship with Address.
Inheritance (extends) defines an Is-A relationship, while including a class instance defines a Has-A (composition) relationship.
*(Same answer applies to Question 30 and Question 33, identical repeats.)*

**Q23 — Answer: B. Parent**
The flipper() method in Children is private, so it is not inherited; the Parent class method is called, printing "Parent".
*(Same answer applies to Question 37, an identical repeat.)*

**Q24 — Answer: A**
```sql
CREATE TRIGGER trg_DeleteEmployee
AFTER DELETE
ON Employees
FOR EACH ROW
INSERT INTO Auditing (EmpID, DeletedOn)
VALUES (OLD.EmpID, NOW());
```
Using AFTER DELETE on Employees and OLD.EmpID ensures that each deleted record is logged with the deletion timestamp in the Auditing table.
*(Same answer applies to Question 27 and Question 28, identical repeats.)*

**Q29 — Answer: B. A comment for incompatible browsers**
The text inside the `<canvas>` tag is displayed only if the browser does not support HTML5 Canvas, acting as fallback content for incompatible browsers.

**Q34 — Answer: A. 8, 21, 7, 23**
The map() method applies myFunction to each element, adding 5, producing [8, 21, 7, 23].

**Q36 — Answer: C. Names containing the alphabet 'a' anywhere**
The '%a%' pattern in SQL LIKE matches strings that contain 'a', followed by any sequence of characters.

**Question 3 (second question bank) — Answer: C. 5**
F2() always returns 5; the prior call to F1(21) does not affect its return.

**Question 4 (second question bank) — Answer: B. Static polymorphism**
The class defines two `boilTea` methods with different signatures/return types within the same class — this is method overloading, resolved at compile time (static polymorphism), not overriding.

---

## Quick Reference Table

| Q | Ans | Q | Ans | Q | Ans |
|---|---|---|---|---|---|
| 1 | B | 14 | A | 25 | C (dup of 17) |
| 2 | B | 15 | C | 26 | A (dup of 18) |
| 3 | C | 16 | C | 27 | A (dup of 24) |
| 4 | A | 17 | C | 28 | A (dup of 24) |
| 5 | D | 18 | A | 29 | B |
| 6 | C | 19 | A | 30 | A (dup of 19) |
| 7 | C | 23 | B | 32 | C (dup of 16) |
| 8 | B | 24 | A | 33 | A (dup of 19) |
| 9 | A | | | 34 | A |
| 10 | D | | | 35 | B (dup of 12) |
| 11 | C | | | 36 | C |
| 12 | B | | | 37 | B (dup of 23) |
| 13 | A | | | Q3(2nd) | C |
| | | | | Q4(2nd) | B |