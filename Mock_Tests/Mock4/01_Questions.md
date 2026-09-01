# Mock4 — Questions Only

---

**QUESTION 1**
A web developer builds an interactive UI where clicking a button passes its reference (`this`) to a JavaScript handler to dynamically retrieve element details. What string value will be logged to the document upon execution?

```html
<body>
<button onclick="myFunction(this);">Click Me</button>

<script type="text/javascript">
function myFunction(btn) {
    document.write(btn.tagName.toLowerCase());
}
</script>
</body>
```

A. button  
B. object HTMLButtonElement  
C. BUTTON  
D. undefined  

---

**QUESTION 2**
A data processing module takes a list of pricing metrics and passes a transformation callback to process each item. What output string will be generated on the webpage?

```javascript
var numbers = [10, 20, 30];

function divideByTwo(val) {
    return (val / 2);
}

document.write(numbers.map(divideByTwo));
```

A. 10, 20, 30  
B. 5, 10, 15  
C. 10, 15, 20  
D. 2.5, 5, 7.5  

---

**QUESTION 3**
A front-end developer is auditing a site's semantic HTML structure to improve SEO and screen reader accessibility. Which HTML5 tag should be used to wrap navigational links and introductory branding at the top of a page?

A. `<head>`  
B. `<header>`  
C. `<top>`  
D. `<heading>`  

---

**QUESTION 4**
A UX designer wants to convert square user profile thumbnails into clean circular avatars using CSS. Which styling property value achieves this visual transformation?

A. `border-radius: 50%;`  
B. `border-radius: 100px 0 100px 0;`  
C. `border-style: circle;`  
D. `clip-shape: circle(50%);`  

---

**QUESTION 5**
An enterprise Java platform requires specialized subclasses like `Bike` to inherit fundamental properties and methods from a parent `Vehicle` class. Which code snippet correctly implements this object-oriented relationship?

A. `class Vehicle { void start() {} } class Bike extends Vehicle { void start() { System.out.println("Bike started"); } }`  
B. `class Vehicle { void start() {} } class Bike implements Vehicle { }`  
C. `class Vehicle { void start() {} } class Bike inherits Vehicle { }`  
D. `class Vehicle { void start() {} } class Bike super Vehicle { }`  

---

**QUESTION 6**
A DevSecOps team evaluates deploying an inline reverse-proxy Web Application Firewall (WAF) to defend public endpoints. Which operational outcome represents a primary advantage rather than a structural limitation?

A. It adds networking and inspection latency to incoming web requests.  
B. It requires central management and installation of SSL certificates on proxy nodes.  
C. It intercepts and drops SQL injection and XSS payloads before they reach application servers.  
D. It introduces a potential single point of failure if load balancing redundancy is omitted.  

---

**QUESTION 7**
During a code review of an e-commerce platform, a junior developer asks about object creation logic in Java. In the snippet below, how should the relationship between `Book` and `myBook` be accurately defined?

```java
public class Book {
    private String title;
    public Book(String title) { this.title = title; }
    public String getTitle() { return title; }
}

public class Main {
    public static void main(String[] args) {
        Book myBook = new Book("Java Basics");
        System.out.println(myBook.getTitle());
    }
}
```

A. Book is the class definition; myBook is an instantiated object instance of that class.  
B. myBook is the base class; Book is a derived subclass.  
C. Both are primitive types stored directly on the execution stack.  
D. Book is an interface; myBook is a static factory method.  

---

**QUESTION 8**
A financial software engine needs a `Calculator` service that computes shapes via `calculateArea()` using different parameter sets. Which OOP mechanism facilitates defining multiple method signatures with the same name inside a single class?

```java
public class Calculator {
    public double calculateArea(double radius) {
        return 3.14 * radius * radius;
    }
    public double calculateArea(double length, double width) {
        return length * width;
    }
}
```

A. Method Overloading (Compile-time Polymorphism)  
B. Method Overriding (Runtime Polymorphism)  
C. Dynamic Dispatching  
D. Encapsulation  

---

**QUESTION 9**
A mobile client application attempts to access a protected payment endpoint without providing a valid JWT bearer token in the HTTP request headers. What HTTP status code should the API server return?

A. 401 Unauthorized  
B. 403 Forbidden  
C. 404 Not Found  
D. 500 Internal Server Error  

---

