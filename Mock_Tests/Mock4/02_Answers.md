# Mock4 — Answer Key

---

**Q1 — Answer: A. button**
`btn.tagName` returns the tag name in **uppercase** (`"BUTTON"`), and `.toLowerCase()` converts it to `"button"`. This is standard DOM behavior — `tagName` is always uppercase for HTML elements regardless of how the tag was written in markup.

**Q2 — Answer: B. 5, 10, 15**
`.map()` applies `divideByTwo` to each element: [10,20,30] → [5,10,15].

**Q3 — Answer: B. `<header>`**
The HTML5 `<header>` element is the semantic tag for introductory content and navigational links at the top of a page or section — improving both SEO and accessibility. `<head>` is a document metadata container (not visible content), and `<top>`/`<heading>` aren't valid HTML5 elements.

**Q4 — Answer: A. `border-radius: 50%;`**
Setting `border-radius` to 50% on a square element makes all four corners curve to meet at the center, producing a perfect circle — the standard CSS technique for circular avatars.

**Q5 — Answer: A**
```java
class Vehicle { void start() {} }
class Bike extends Vehicle { void start() { System.out.println("Bike started"); } }
```
`extends` is the correct Java keyword for class inheritance. `implements` (B) is for interfaces, not classes; `inherits` (C) and `super Vehicle` (D) aren't valid Java syntax.

**Q6 — Answer: C. It intercepts and drops SQL injection and XSS payloads before they reach application servers.**
This is the WAF's core *advantage* — actively blocking malicious payloads. The other three options (latency, SSL cert management overhead, single point of failure risk) are genuine structural trade-offs/limitations of inline proxy architecture, not advantages.

**Q7 — Answer: A. Book is the class definition; myBook is an instantiated object instance of that class.**
`Book myBook = new Book("Java Basics");` — `Book` is the class (blueprint), and `myBook` is a specific object instance created via `new`. Standard class/instance relationship.

**Q8 — Answer: A. Method Overloading (Compile-time Polymorphism)**
Two methods with the same name (`calculateArea`) but different parameter lists in the same class, resolved at compile time based on argument types/count — this is overloading, not overriding (which requires inheritance and a subclass).

**Q9 — Answer: A. 401 Unauthorized**
Missing or invalid authentication credentials (no valid JWT provided at all) is the textbook case for 401. 403 (Forbidden) would apply if the token *was* provided and valid but the user lacked permission for that specific resource — different scenario from this question.

**Q10 — Answer: B. Maintain explicit versioned API endpoints (e.g., routing requests via /v1/ and /v2/).**
URL-based API versioning allows old clients to keep using `/v1/` unaffected while new clients adopt `/v2/` — directly solving "breaking changes without disrupting legacy apps." The other options either break clients immediately or take a destructive/unsupported approach.

**Q11 — Answer: B. Artifact Repository**
An artifact repository (e.g., Nexus, Artifactory, JFrog) is purpose-built for storing and versioning build outputs like `.jar` files and container image layers across environments.

**Q12 — Answer: C. OrderID**
A Primary Key needs to be a stable, unique identifier for each row. CustomerName and ShippingAddress aren't guaranteed unique per order; OrderDate isn't unique either (multiple orders can share a date). OrderID is the purpose-built unique identifier.

**Q13 — Answer: B. Non-repeatable Read**
Transaction A reads the same row twice within one transaction and gets two different values because Transaction B committed a change in between — the exact definition of a non-repeatable read (distinct from dirty read, which involves reading *uncommitted* data).

**Q14 — Answer: B. Analyze process lists, slow query logs, and APM performance metrics.**
Best-practice incident response starts with diagnosis before remediation — identify *what's* causing the CPU spike (e.g., a runaway query) before taking destructive or resource-altering action.

**Q15 — Answer: B. Containing breaches by restricting unauthorized lateral movement across workload segments.**
Micro-segmentation's primary security purpose is breach containment — limiting how far an attacker can move if they compromise one workload.

**Q16 — Answer: B. Encapsulating Security Payload (ESP)**
ESP provides confidentiality (encryption) **and** authentication/integrity. AH (option A) provides authentication/integrity only — no encryption — so it doesn't satisfy "data encryption alongside authentication and integrity."

**Q17 — Answer: A. Site-to-Site VPN**
Connecting multiple fixed office locations (50 branches) to central infrastructure on a permanent basis is the definition of site-to-site VPN — as opposed to remote-access VPN, which is for individual users/devices connecting temporarily.

**Q18 — Answer: B. UDP**
Real-time streaming that tolerates dropped frames but can't tolerate retransmission-induced buffering delays is the classic UDP use case — no delivery guarantees, minimal overhead, lowest latency.

**Q19 — Answer: B. Network Layer (Layer 3)**
IP-address-based routing is a Network Layer (Layer 3) function — this is literally what the IP protocol and routers operate on. Data Link Layer (Layer 2) uses MAC addresses instead.

