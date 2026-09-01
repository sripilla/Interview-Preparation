# Mock3 — Questions Only

---

**QUESTION 1**
During a peak flash sale, a Site Reliability Engineer notices that microservice instances are abruptly crashing with Out-Of-Memory (OOM) errors, but CPU utilization remains low. The auto-scaler fails to provision additional instances because scaling metrics are currently bound to average CPU thresholds. What initial investigative action should the engineer execute to identify the root operational bottleneck?

A. Double the CPU limit allocated inside the container definition file.  
B. Examine application heap usage logs and trace memory allocation profiles.  
C. Immediately force a rolling restart across all cluster deployment nodes.  
D. Reduce the minimum instance count in the target group configurations.  

---

**QUESTION 2**
Consider two concurrent transactions running on a bank account balance (Initial Balance = 1000):

Transaction A:
```sql
SELECT Balance FROM Accounts WHERE AccountID = 501; -- Reads 1000
```
Transaction B:
```sql
UPDATE Accounts SET Balance = Balance - 200 WHERE AccountID = 501; -- Commits
```
Transaction A (again, within the same transaction):
```sql
SELECT Balance FROM Accounts WHERE AccountID = 501; -- Reads 800
```

Which concurrency anomaly is Transaction A experiencing?

A. Dirty Read  
B. Non-repeatable Read  
C. Lost Update  
D. Phantom Read  

---

**QUESTION 3**
Assume a healthcare firm designs an Electronic Health Record (EHR) database. Patient records include SSN, EmailAddress, MedicalRecordID, and ZipCode. Patients frequently update their EmailAddress, and SSN contains sensitive privacy constraints. Which column represents the most appropriate candidate to serve as the immutable Primary Key?

A. EmailAddress  
B. SSN  
C. MedicalRecordID  
D. ZipCode  

---

**QUESTION 4**
A software delivery team automates code security audits and static application security testing (SAST). They want to enforce a quality gate where builds containing high-severity vulnerabilities are blocked before containerization occurs. Which component of the modern DevOps ecosystem enforces this pre-compilation rule checks and prevents tainted source code progression?

A. Continuous Delivery Pipeline Quality Gate  
B. Infrastructure as Code Template Manager  
C. Container Runtime Daemon  
D. Centralized Log Aggregator  

---

**QUESTION 5**
An engineering team is modernizing a monolithic application into REST microservices. They want to update response schemas for specific endpoints without requiring third-party client integrations to immediately alter their requests. Which API evolution strategy allows seamless backwards compatibility while deploying structural updates?

A. Deprecate all previous endpoints immediately upon release of new fields.  
B. Implement Content Negotiation via Accept headers while supporting legacy endpoints.  
C. Change variable data types in-place on existing Production routes.  
D. Force client applications to send version values inside query body objects.  

---

**QUESTION 6**
A mobile application attempts to publish data to an administrative endpoint, but receives an HTTP status code indicating that the user possesses valid authentication credentials but lacks elevated administrative role permissions. Which HTTP status code was returned?

A. 401 Unauthorized  
B. 403 Forbidden  
C. 405 Method Not Allowed  
D. 409 Conflict  

---

**QUESTION 7**
A payment gateway software module features two methods named executePayment inside the same billing class. One method accepts an integer amount and account ID, while the second accepts a double amount, account ID, and currency token. Which Object-Oriented Programming capability is demonstrated?

```java
public class PaymentProcessor {
    public boolean executePayment(int amount, String accountId) {
        return true;
    }

    public boolean executePayment(double amount, String accountId, String currency) {
        return true;
    }
}
```

A. Static polymorphism (Method Overloading)  
B. Dynamic polymorphism (Method Overriding)  
C. Data Abstraction  
D. Runtime Encapsulation  

---

**QUESTION 8**
Analyze the Java program structure below. A developer creates a reference variable vehicle referencing an instance of ElectricCar. Which option describes the OOP relationship between vehicle and ElectricCar?