**QUESTION 10**
A platform engineering team needs to introduce breaking changes to JSON request bodies on a high-traffic REST API without disrupting legacy third-party mobile apps. Which strategy best maintains system availability?

A. Apply destructive schema migrations to the production database immediately.  
B. Maintain explicit versioned API endpoints (e.g., routing requests via /v1/ and /v2/).  
C. Return HTTP 500 exceptions on older request structures to force app updates.  
D. Change the API protocol from REST JSON to XML dynamically.  

---

**QUESTION 11**
In an automated DevOps deployment workflow, compiled Java `.jar` files and Docker container layers must be safely stored and versioned across staging environments. Which tool category fulfills this operational requirement?

A. Source Control System  
B. Artifact Repository  
C. Configuration Manager  
D. Monitoring Agent  

---

**QUESTION 12**
A database architect is designing a schema for a high-volume transactional ordering engine. Which column best fulfills the constraints of a Primary Key for the `Orders` table?

A. CustomerName  
B. OrderDate  
C. OrderID  
D. ShippingAddress  

---

**QUESTION 13**
During peak sales hours, Transaction A reads an account balance row. Seconds later, Transaction B modifies and commits an update to that balance. When Transaction A re-reads the row within its same execution block, it encounters a different value. What isolation anomaly occurred?

A. Dirty Read  
B. Non-repeatable Read  
C. Phantom Read  
D. Write Skew  

---

**QUESTION 14**
A critical database cluster experiences sudden CPU exhaustion and spike in active client connections. What is the most effective initial troubleshooting action for an engineer to take?

A. Double server RAM allocations immediately.  
B. Analyze process lists, slow query logs, and APM performance metrics.  
C. Drop all non-clustered indexes across major tables.  
D. Force-reboot physical database hardware hosts.  

---

## Section 2: Fundamentals of Networking

**QUESTION 15**
A cloud security architect is hardening a multi-tenant microservices platform against internal compromises. What is the primary operational objective of implementing micro-segmentation across workloads?

A. Accelerating network packet routing speeds between services.  
B. Containing breaches by restricting unauthorized lateral movement across workload segments.  
C. Removing the requirement for core internal DNS resolution.  
D. Reducing external public IP address utilization.  

---

**QUESTION 16**
A network engineer needs to secure cross-site communications using IPsec. Which protocol must be selected to guarantee data encryption (confidentiality) alongside packet authentication and integrity?

A. Authentication Header (AH)  
B. Encapsulating Security Payload (ESP)  
C. Diffie-Hellman (DH)  
D. Internet Key Exchange (IKE)  

---

**QUESTION 17**
A national retail enterprise needs to securely connect 50 regional branch offices to central cloud infrastructure over public ISP connections on a permanent basis. Which VPN solution fits best?

A. Site-to-Site VPN  
B. Remote-Access Client VPN  
C. Clientless SSL Proxy  
D. Host-to-Host Tunnel  

---

**QUESTION 18**
A live sports broadcasting app requires real-time streaming where minimal latency is critical, and dropping occasional video frames is acceptable compared to buffering delays. Which transport protocol should be used?

A. TCP  
B. UDP  
C. SCTP  
D. QUIC  

---

**QUESTION 19**
A network troubleshooter is analyzing packet headers captured by a packet analyzer. At which layer of the OSI model does packet routing based on source and destination IP addresses take place?

A. Data Link Layer (Layer 2)  
B. Network Layer (Layer 3)  
C. Transport Layer (Layer 4)  
D. Session Layer (Layer 5)  

---

**QUESTION 20**
A network security administrator needs a perimeter defense device capable of tracking active TCP connection states (SYN, SYN-ACK, ACK) to enforce traffic policies dynamically. What device is required?

A. Stateless Packet Filter  
B. Stateful Packet Inspection (SPI) Firewall  
C. Circuit-Level Proxy  
D. Application Gateway  

---

**QUESTION 21**
An enterprise migrates physical hardware to a public cloud provider to manage Virtual Private Clouds, dynamic block storage, and compute instances via an API console. Which cloud model does this represent?

A. SaaS  
B. PaaS  
C. IaaS  
D. FaaS  

---

**QUESTION 22**
A government organization with strict regulatory standards provisions cloud infrastructure hosted exclusively on dedicated hardware for its own single entity. Which cloud deployment model is being utilized?

A. Public Cloud  
B. Private Cloud  
C. Community Cloud  
D. Hybrid Cloud  

---

