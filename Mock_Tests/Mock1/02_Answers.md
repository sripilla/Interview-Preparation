# Mock Test — Answer Key

> **Note on confidence:** Every answer below was independently worked out from first principles (tracing code/pseudocode, applying definitions, etc.) rather than copied from any highlighting in the original screenshots. Two items — **Q4** and **Q6** — are flagged as lower-confidence because the source screenshots didn't capture enough information (a missing shape image for Q4, and genuinely overlapping distractors for Q6) to be 100% certain. Please verify those two against your course material.

---

## Section 1

**Q1. Answer: C — `myFunction(this);`**
`getAttribute("onclick")` returns the raw attribute string exactly as written in the HTML, not a boolean result of running the function.

**Q2. Answer: B — 8, 21, 7, 23**
`.map()` applies `elem + 5` to every item: 3→8, 16→21, 2→7, 18→23.

**Q3. Answer: B — `<details></details>`**
The `<details>` element (often paired with `<summary>`) creates a native expand/collapse widget.

**Q4. Answer: Unable to confirm ⚠️**
The source screenshot didn't include the actual target shape image, only the two CSS snippets (A and B) plus two missing options (C, D). Without seeing the shape, this can't be determined reliably — please check this one against the original test.

**Q5. Answer: A**
```java
class Animal { void sound() { System.out.println("Animal sound"); } }
class Dog extends Animal { void sound() { System.out.println("Dog barks"); } }
```
This is valid Java inheritance syntax (`extends` + method override). Option B uses invalid syntax (`void extends sound()`), and Option C uses `inherits`, which isn't a Java keyword.

**Q6. Answer: D — A and C (low confidence ⚠️)**
This one is genuinely ambiguous from the phrasing given — A, B, and C are all commonly cited as real disadvantages of this proxy/firewall + web-filter architecture in standard security material, which makes "which is NOT a disadvantage" hard to pin down without the original source. My best read is that B (the trust-relationship risk) is the "textbook" disadvantage being tested, making D the intended answer — but treat this with caution and cross-check your course notes.

**Q7. Answer: A**
`Car` is the class (blueprint); `myCar` is an object created from it via `new Car(...)` — a textbook class/instance relationship.

**Q8. Answer: A — Static polymorphism**
Two `boilTea()` methods with different parameter/return types on the same class is **method overloading**, resolved at compile time — i.e., static polymorphism (not overriding, which would be dynamic/runtime).

**Q9. Answer: B — 404**
404 = Not Found, the standard HTTP status for a missing/nonexistent endpoint.

**Q10. Answer: C — Include the version number in the URL path (e.g., /api/v2/resource)**
URL path versioning is the most widely used and recommended approach for handling breaking changes while keeping old clients working against the old version.

**Q11. Answer: C — Artifact Management**
Storing versioned, immutable build outputs (JARs, Docker images, npm packages) for later deployment is exactly what an artifact repository (e.g., Nexus, Artifactory) does.

**Q12. Answer: C — EmployeeID**
A Primary Key must be unique and stable over time. `PhoneNumber` can change, `Name` isn't guaranteed unique — `EmployeeID` is the correct choice.

**Q13. Answer: B — Lost Update**
Two concurrent updates on the same row, where only one survives instead of both applying, is the classic definition of a Lost Update.

**Q14. Answer: B — Analyze the network traffic and logs**
Best practice troubleshooting starts with diagnosis (logs/traffic analysis) before jumping to remediation actions like restarting or resizing.

---

## Section 2: Fundamentals of Networking

**Q15. Answer: B — Limiting the spread of attacks**
Network segmentation contains breaches to a smaller zone rather than letting them propagate across the whole network.

**Q16. Answer: C — Encapsulating Security Payload (ESP)**
ESP provides both confidentiality (encryption) *and* integrity/authentication, and supports tunnel mode. AH (option A) provides integrity/authentication only — no encryption.

**Q17. Answer: A — Remote-access VPN**
A single remote employee connecting into the corporate network is the textbook use case for remote-access VPN (vs. site-to-site, which links two networks/offices).