**Q20 — Answer: B. Stateful Packet Inspection (SPI) Firewall**
Tracking TCP connection state transitions (SYN → SYN-ACK → ACK) to dynamically enforce policy is exactly what a stateful firewall does, as opposed to a stateless filter which evaluates each packet in isolation.

**Q21 — Answer: C. IaaS**
Managing raw infrastructure primitives (VPCs, block storage, compute instances) via an API is the defining characteristic of Infrastructure as a Service.

**Q22 — Answer: B. Private Cloud**
Infrastructure hosted exclusively on dedicated (non-shared) hardware for a single organization is a private cloud, regardless of regulatory context.

**Q23 — Answer: A. Hypervisor**
The hypervisor is the software layer that virtualizes physical hardware to run multiple independent guest OS instances — this is its defining function.

**Q24 — Answer: C. Applying operating system patches on guest VM instances**
Under the AWS Shared Responsibility Model, AWS secures the underlying infrastructure ("security **of** the cloud" — facilities, hypervisor, physical hardware), while the customer is responsible for what runs inside their VMs ("security **in** the cloud" — including guest OS patching).

**Q25 — Answer: B. By dynamically reallocating compute resources from a shared physical hardware pool based on real-time load**
This is the definition of elastic resource pooling — capacity is reassigned on-demand from a shared pool rather than requiring fixed, manually-provisioned hardware per customer.

**Q26 — Answer: B. The message undergoes double transformation (+6 total shift), producing garbled text.**
Correct decryption of a +3 Caesar cipher requires a -3 shift (reversing the original transformation). Applying +3 again instead compounds the shift to +6 total, moving characters further away from the original plaintext rather than restoring it — producing garbled output, not a crash or automatic correction.

**Q27 — Answer: A. EAP-TLS**
EAP-TLS is the only common EAP method requiring **mutual** certificate-based authentication — both server *and* client present X.509 certificates. PEAP and EAP-TTLS typically use only a server-side certificate (with client authentication happening via username/password inside the resulting tunnel).

**Q28 — Answer: B**
```sql
SELECT LastName, LENGTH(LastName) - LENGTH(REPLACE(LastName, 'a', '')) FROM Employees;
```
`LENGTH(original) - LENGTH(with target character stripped)` correctly counts character occurrences. `COUNT()` (option A) counts matching *rows*, not character occurrences within a string.

**Q29 — Answer: B**
```sql
SELECT D.DeptName, E.EmpName FROM Departments D LEFT JOIN Employees E ON D.DeptID = E.DeptID;
```
A `LEFT JOIN` from `Departments` (the "left"/primary table) preserves **all** department rows regardless of whether any employee is assigned — exactly satisfying "departments with zero assigned employees must still appear." `INNER JOIN` would exclude empty departments; `RIGHT JOIN` would instead preserve all employees, not all departments.

**Q30 — Answer: B. PRINT scores[2]**
In a 0-indexed array, the 1st element is at index 0, so the **3rd** element is at index **2**. `scores[2]` = 90, the correct 3rd score. `scores[3]` (option A) would retrieve the 4th element (95).

**Q31 — Answer: B. code12** *(see note on ambiguity below)*
The pattern `[a-zA-Z0-9]{6}` requires a run of exactly 6 alphanumeric characters.
- A. `pass1` → only 5 characters → fails
- B. `code12` → exactly 6 alphanumeric characters → **matches**
- C. `a1#b2c` → the `#` breaks any run of 6 consecutive alphanumeric characters → fails
- D. `1234567` → 7 digits — ⚠️ note that this regex has **no `^`/`$` anchors** (unlike the equivalent question in TechMock1), so technically an unanchored match could find *any* 6-digit substring within the 7-digit string and report a match. If your test environment treats `matches` as requiring the **entire string** to match the pattern (common default in many languages/pseudocode conventions), D fails since it's 7 characters, not 6, and B is the clean, unambiguous answer. Go with **B** as the intended answer, but be aware D could be defensible depending on how strictly "matches" is interpreted in the actual test engine.

