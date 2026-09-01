# Mock3— Answer Key



**Q1 — Answer: B. Examine application heap usage logs and trace memory allocation profiles.**
Best-practice troubleshooting starts with diagnosis, not remediation. Since CPU is low but memory is spiking (OOM), the investigation should target memory/heap behavior specifically — not blindly increase CPU limits (A, wrong resource), restart everything (C, destroys diagnostic evidence), or reduce capacity (D, makes it worse).

**Q2 — Answer: B. Non-repeatable Read**
Transaction A reads the same row twice within its own transaction and gets two different values (1000, then 800) because Transaction B committed a change in between. This is the textbook definition of a non-repeatable read — distinct from a dirty read (which involves reading *uncommitted* data) or lost update (which involves two writes, not reads).

**Q3 — Answer: C. MedicalRecordID**
A Primary Key should be a stable, non-changing, system-controlled identifier. EmailAddress changes frequently (disqualifying A). SSN, despite seeming unique, carries privacy/legal sensitivity that makes it a poor PK choice in real-world healthcare systems (avoid exposing SSN as a foreign key reference across tables). ZipCode isn't unique per patient. MedicalRecordID is purpose-built as a stable internal identifier.

**Q4 — Answer: A. Continuous Delivery Pipeline Quality Gate**
A "quality gate" in a CI/CD pipeline is exactly the mechanism that blocks a build from progressing (e.g., to containerization) if it fails a defined rule — like a SAST scan finding high-severity vulnerabilities.

**Q5 — Answer: B. Implement Content Negotiation via Accept headers while supporting legacy endpoints.**
This allows old and new clients to request different response formats/versions from the *same* endpoint without breaking existing integrations — the essence of backward-compatible API evolution. The other options either break clients immediately (A, C) or push complexity onto clients in a non-standard way (D).

**Q6 — Answer: B. 403 Forbidden**
401 means "not authenticated at all." 403 specifically means "authenticated, but not authorized for this resource" — matching "valid credentials but lacks elevated permissions" exactly.

**Q7 — Answer: A. Static polymorphism (Method Overloading)**
Two methods with the same name but different parameter lists/types in the same class, resolved at compile time — this is method overloading, i.e., static (compile-time) polymorphism. It is not overriding (which requires inheritance and identical signatures in different classes).

**Q8 — Answer: B. vehicle is an object reference to an instance of the subclass ElectricCar.**
`Vehicle vehicle = new ElectricCar();` — `vehicle` is a reference variable of declared type `Vehicle`, but it points to an actual object of the subclass `ElectricCar`. This is standard upcasting/polymorphic reference assignment.

**Q9 — Answer: B. Increased network latency and elevated hardware processing overhead.**
Inline deep packet inspection means every packet must be processed and analyzed in real time before being forwarded — this inherently adds latency and requires more processing power, especially at scale. It doesn't inherently cause the other listed problems.

**Q10 — Answer: A**
```java
class Vehicle { void start() {} }
class Car extends Vehicle { @Override void start() {} }
```
This is valid Java syntax for inheritance (`extends`) plus a proper method override (`@Override`, same signature). Option B incorrectly uses `implements` with a class (should be `extends` for a class, `implements` is for interfaces). Option C uses invalid syntax (`void extends start()`).

**Q11 — Answer: B. `border-radius: 0 15px 0 15px;`**
CSS `border-radius` shorthand order is `top-left top-right bottom-right bottom-left`. To round only top-right and bottom-left (15px each) while keeping top-left and bottom-right square (0): `0 15px 0 15px` → top-left=0, top-right=15px, bottom-right=0, bottom-left=15px. ✓ Exactly matches the requirement.

**Q12 — Answer: A. `<audio controls>`**
The HTML5 `<audio>` element with the `controls` attribute natively renders play/pause/volume UI without any JavaScript needed. The other tags/attributes (`<sound>`, `<media>`, `<music>`) aren't valid HTML5 elements.

**Q13 — Answer: B. 20, 40, 60, 80**
`.map()` applies `evaluateScore` (which doubles the value) to every element: [10,20,30,40] → [20,40,60,80].