**Q18. Answer: C — DNS**
DNS queries typically run over UDP: fast, connectionless, and tolerant of occasional packet loss, but sensitive to the extra delay retransmission/connection setup (TCP) would add.

**Q19. Answer: C — Transport Layer**
Error-checking and reliable, ordered delivery (e.g., via TCP) is a Transport Layer (Layer 4) responsibility.

**Q20. Answer: A — A stateful packet inspection firewall**
Stateful firewalls track connection state (session integrity) while still filtering on IP/port/protocol — all in one device, without needing separate application-layer appliances.

**Q21. Answer: C — Software as a Service**
Hassle-free access to productivity tools over the internet, with no IT management overhead, is the definition of SaaS.

**Q22. Answer: C — Abstraction layer that logically unifies disparate data sources**
Logical (not physical) integration of legacy and new data sources for simultaneous access is what a data abstraction/virtualization layer provides.

**Q23. Answer: B — Private Cloud**
For highly sensitive data, a private cloud (dedicated infrastructure) is generally considered the most secure deployment model.

**Q24. Answer: A — Virtualization**
Virtualization (via a hypervisor) is what allows multiple OS instances to run on one physical machine.

**Q25. Answer: C — IAAS**
IaaS gives the customer control over the OS and network configuration while the provider manages the underlying physical infrastructure.

**Q26. Answer: C — By ensuring a global-scale, reliable, and resilient storage solution**
Resource pooling combines storage from multiple vendors/devices into a single elastic pool, enabling scalable, resilient storage delivery.

**Q27. Answer: B — The decryption process incorrectly uses the encryption key, leading to incorrect character mapping**
A substitution cipher requires the *inverse* mapping to decrypt; if decryption reuses the encryption key/map directly instead of inverting it, some characters will map incorrectly.

**Q28. Answer: D — PEAP**
PEAP (Protected EAP) only requires a server-side certificate to build a secure TLS tunnel; the client authenticates inside that tunnel (commonly via username/password), simplifying client-side certificate management. EAP-TLS, by contrast, requires certificates on both ends.

---

## Section 3

**Q29. Answer: D**
```sql
SELECT FirstandLastName,
LENGTH(FirstandLastName) - LENGTH(REPLACE(FirstandLastName, 'm', ''))
FROM StudentDetails;
```
`LENGTH(original) - LENGTH(with target char removed)` correctly counts occurrences of a character. `COUNT()` would only count non-null rows, not character occurrences — and SQL syntax requires `SELECT ... FROM ...`, not `FROM ... SELECT ...` (which rules out A and C).

**Q30. Answer: C**
```sql
SELECT E.StudentName, M.Mark
FROM StudentDetails E
LEFT JOIN StudentMark M ON E.StudentId = M.StudentId;
```
This is valid SQL LEFT JOIN syntax that preserves all `StudentDetails` rows even when there's no matching mark record. Options A and B use invalid/garbled syntax ("LEFT JOIN GROUP BY... IN").

**Q31. Answer: A**
```
ARRAY ages[5] = [25, 30, 22, 28, 35]
PRINT ages[2]
```
Direct literal initialization is the standard, concise way to declare and populate the array; with 1-based indexing, `ages[2]` = 30, the second element. (Option B reaches the same result but via redundant individual assignments — A is the intended/expected form.)

**Q32. Answer: A — arun32**
The pattern `[a-zA-Z0-9]{6}` requires **exactly 6** alphanumeric characters with no symbols.
- A. `arun32` → 6 characters, all alphanumeric → **matches**
- B. `kkvarun32` → 9 characters → too long, fails
- C. `arun$2` → contains `$` → fails
- D. `arun@2` → contains `@` → fails

**Q33. Answer: D — 65**
Trace: `a=8, b=5, c=6`. Loop runs for c=3 and c=4 (2 iterations):
- **Iter 1:** b=9+5=14 → b=(14+7)+8=29 → b=(29 & 4)+29 = 4+29 = 33
- **Iter 2:** b=9+33=42 → b=(42+7)+8=57 → b=(57 & 4)+57 = 0+57 = 57
- `print a+b` = 8+57 = **65**