**QUESTION 23**
When deploying virtualized servers in a cloud environment, what underlying software layer is responsible for virtualizing host hardware to allow multiple guest OS instances to run independently?

A. Hypervisor  
B. SAN Volume Manager  
C. Load Balancer  
D. Container Engine  

---

**QUESTION 24**
When operating workloads under the AWS Shared Responsibility Model, which security task falls directly on the client rather than the cloud provider?

A. Securing data center facilities  
B. Updating host hypervisor firmware  
C. Applying operating system patches on guest VM instances  
D. Replacing degraded server storage hardware  

---

**QUESTION 25**
An e-commerce business experiences traffic surges during flash sales. How does cloud resource pooling support this dynamic elasticity without manual server installation?

A. By permanently dedicating static physical hardware per user  
B. By dynamically reallocating compute resources from a shared physical hardware pool based on real-time load  
C. By eliminating physical network latency  
D. By requiring manual administrative intervention during traffic spikes  

---

**QUESTION 26**
A classical Caesar Cipher uses a shift key of +3 to encrypt messages. During a security audit, an operator accidentally applies an improper decryption key shift of +3 instead of -3. What is the result?

A. The message correctly decodes into original plaintext.  
B. The message undergoes double transformation (+6 total shift), producing garbled text.  
C. The key resets automatically to zero.  
D. The encryption engine throws a buffer overflow exception.  

---

**QUESTION 27**
A high-security facility requires enterprise Wi-Fi where both the central authentication server and connected client devices authenticate each other using X.509 digital certificates. Which EAP protocol is required?

A. EAP-TLS  
B. EAP-TTLS  
C. PEAPv0  
D. EAP-FAST  

---

## Section 3: Pseudo Code

**QUESTION 28**
A database administrator needs to audit employee records. Which SQL query calculates how many times the character 'a' appears inside the `LastName` string field across records?

A. `SELECT LastName, COUNT(LastName) FROM Employees WHERE LastName LIKE '%a%';`  
B. `SELECT LastName, LENGTH(LastName) - LENGTH(REPLACE(LastName, 'a', '')) FROM Employees;`  
C. `SELECT COUNT('a') FROM Employees GROUP BY LastName;`  
D. `SELECT LENGTH(REPLACE(LastName, 'a', '')) FROM Employees;`  

---

**QUESTION 29**
A business analyst wants a report listing all department names from `Departments`, along with assigned employees from `Employees`. Departments with zero assigned employees must still appear in the results. Which query type achieves this requirement?

A. `SELECT D.DeptName, E.EmpName FROM Departments D INNER JOIN Employees E ON D.DeptID = E.DeptID;`  
B. `SELECT D.DeptName, E.EmpName FROM Departments D LEFT JOIN Employees E ON D.DeptID = E.DeptID;`  
C. `SELECT D.DeptName, E.EmpName FROM Departments D RIGHT JOIN Employees E ON D.DeptID = E.DeptID;`  

---

**QUESTION 30**
A system receives test results inside a zero-indexed array `scores = [80, 85, 90, 95]`. Which pseudocode line retrieves the 3rd score in the collection?

A. PRINT scores[3]  
B. PRINT scores[2]  
C. PRINT scores[1]  
D. PRINT scores.get(3)  

---

**QUESTION 31**
A security module evaluates user entry tokens against a regular expression pattern. Which input string will pass validation and cause the function to print 'Valid'?

```
function validateInput(string s):
    if s matches "[a-zA-Z0-9]{6}"
        then print "Valid"
    else
        then print "Not Valid"
    endif
end function
```

A. pass1  
B. code12  
C. a1#b2c  
D. 1234567  

---

**QUESTION 32**
Trace the step-by-step execution of the bitwise loop below. What is the final printed result of `x + y`? (Note: '&' is Bitwise AND)

```
Integer x, y, z
Set x = 6, y = 10

for(each z from 1 to 2)
    y = y + 4
    y = (y & 12) + x
End for

Print x + y
```