```java
class Vehicle {
    protected int speed;
}

class ElectricCar extends Vehicle {
    private int batteryCapacity;
}

public class Main {
    public static void main(String[] args) {
        Vehicle vehicle = new ElectricCar();
    }
}
```

A. Vehicle is the instance and ElectricCar is the class blueprint.  
B. vehicle is an object reference to an instance of the subclass ElectricCar.  
C. ElectricCar and Vehicle are independent instances of main.  
D. vehicle is a static subclass of ElectricCar.  

---

**QUESTION 9**
An organization deploys an Intrusion Prevention System (IPS) inline with their main core firewall. What is a primary operational trade-off of maintaining inline deep packet inspection across all corporate traffic?

A. Complete loss of active session tracking.  
B. Increased network latency and elevated hardware processing overhead.  
C. Inability to block malicious IP signatures.  
D. Automatic bypass of user access authentication controls.  

---

**QUESTION 10**
Which Java class setup correctly demonstrates class inheritance and dynamic method overriding for sound emission?

A. `class Vehicle { void start() {} } class Car extends Vehicle { @Override void start() {} }`  
B. `class Vehicle { void start() {} } class Car implements Vehicle { void start() {} }`  
C. `class Vehicle { void extends start() {} } class Car { Vehicle.start(); }`  
D. *(not captured in source)*  

---

**QUESTION 11**
Analyze the requirement: A web designer needs to configure a CSS rule for a notification box such that only the top-right and bottom-left corners are rounded by 15 pixels, while other corners remain square. Which CSS rule achieves this output?

A. `border-radius: 15px 15px 15px 15px;`  
B. `border-radius: 0 15px 0 15px;`  
C. `border-radius: 15px 0 15px 0;`  

---

**QUESTION 12**
A frontend developer wants to embed an interactive audio element on a web page that natively displays play/pause controls without requiring custom JavaScript libraries. Which HTML5 tag provides this built-in media functionality?

A. `<audio controls>`  
B. `<sound src="autoplay">`  
C. `<media type="audio">`  
D. `<music play>`  

---

**QUESTION 13**
Evaluate the JavaScript array execution code below. What is rendered to the DOM upon script execution?

```javascript
var scores = [10, 20, 30, 40];
function evaluateScore(val) {
    return val * 2;
}
document.write(scores.map(evaluateScore));
```

A. 10, 20, 30, 40  
B. 20, 40, 60, 80  
C. 200  
D. NaN  

---

**QUESTION 14**
What output string is produced when a user triggers the JavaScript function embedded inside the HTML button markup below?

```html
<button id="btn" onclick="alert('System Ready');">Status</button>
<script>
    var element = document.getElementById("btn");
    document.write(element.getAttribute("onclick"));
</script>
```

A. System Ready  
B. true  
C. alert("System Ready");  
D. undefined  

---

**QUESTION 15**
A network architect isolates finance server workloads from guest enterprise traffic by configuring VLANs and access control lists (ACLs). What is the primary security goal of establishing network micro-segmentation?

A. Increasing maximum wireless transmission range  
B. Restricting lateral movement of unauthorized attackers during a breach  
C. Eliminating standard packet serialization latency  
D. *(not captured in source)*  

---

**QUESTION 16**
A security architect configures an IPsec VPN tunnel between two remote data centers. Which IPsec sub-protocol must be selected if the tunnel must guarantee data encryption, authentication, and packet integrity across untrusted public backbones?

A. Authentication Header (AH)  
B. Point-to-Point Tunneling Protocol (PPTP)  
C. Encapsulating Security Payload (ESP)  
D. Border Gateway Protocol (BGP)  

---

**QUESTION 17**
An engineer working remotely from a public airport network needs to encrypt all network traffic originating from their laptop back to corporate office servers securely. Which technology handles this user-to-network setup?

A. Remote-access VPN  
B. Site-to-site VPN  
C. ExpressRoute Circuit  
D. Static Network Address Translation  

---