**Q34. Answer: B — 4.0**
Trace: `arr = {{1,2},{2,4}}` → arr[0][0]=1, arr[0][1]=2, arr[1][0]=2, arr[1][1]=4
- `arr[0][1] = (2 & 1) & 4 = 0 & 4 = 0`
- `if ((1-0) > (4+0))` → `1 > 4` → **False**, skip block
- `arr[0][0] = 10 & 1 = 0`
- `print arr[1][1] + arr[0][0]` = 4 + 0 = **4**

**Q35. Answer: A — Calculates the factorial of input_number**
Base case returns `1` for `0` or `1` (matching `0! = 1! = 1`), and recursively combines `number` with `cal(number-1)` — the classic recursive factorial pattern.

**Q36. Answer: B — 9**
Trace for a=0, b=2, c=7:
- `if ((0+7+2) < (3+2-0))` → `9 < 5` → **False**, entire if-block (including nested logic) is skipped
- `print a+b+c` = 0+2+7 = **9**

**Q37. Answer: C — 55**
Trace for p=4, q=8, r=6:
- `if ((4+6) > (8-4))` → `10 > 4` → **True**
- `q = (8+7)+8 = 23`
- `if ((4 + 23^4) < (7+4+6))` → `23^4 = 19` → `4+19=23` vs `17` → `23 < 17` → **False** → Else: `r = 5+23 = 28`
- `print p+q+r` = 4+23+28 = **55**

**Q38. Answer: A — 14**
Trace for a=1, b=6, c=7:
- `if ((1+8+7) < (6+1))` → `16 < 7` → **False**, entire if-block skipped
- `return a+b+c` = 1+6+7 = **14**

---

## Section 4: Common Applications and OS

**Q39. Answer: B — System Bus**
The system bus is the physical pathway carrying data, addresses, and control signals between CPU, memory, and I/O devices.

**Q40. Answer: B — Enhanced integrated drive electronics (EIDE)**
This is the correct, standard terminology (EIDE) for the described drive-controller technology.

**Q41. Answer: B — Managing file permissions and access control**
Beyond basic create/delete/manipulate operations, access control and permission management is the standard "additional" file-system function covered in OS textbooks for efficient, secure file organization.

**Q42. Answer: C — Use the 'By Paragraph' animation option**
Applying one animation set to "By 1st Level Paragraph" makes each bullet appear in sequence automatically as you advance, without needing to animate every bullet individually.

**Q43. Answer: A — Alt + Shift + D**
This is the MS Word shortcut to insert the current date field automatically.

**Q44. Answer: C — Mouse**
`MAX(C2:C9)` = 100 (Mouse's Units Sold, the highest in the table) → `MATCH` finds its row position → `INDEX` returns the corresponding product name: **Mouse**.

**Q45. Answer: A — Access control**
After a security breach, prioritizing access control (authentication/authorization) is the most direct way to strengthen OS security and prevent unauthorized access.

---

## Quick Reference Table

| Q | Ans | Q | Ans | Q | Ans | Q | Ans | Q | Ans |
|---|---|---|---|---|---|---|---|---|---|
| 1 | C | 10 | C | 19 | C | 28 | D | 37 | C |
| 2 | B | 11 | C | 20 | A | 29 | D | 38 | A |
| 3 | B | 12 | C | 21 | C | 30 | C | 39 | B |
| 4 | ⚠️ | 13 | B | 22 | C | 31 | A | 40 | B |
| 5 | A | 14 | B | 23 | B | 32 | A | 41 | B |
| 6 | D ⚠️ | 15 | B | 24 | A | 33 | D | 42 | C |
| 7 | A | 16 | C | 25 | C | 34 | B | 43 | A |
| 8 | A | 17 | A | 26 | C | 35 | A | 44 | C |
| 9 | B | 18 | C | 27 | B | 36 | B | 45 | A |

⚠️ = Low confidence, verify against source material.