*(Note: the source screenshot's answer options for this question were mismatched — they showed the regex strings from Question 31 rather than numeric values. See Answer Key for the correctly computed answer.)*

---

**QUESTION 33**
Analyze the following 2D array manipulation script. What numerical output will be printed? (Note: '&' is Bitwise AND)

```
Integer arr[2][2] = {{3, 5}, {4, 8}}

arr[0][1] = (arr[1][0] & arr[0][0])

if (arr[0][0] > arr[0][1])
    arr[0][0] = arr[0][0] + 1
End if

Print arr[0][1] + arr[0][0]
```

A. 14  
B. 16  
C. 20  
D. 24  

*(Note: the correctly computed answer does not match any of these options — see Answer Key.)*

---

**QUESTION 34**
A developer writes a recursive routine to process user loyalty points. What core calculation does this algorithm perform for a positive integer `n`?

```
FUNCTION sumSeries(n):
    IF n is equal to 1
        RETURN 1
    ELSE
        RETURN n + sumSeries(n - 1)
    END IF
END FUNCTION
```

A. Calculates the factorial (n!)  
B. Calculates the sum of consecutive integers from 1 to n  
C. Calculates exponential power 2^n  
D. Calculates the nth Fibonacci sequence term  

---

**QUESTION 35**
Trace the execution path of the conditional logic function when passed parameters `fun(a=2, b=4, c=5)`. What integer value is returned?

```
Integer fun(Integer a, Integer b, Integer c)
    if ((a + b) < c)
        a = b + c
    else
        b = a + c
    end if
    c = a + b
    return a + b + c
```

A. 11  
B. 15  
C. 18  
D. 21  

---

**QUESTION 36**
Evaluate the outcome of the bitwise XOR comparison block below. What value is printed? (Note: '^' is Bitwise XOR)

```
Integer p, q, r
Set p = 3, q = 6, r = 4

if ((p ^ q) > r)
    p = p + r
else
    q = q + r
end if

Print p + q + r
```

A. 15  
B. 17  
C. 21  
D. 25  

---

**QUESTION 37**
A utility routine processes inputs `process(a=2, b=3, c=4)`. What final numerical value is returned by the function?

```
Integer process(Integer a, Integer b, Integer c)
    if ((a + b + c) < 5)
        a = a + 2
    end if
    return a + b + c
```

A. 15  
B. 17  
C. 21  
D. 25  

*(Note: the correctly computed answer does not match any of these options — see Answer Key.)*

---

## Section 4: Common Applications and OS

**QUESTION 38**
A hardware technician is troubleshooting system bus bottlenecks on a high-performance workstation. Which motherboard pathway directly facilitates data exchange between the CPU and system memory?

A. System Bus  
B. CMOS Battery  
C. Power Supply Unit  
D. SATA Cable  

---

**QUESTION 39**
A systems architect upgrades a database host server to eliminate disk I/O bottlenecks. Which interface protocol allows modern enterprise SSDs to connect directly to motherboard PCI Express lanes?

A. SATA III  
B. NVMe  
C. IDE  
D. USB 3.0  

---

**QUESTION 40**
In a multi-tenant Linux server environment, which operating system security subsystem manages file permissions (Read, Write, Execute) across user groups?

A. File System Access Control  
B. Virtual Memory Manager  
C. CPU Scheduler  
D. Device Driver Framework  

---

**QUESTION 41**
A presenter building an executive pitch deck in MS PowerPoint wants bullet points on a slide to appear one by one upon each mouse click. Which setting configuration achieves this behavior?

A. Set Morph transition on the slide  
B. Apply an entrance animation and configure Effect Options to 'By Paragraph'  
C. Insert slide hyperlinks on every list item  
D. Modify default text placement in the Slide Master  

---

**QUESTION 42**
An inventory analyst working in MS Excel needs to quickly log timestamp data into audit records. What standard keyboard shortcut inserts the current system time into an active cell?

A. Ctrl + Shift + ;  
B. Ctrl + ;  
C. Alt + Shift + D  
D. Shift + F3  

---

**QUESTION 43**
A sales analyst executes the formula `=INDEX(A2:A5, MATCH(MAX(B2:B5), B2:B5, 0))` on the dataset below to identify the top-performing sales item. What string product name is returned?

| Item | Sales |
|---|---|
| Laptop | 150 |
| Smartphone | 450 |
| Tablet | 200 |
| Projector | 80 |

A. Projector  
B. Laptop  
C. Smartphone  
D. Tablet  

---

**QUESTION 44**
A system administrator configures administrative roles across corporate workstations. Which fundamental security principle mandates assigning users only the minimal rights necessary to complete work duties?

A. Principle of Least Privilege  
B. Maximal Memory Allocation  
C. Disabling System Logging  
D. Overclocking Processing Units  

---