**QUESTION 18**
A real-time online multiplayer game requires minimal transmission delays for frequent player coordinate updates. Missing occasional positioning packets is acceptable, but retransmission delays are prohibitive. Which Transport Layer protocol is best suited?

A. TCP  
B. FTP  
C. UDP  
D. SMTP  

---

**QUESTION 19**
During network diagnostics, a system administrator identifies corrupted data payloads arriving at a server. Which layer of the OSI model is responsible for performing end-to-end flow control, segmentation, and checksum error checking?

A. Network Layer  
B. Data Link Layer  
C. Transport Layer  
D. Session Layer  

---

**QUESTION 20**
A financial service requires a network appliance that monitors incoming TCP handshakes, actively inspects session state flags (SYN, ESTABLISHED), and drops packets that do not belong to an active, legitimate communication session. What type of firewall is required?

A. Stateful Packet Inspection Firewall  
B. Stateless Packet Filter  
C. Circuit-Level Proxy without logging  
D. Physical Layer Repeater  

---

**QUESTION 21**
An enterprise wants to subscribe to a cloud vendor that delivers ready-to-use, web-based Customer Relationship Management (CRM) software without requiring local installation or server provisioning. Which cloud service deployment model applies?

A. Infrastructure as a Service (IaaS)  
B. Platform as a Service (PaaS)  
C. Software as a Service (SaaS)  
D. Function as a Service (FaaS)  

---

**QUESTION 22**
An enterprise is running legacy mainframe databases and modern cloud infrastructure. They need an architectural layer that maps and queries datasets across both environments seamlessly via unified API schemas without copying data to a central lake. Which layer achieves this?

A. Physical Data Migration Service  
B. Replication Storage Middleware  
C. Data Virtualization / Abstraction Layer  
D. Local File Cache Directory  

---

**QUESTION 23**
A defense department contractor must process classified data under strict regulatory mandates requiring physical host isolation and dedicated, non-shared hardware infrastructure. Which cloud deployment model must be deployed?

A. Public Cloud  
B. Private Cloud  
C. Multi-tenant Cloud  
D. Open Community Cloud  

---

**QUESTION 24**
What underlying cloud technology abstracts bare-metal computing hardware into virtual CPU cores and virtual RAM allocations running isolated guest operating systems?

A. Hypervisor-based Virtualization  
B. Static Compiler Linking  
C. Network Load Balancing  
D. Block Storage Mirroring  

---

**QUESTION 25**
A cloud customer wants complete authority to configure custom operating system kernels, configure IP tables, and install custom storage drivers, while delegating physical datacenter rack management to a provider. Which model is required?

A. SaaS  
B. PaaS  
C. IaaS  
D. Serverless Application Hosting  

---

**QUESTION 26**
A cloud storage framework pools physical disk drives across geographically dispersed datacenters into unified virtual volumes. How does this resource pooling mechanism provide operational elasticity?

A. By eliminating network routing protocols.  
B. By guaranteeing fixed hardware capacity that cannot be scaled.  
C. By allowing dynamic storage allocation on-demand as consumer traffic shifts.  
D. By restricting access to local hardware buses.  

---

**QUESTION 27**
An IoT edge node uses a custom substitution cipher algorithm to transmit sensor readings. During an audit, engineers discover that two distinct plain-text characters (E and T) are mapped to the exact same cipher character (X) due to an offset modulo error. What operational failure occurs during decryption?

A. Decryption performance degrades linearly.  
B. Information loss occurs because the cipher mapping contains key collisions, preventing deterministic reverse lookup.  
C. The transmission channel suffers physical bit flipping.  
D. The cipher key automatically resets to zero.  

---

**QUESTION 28**
An organization deploys 802.1X wireless authentication across its offices. They want clients to authenticate using usernames and passwords, wrapped inside a secure TLS tunnel created using only a server-side digital certificate. Which authentication framework meets this criteria?

A. EAP-MD5  
B. PEAP (Protected Extensible Authentication Protocol)  
C. EAP-TLS with dual certificates  
D. PAP (Password Authentication Protocol)  