**Q32 — ⚠️ Option/code mismatch — Correct value: 16** *(verified by execution)*
```
x=6, y=10
Iteration 1 (z=1): y = 10+4 = 14 → y = (14 & 12) + 6 = 12 + 6 = 18
Iteration 2 (z=2): y = 18+4 = 22 → y = (22 & 12) + 6 = 4 + 6 = 10
Print x + y = 6 + 10 = 16
```
The four answer options captured in the source screenshot for this question were actually the *regex validation strings* from the previous question (pass1, code12, a1#b2c, 1234567) rather than numeric values — a clear copy/paste or rendering error in the source material. **There is no valid option to select here; the correct computed answer is 16.** If this appears on your actual exam with proper numeric options, trust the trace method demonstrated here rather than this specific number, since values are often randomized between attempts.

**Q33 — ⚠️ Option/code mismatch — Correct value: 4** *(verified by execution)*
```
arr = [[3,5],[4,8]]
arr[0][1] = arr[1][0] & arr[0][0] = 4 & 3 = 0   (100 & 011 = 000)
if (arr[0][0] > arr[0][1]) → 3 > 0 → True
    arr[0][0] = 3 + 1 = 4
Print arr[0][1] + arr[0][0] = 0 + 4 = 4
```
**The correct computed answer is 4**, but none of the given options (14, 16, 20, 24) match. This confirms a genuine content bug in the source material for this question — the options appear to belong to a different/unrelated version of this question with different array values. Trust the trace method; don't memorize this specific mismatch.

**Q34 — Answer: B. Calculates the sum of consecutive integers from 1 to n**
Base case returns 1 when n=1, and recursively computes `n + sumSeries(n-1)` — this is cumulative addition, not multiplication, so it computes 1+2+3+...+n (not factorial, which would multiply).

**Q35 — Answer: C. 18** *(verified by execution)*
Trace: a=2, b=4, c=5.
- `if ((a+b) < c)` → `6 < 5` → **False** → else: `b = a+c = 2+5 = 7`
- `c = a+b = 2+7 = 9`
- `return a+b+c` = 2+7+9 = **18**

**Q36 — Answer: B. 17** *(verified by execution)*
Trace: p=3, q=6, r=4.
- `p^q` = 3^6 = 5 (011 ^ 110 = 101)
- `if ((p^q) > r)` → `5 > 4` → **True** → `p = p+r = 3+4 = 7`
- `Print p+q+r` = 7+6+4 = **17**

**Q37 — ⚠️ Option/code mismatch — Correct value: 9** *(verified by execution)*
```
a=2, b=3, c=4
if ((a+b+c) < 5) → (2+3+4) < 5 → 9 < 5 → False, skip if-block
return a+b+c = 2+3+4 = 9
```
**The correct computed answer is 9**, but the given options (15, 17, 21, 25) don't include it — and notably, these are the *exact same four options* as Question 36, suggesting the options weren't regenerated for this question and were copy-pasted from the adjacent one. Trust the trace method; the correct answer here is 9.

**Q38 — Answer: A. System Bus**
The system bus is the physical pathway carrying data, addresses, and control signals between the CPU and system memory (and other components) on the motherboard.

**Q39 — Answer: B. NVMe**
NVMe (Non-Volatile Memory Express) is the modern protocol designed specifically for SSDs to communicate directly over PCIe lanes, offering far higher throughput than legacy SATA or IDE interfaces.

**Q40 — Answer: A. File System Access Control**
File permission management (read/write/execute across users/groups) is the core function of the OS's file system access control subsystem (e.g., Unix file modes, ACLs) — not memory management, CPU scheduling, or device drivers.

**Q41 — Answer: B. Apply an entrance animation and configure Effect Options to 'By Paragraph'**
Setting an entrance animation's Effect Options to "By Paragraph" makes each bullet point appear individually on successive clicks, without needing to animate each one manually.

**Q42 — Answer: A. Ctrl + Shift + ;**
In Excel, `Ctrl + ;` (semicolon) inserts the current **date**, while `Ctrl + Shift + ;` inserts the current **time**. Since the question specifically asks for time, the answer is A.

**Q43 — Answer: C. Smartphone**
```
MAX(B2:B5) = MAX(150, 450, 200, 80) = 450  (Smartphone's Sales)
MATCH(450, B2:B5, 0) = position 2
INDEX(A2:A5, 2) = "Smartphone"
```
**Verified computationally** — Smartphone has the highest sales value (450), so the formula returns "Smartphone".

**Q44 — Answer: A. Principle of Least Privilege**
The Principle of Least Privilege is the standard security concept mandating that users/processes be granted only the minimum access rights necessary to perform their required tasks — directly matching the question's description.

---

## Quick Reference Table

| Q | Ans | Q | Ans | Q | Ans | Q | Ans |
|---|---|---|---|---|---|---|---|
| 1 | A | 12 | C | 23 | A | 34 | B |
| 2 | B | 13 | B | 24 | C | 35 | C |
| 3 | B | 14 | B | 25 | B | 36 | B |
| 4 | A | 15 | B | 26 | B | 37 | 9 ⚠️ (no matching option) |
| 5 | A | 16 | B | 27 | A | 38 | A |
| 6 | C | 17 | A | 28 | B | 39 | B |
| 7 | A | 18 | B | 29 | B | 40 | A |
| 8 | A | 19 | B | 30 | B | 41 | B |
| 9 | A | 20 | B | 31 | B | 42 | A |
| 10 | B | 21 | C | 32 | 16 ⚠️ (no matching option) | 43 | C |
| 11 | B | 22 | B | 33 | 4 ⚠️ (no matching option) | 44 | A |

⚠️ = Source material has an options/code mismatch for this question — the value shown is the correctly computed answer, not a listed choice.