**Q14 — Answer: C. `alert("System Ready");`** *(note on quote style below)*
`getAttribute("onclick")` returns the exact attribute value as written in the HTML: `alert('System Ready');` (with single quotes, since that's how it's written in the markup). Option C is shown with double quotes (`alert("System Ready");`), which is a minor mismatch in quote style — but conceptually, C is clearly the intended answer since it's the only option showing the raw attribute string rather than its "executed" result. Note that `document.write()` runs immediately at parse time here (script tags execute top-to-bottom on page load) — the "triggers the function" framing in the question is slightly misleading, since this code doesn't actually wait for a click; it writes the attribute value as soon as the script runs.

**Q15 — Answer: B. Restricting lateral movement of unauthorized attackers during a breach**
Micro-segmentation's primary security purpose is containment — if an attacker compromises one segment, they can't easily move to others. This is the standard "zero trust" rationale for VLAN/ACL-based segmentation.

**Q16 — Answer: C. Encapsulating Security Payload (ESP)**
ESP provides confidentiality (encryption) *and* authentication/integrity — matching all three requirements (encryption, authentication, integrity). AH (option A) provides authentication/integrity only, no encryption.

**Q17 — Answer: A. Remote-access VPN**
A single user/device (the engineer's laptop) connecting securely to a corporate network from an untrusted external network is the definition of remote-access VPN (as opposed to site-to-site, which links two networks/offices together).

**Q18 — Answer: C. UDP**
Real-time applications tolerant of packet loss but sensitive to retransmission delay are the classic UDP use case (no handshake, no guaranteed delivery, minimal overhead) — this is why online games and video calls typically use UDP over TCP.

**Q19 — Answer: C. Transport Layer**
End-to-end flow control, segmentation, and checksum/error-checking are Transport Layer (Layer 4) responsibilities (e.g., TCP's role), not Network Layer (routing/addressing) or Data Link Layer (framing on a single link).

**Q20 — Answer: A. Stateful Packet Inspection Firewall**
Tracking session state (SYN, ESTABLISHED flags) and only allowing packets belonging to a recognized active session is exactly what a stateful firewall does, as opposed to a stateless filter which evaluates each packet independently with no session awareness.

**Q21 — Answer: C. Software as a Service (SaaS)**
Ready-to-use, web-based software delivered without local installation or infrastructure management is the definition of SaaS.

**Q22 — Answer: C. Data Virtualization / Abstraction Layer**
A layer that logically unifies and queries data across disparate systems (legacy + cloud) *without physically copying/moving* the data is data virtualization/abstraction — as opposed to physical migration or replication, which do involve moving/copying data.

**Q23 — Answer: B. Private Cloud**
Requirements for physical host isolation and dedicated, non-shared hardware rule out any multi-tenant/shared model (public, multi-tenant, community) — only a private cloud guarantees dedicated infrastructure.

**Q24 — Answer: A. Hypervisor-based Virtualization**
A hypervisor is exactly the software layer that abstracts physical (bare-metal) hardware into virtual CPU/RAM resources for isolated guest OS instances.

**Q25 — Answer: C. IaaS**
Full control over OS kernel, networking (IP tables), and storage drivers — while the provider handles only the physical datacenter — is the defining characteristic of Infrastructure as a Service.

**Q26 — Answer: C. By allowing dynamic storage allocation on-demand as consumer traffic shifts.**
Resource pooling's contribution to elasticity is enabling capacity to be allocated dynamically based on real-time demand, rather than being fixed or manually provisioned.

**Q27 — Answer: B. Information loss occurs because the cipher mapping contains key collisions, preventing deterministic reverse lookup.**
When two different plaintext characters map to the same ciphertext character, the mapping is no longer one-to-one/invertible — you cannot deterministically know whether a decrypted 'X' should become 'E' or 'T'. This is a genuine information-loss/collision problem, not a performance or channel issue.

**Q28 — Answer: B. PEAP (Protected Extensible Authentication Protocol)**
PEAP builds a TLS tunnel using only a server-side certificate, then authenticates the client inside that tunnel via username/password (commonly PEAP-MSCHAPv2) — exactly matching the scenario. EAP-TLS (option C) requires certificates on *both* ends, which doesn't match "only a server-side certificate."

**Q29 — Answer: B. 12** *(verified by execution)*
Trace: a=2, b=4, c=5.
- `if ((a+c) > (c+a))` → `7 > 7` → **False**, skip first if block.
- `if ((a+b+c) < (b+c+a))` → `11 < 11` → **False** → go to Else: `c = a+b = 2+4 = 6`
- `return a+b+c` = 2+4+6 = **12**

**Q30 — Answer: B. 41** *(verified by execution)*
Trace: p=3, q=6, r=5.
- `if ((p+r) > (q-p))` → `8 > 3` → **True**
- `q = (q+r)+q` = (6+5)+6 = **17**
- `if ((2+q^p) < (5+p+r))` → `q^p` = 17^3 = 18 → `2+18=20` vs `5+3+5=13` → `20 < 13` → **False** → Else: `r = 4+q = 4+17 = 21`
- `Print p+q+r` = 3+17+21 = **41**

**Q31 — Answer: A. 12** *(verified by execution)*
Trace: a=1, b=3, c=8.
- `if ((a+c+b) < (2+b-a))` → `12 < 4` → **False**, entire if-block (including nested logic) skipped
- `Print a+b+c` = 1+3+8 = **12**

**Q32 — Answer: A. Calculates 5 factorial (120).**
Base case returns 1 for n=0 or n=1 (matching 0!=1!=1), and recursively multiplies `n * compute(n-1)` — the classic recursive factorial. `compute(5)` = 5×4×3×2×1 = 120.

**Q33 — Answer: A. 5.0** *(verified by execution)*
Trace: arr = [[2,3],[1,5]] → arr[0][0]=2, arr[0][1]=3, arr[1][0]=1, arr[1][1]=5.
- `arr[0][1] = (arr[1][0] & arr[0][0]) & arr[1][1]` = (1 & 2) & 5 = 0 & 5 = 0 → arr = [[2,0],[1,5]]
- `if ((arr[0][0]-arr[0][1]) > (arr[1][1]+arr[0][1]))` → `(2-0) > (5+0)` → `2 > 5` → **False**, skip if
- `arr[0][0] = (5 & 3) & arr[0][0]` = (5&3) & 2 = 1 & 2 = 0
- `Print arr[1][1] + arr[0][0]` = 5 + 0 = **5.0**

**Q34 — Answer: A. 31** *(verified by execution)*
Trace: a=5, b=2, c=0. Loop runs twice (c=1, then c=2), but note `a` never changes:
- **Iteration 1:** b=2+4=6 → b=6+5=11 → b=(11&3)+11 = 3+11 = 14
- **Iteration 2:** b=14+4=18 → b=18+5=23 → b=(23&3)+23 = 3+23 = 26
- `Print a+b` = 5+26 = **31**

**Q35 — Answer: A. AB1234**
The regex `^[A-Z]{2}[0-9]{4}$` requires exactly 2 uppercase letters followed by exactly 4 digits (anchored start/end, no extra characters).
- A. `AB1234` → 2 letters + 4 digits → **matches**
- B. `A12345` → only 1 letter before digits → fails
- C. `AB12345` → 2 letters but 5 digits (too many) → fails
- D. `ab1234` → lowercase letters, regex requires `A-Z` → fails

**Q36 — Answer: B**
```
ARRAY scores[4] = [85, 90, 78, 92]
PRINT scores[2]
```
In standard 0-indexed arrays, the 1st element is index 0, so the **3rd element** is at index **2**. `scores[2]` = 78, the correct 3rd element. Option A (`scores[3]`) would print the 4th element (92); option C (`scores[1]`) would print the 2nd element (90).

**Q37 — Answer: C**
```sql
SELECT E.EmpName, D.DeptTitle FROM Employees E LEFT JOIN Departments D ON E.DeptID = D.DeptID;
```
A `LEFT JOIN` from `Employees` preserves **all** employee rows regardless of whether a matching department exists — exactly satisfying "include employees who have not been assigned to any department yet." An `INNER JOIN` (A) would exclude unassigned employees; a `RIGHT JOIN` (B) would instead preserve all departments (including empty ones), not all employees.

**Q38 — Answer: B**
```sql
SELECT EmployeeName, LENGTH(EmployeeName) - LENGTH(REPLACE(EmployeeName, 'e', '')) FROM Staff;
```
`LENGTH(original) - LENGTH(with target character removed)` correctly counts character occurrences. `COUNT()` (option A) counts rows, not characters, so it would always return 0 for a single non-null value being compared to itself. Option C uses invalid syntax (`FROM...SELECT` order, and `SUM()` doesn't work on strings). Option D's `SUBSTRING` doesn't count occurrences.

**Q39 — Answer: A. Peripheral Component Interconnect Express (PCIe)**
PCIe is the standard high-speed bus for GPU and other expansion cards in modern systems — far higher throughput than legacy ISA, and SATA/USB are for storage/peripherals, not GPU communication.

**Q40 — Answer: B. Enhanced Integrated Drive Electronics (EIDE) — low confidence ⚠️**
This question describes a modern SSD controller with DRAM write-caching, which doesn't map cleanly onto any of the four listed options (EIDE is a legacy parallel-ATA storage interface, not a DRAM-caching flash controller spec). Among the choices, EIDE is the only one that's genuinely storage-controller-related (the others describe a generic memory bus, a serial UART, and an interrupt controller — none related to flash/SSD caching). This appears to be a recycled/mismatched distractor set from an older question about drive controllers; treat this answer with caution and verify against your source material if possible.

**Q41 — Answer: B. Access Control and File Permission Management**
Preventing unauthorized processes from reading another user's data is the core purpose of OS-level access control and file permissions (e.g., Unix file modes, ACLs) — not disk defragmentation, display sync, or swap allocation.

**Q42 — Answer: B. Set text animation sequence option to By Paragraph.**
Setting the "By Paragraph" (a.k.a. "By 1st Level Paragraph") animation sequence automatically reveals each bullet/sub-bullet one at a time on successive clicks, without needing to manually animate each one individually.

**Q43 — Answer: A. Alt + Shift + T**
In MS Word, `Alt+Shift+T` inserts the current system **time**; `Alt+Shift+D` inserts the current **date** (a related but different shortcut — don't confuse the two).

**Q44 — Answer: D. Cable**
```
MIN(C2:C5) = MIN(1200, 450, 600, 15) = 15  (Cable's Unit Price)
MATCH(15, C2:C5, 0) = position 4
INDEX(A2:A5, 4) = "Cable"
```
**Verified computationally** — Cable has the lowest Unit Price (15), so the formula returns "Cable".

**Q45 — Answer: A. User Access Control and Least Privilege Policy**
After a privilege escalation incident, the direct fix is enforcing least-privilege access control — ensuring users/processes only have the minimum permissions needed, directly preventing unauthorized privilege escalation. The other options (virtual memory size, GUI settings, scheduler timing) are unrelated to permission boundaries.

---

## Quick Reference Table

| Q | Ans | Q | Ans | Q | Ans | Q | Ans | Q | Ans |
|---|---|---|---|---|---|---|---|---|---|
| 1 | B | 10 | A | 19 | C | 28 | B | 37 | C |
| 2 | B | 11 | B | 20 | A | 29 | B | 38 | B |
| 3 | C | 12 | A | 21 | C | 30 | B | 39 | A |
| 4 | A | 13 | B | 22 | C | 31 | A | 40 | B ⚠️ |
| 5 | B | 14 | C | 23 | B | 32 | A | 41 | B |
| 6 | B | 15 | B | 24 | A | 33 | A | 42 | B |
| 7 | A | 16 | C | 25 | C | 34 | A | 43 | A |
| 8 | B | 17 | A | 26 | C | 35 | A | 44 | D |
| 9 | B | 18 | C | 27 | B | 36 | B | 45 | A |

⚠️ = Low confidence, verify against source material.