---

**QUESTION 29**
Trace the execution of the pseudocode snippet below for inputs: a = 2, b = 4, c = 5. What is the returned output value?

```
Integer funn(Integer a, Integer b, Integer c)

if((a + c) > (c + a))
    a = (a + b) * b

if((a + b + c) < (b + c + a))
    c = (c + a) + b
Else
    c = a + b
End if

return a + b + c
```

A. 11  
B. 12  
C. 15  
D. 22  

---

**QUESTION 30**
Analyze the pseudocode below. Determine the final value printed for p + q + r.

```
Integer p, q, r
Set p = 3, q = 6, r = 5

if((p + r) > (q - p))
    q = (q + r) + q

    if((2 + q ^ p) < (5 + p + r))
        p = (q ^ p) ^ r
    Else
        r = 4 + q
    End if
End if

Print p + q + r
```

A. 38  
B. 41  
C. 45  
D. 52  

---

**QUESTION 31**
Evaluate the pseudocode function below for arguments: a = 1, b = 3, c = 8. What is the printed result?

```
Integer funn(Integer a, Integer b, Integer c)

if((a + c + b) < (2 + b - a))
    a = b + c

    if((b + c + a) < (10 + a))
        a = (b + a) + b
    Else
        b = 7 + a
    End if

    c = (b + c) + c
End if

Print a + b + c
```

A. 12  
B. 18  
C. 24  
D. 30  

---

**QUESTION 32**
Consider the recursive pseudocode function below. What numerical property or value does compute(5) return?

```
FUNCTION compute(n):
    IF n IS 0 OR n IS 1
        RETURN 1
    ELSE:
        RETURN n * compute(n - 1)
    END IF
END FUNCTION compute
```

A. Calculates 5 factorial (120).  
B. Computes the sum of integers up to 5 (15).  
C. Calculates 2 raised to power 5 (32).  
D. Returns the 5th Fibonacci sequence term.  

---

**QUESTION 33**
What output value is printed upon executing the matrix pseudocode below?

```
Integer arr[2][2] = {{2, 3}, {1, 5}}

arr[0][1] = (arr[1][0] & arr[0][0]) & arr[1][1]

if ((arr[0][0] - arr[0][1]) > (arr[1][1] + arr[0][1]))
    arr[0][0] = arr[1][1] + arr[0][0]
End if

arr[0][0] = (5 & 3) & arr[0][0]

Print arr[1][1] + arr[0][0]
```

A. 5.0  
B. 7.0  
C. 10.0  
D. 12.0  

---

**QUESTION 34**
Determine the final output value printed after running the loop pseudocode below:

```
Integer a, b, c
Set a = 5, b = 2, c = 0

for(each c from 1 to 2)
    b = b + 4
    b = b + a
    b = (b & 3) + b
End for

Print a + b
```

A. 31  
B. 47  
C. 53  
D. 60  

---

**QUESTION 35**
Analyze the regular expression pseudocode below. Which string input causes the function to output Valid?

```
function validateCode(string code):
    if code matches "^[A-Z]{2}[0-9]{4}$"
        then print "Valid"
    else
        then print "Not Valid"
    endif
end function validateCode
```

A. AB1234  
B. A12345  
C. AB12345  
D. ab1234  

---

**QUESTION 36**
A candidate writes pseudocode to declare an array named scores containing [85, 90, 78, 92] and print the 3rd element. Which code block uses standard 0-indexed syntax correctly?

A.
```
ARRAY scores[4] = [85, 90, 78, 92]
PRINT scores[3]
```
B.
```
ARRAY scores[4] = [85, 90, 78, 92]
PRINT scores[2]
```
C.
```
ARRAY scores[4] = [85, 90, 78, 92]
PRINT scores[1]
```

---

**QUESTION 37**
A SQL developer needs to query employee names along with their assigned department titles. The output must include employees who have not been assigned to any department yet. Which SQL JOIN query accomplishes this task?

A. `SELECT E.EmpName, D.DeptTitle FROM Employees E INNER JOIN Departments D ON E.DeptID = D.DeptID;`  
B. `SELECT E.EmpName, D.DeptTitle FROM Employees E RIGHT JOIN Departments D ON E.DeptID = D.DeptID;`  
C. `SELECT E.EmpName, D.DeptTitle FROM Employees E LEFT JOIN Departments D ON E.DeptID = D.DeptID;`  

---

**QUESTION 38**
Which SQL query correctly calculates the frequency of the letter e in the EmployeeName column of the Staff table?

A. `SELECT EmployeeName, COUNT(EmployeeName) - COUNT(REPLACE(EmployeeName, 'e', '')) FROM Staff;`  
B. `SELECT EmployeeName, LENGTH(EmployeeName) - LENGTH(REPLACE(EmployeeName, 'e', '')) FROM Staff;`  
C. `FROM Staff SELECT EmployeeName, SUM(EmployeeName) - SUM(REPLACE(EmployeeName, 'e', ''));`  
D. `SELECT EmployeeName, SUBSTRING(EmployeeName, 'e') FROM Staff;`  

---

**QUESTION 39**
A high-performance gaming PC experiences severe system stutters during heavy graphics processing. The technician suspects a throughput bottleneck between the CPU, system RAM, and discrete GPU expansion bus. Which bus architecture handles high-speed communication with expansion cards?

A. Peripheral Component Interconnect Express (PCIe)  
B. Legacy Industry Standard Architecture (ISA)  
C. Serial Advanced Technology Attachment (SATA)  
D. Universal Serial Bus (USB) 2.0  

---

**QUESTION 40**
An industrial embedded computer utilizes solid-state disk modules with integrated flash controllers that cache small read/write requests inside internal DRAM before flushing to NAND flash. Which storage controller specification features this caching architecture?

A. Direct Memory Bus Controller  
B. Enhanced Integrated Drive Electronics (EIDE)  
C. Serial Asynchronous Communication Adaptor  
D. Programmable Interrupt Controller  

---

**QUESTION 41**
An OS kernel designer wants to prevent unauthorized background applications from reading sensitive system data owned by other users. Which core Operating System capability directly enforces these boundary permissions?

A. Disk Fragmentation Utility  
B. Access Control and File Permission Management  
C. Display Refresh Synchronization  
D. Dynamic Swapping Allocation  

---

**QUESTION 42**
A speaker is presenting a slide deck in PowerPoint and wants to reveal nested bullet points individually on consecutive mouse clicks during the presentation. Which animation configuration setting achieves this behavior automatically?

A. Apply Morph transition between duplicated slides.  
B. Set text animation sequence option to By Paragraph.  
C. Group text frames into SVG vector paths.  
D. Convert all bullet points into static raster images.  

---

**QUESTION 43**
A corporate clerk working inside MS Word needs to stamp the current system time into a document log quickly without navigating ribbon menus. Which keyboard shortcut performs this action?

A. Alt + Shift + T  
B. Ctrl + Alt + T  
C. Shift + F12  
D. Alt + F4  

---

**QUESTION 44**
Analyze the dataset table below:

| Product | Category | Unit Price | Units Sold |
|---|---|---|---|
| Server | Hardware | 1200 | 4 |
| Router | Hardware | 450 | 12 |
| Switch | Hardware | 600 | 8 |
| Cable | Accessory | 15 | 150 |

What item name is returned by the Excel lookup formula below?
`=INDEX(A2:A5, MATCH(MIN(C2:C5), C2:C5, 0))`

A. Server  
B. Router  
C. Switch  
D. Cable  

---

**QUESTION 45**
Following a security incident involving unauthorized privilege escalation on a Linux server, a System Administrator is tasked with enforcing strictly bounded role privileges. Which OS property should be prioritized to restrict user execution permissions?

A. User Access Control and Least Privilege Policy  
B. Virtual Memory Page File Size  
C. GUI Color Palette Configuration  
D. Process Scheduler Quantum Interval  

---