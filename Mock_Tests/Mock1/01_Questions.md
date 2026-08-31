# Mock Test — All Questions

---

## Section 1

### Question 1
What will be the output of the given code when the user clicks a button?

```html
<body>
<button onclick="myFunction(this);">Test onclick attribute!</button>

<script type="text/javascript">
function myFunction(button) {
    document.write(button.getAttribute("onclick"));
}
</script>
</body>
```

A. True  
B. False  
C. myFunction(this);  
D. None of the given options  

---

### Question 2
What will be the output of the given code?

```javascript
var my_arr = [3, 16, 2, 18];

function myFunction(elem) {
    return (elem + 5);
}

document.write(my_arr.map(myFunction));
```

A. 3, 16, 2, 18  
B. 8, 21, 7, 23  
C. False  
D. True  

---

### Question 3
Which of the following tags is used to define additional details that the user can view or hide in HTML?

A. `<detail></detail>`  
B. `<details></details>`  
C. `<record></record>`  
D. None of the given options  

---

### Question 4
Identify the CSS3 code snippet that can be used to create the given shape.

A. `.shape1 { border-radius: 10px; border: 2px solid #404040; background-color: #ff9a2e; height: 50px; width: 50px; display: inline-block; margin: 5px; }`  

B. `.shape1 { border-radius: 20px 0 20px 0; border: 2px solid #404040; background-color: #ff9a2e; height: 50px; width: 50px; display: inline-block; margin: 5px; }`  

*(Note: Options C and D were not captured in the source screenshot — only A and B are visible.)*

---

### Question 5
Assume that a software system has a general Animal class and specific subclasses such as Dog and Cat. These subclasses inherit common properties and behaviors from Animal. Which Java class setup demonstrates inheritance in this case? Analyze the given choices and select the correct answer.

A.
```java
class Animal { void sound() { System.out.println("Animal sound"); } }
class Dog extends Animal { void sound() { System.out.println("Dog barks"); } }
```

B.
```java
class Animal { void sound() {} }
class Dog { void extends sound() { System.out.println("Dog barks"); } }
```

C.
```java
class Animal { void sound() { System.out.println("Animal sound"); } }
class Dog inherits Animal { }
```

*(Note: Option D was not captured in the source screenshot.)*

---

### Question 6
In a Web filtering service, the firewall stops the user's request from leaving the network. It then queries the Web filter and, based on the reply from the web filter, it allows or disallows the request. Which of the following is **not** a disadvantage of using this service?

A. The Firewall System has to ensure that all requests made by users are copied to the web filter system and hence causing excess use of resources  
B. There is a trust relationship which exists between the firewall system and the web filter and any malicious activity on one system is likely to affect the other system also  
C. In case the web filter starts failing, the network connectivity of the system is tampered with because of the trust relationship that exists between web filters and firewall  
D. A and C  

---

### Question 7
Assume that a software developer is working on a certain code-based task. Which option denotes the relationship between the Car class and the myCar object? Select the correct answer from the given choices.

```java
public class Car {
    private String make;
    private String model;

    public Car(String make, String model) {
        this.make = make;
        this.model = model;
    }

    public String getMake() { return make; }
    public String getModel() { return model; }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Toyota", "Camry");
        System.out.println("My car is a " + myCar.getMake() + " " + myCar.getModel());
    }
}
```

A. Car is the class and myCar is an instance of the class  
B. myCar is the class and Car is an instance of the class  
C. Car and myCar are both instances of the same class  
D. Car and myCar are unrelated concepts  

---

### Question 8
Assume that a Java application having a Java class name "TeaMac" that can handle different types of tea. The class has a method to boil tea based on the tea selected. A code is written as below. Which type of polymorphism is followed in the given code snippet? Analyze the given choices and select the correct answer.

```java
public class TeaMac {
    public Coffee boilTea(ChooseTea choosed) {
        switch (choosed) {
            case GREEN_TEA:
                return boilgreentea();
            default:
                // default code
        }
    }

    public List boilTea(ChooseTea choosed) {
        List teas = new ArrayList(number);
        for (int i=0; i<number; i++) {
            teas.add(boilTea(choosed));
        }
        return teas;
    }
}
```

A. Static polymorphism  
B. Dynamic polymorphism  
C. Late binding  
D. Method overriding  

---

### Question 9
During the development of an application, a developer encounters an error message indicating that the API endpoint they are trying to access is not found. Which HTTP status code is most likely associated with this error?

A. 200  
B. 404  
C. 500  
D. 403  

---

### Question 10
Consider that a public-facing API has undergone significant changes, including modifications to existing endpoints and data structures, making it incompatible with older client applications. The development team needs to deploy these changes without breaking the existing integrations. Which API versioning strategy is generally recommended for handling such breaking changes? Select the correct option from the given choices.

A. Make the changes directly to the existing endpoints and update the clients  
B. Use query parameters to specify the desired version (e.g., /api/resource)  
C. Include the version number in the URL path (e.g., /api/v2/resource)  
D. Use custom HTTP headers to specify the API version  

---

### Question 11
After a successful build in the Continuous Integration pipeline, assume that the compiled and packaged application (e.g. a JAR file, Docker image, or npm package) needs to be stored in a central, versioned repository. This ensures that only approved, tested, and immutable binaries are used for deployments to various environments (development, staging, production). Which DevOps building block addresses the secure storage, versioning, and retrieval of these build outputs? Select the correct option from the given choices.

A. Source Code Management  
B. Database Management  
C. Artifact Management  
D. Container Orchestration  

---

### Question 12
Assume that a company maintains an employee database. Each employee is identified by a unique EmployeeID, but sometimes, employees may change their PhoneNumber. While designing the Employee table, the developer is confused about which column should be chosen as the Primary Key. Which column is the correct choice for the Primary Key? Select the correct option from the given choices.

A. Name  
B. PhoneNumber  
C. EmployeeID  
D. Department  

---

### Question 13
Consider that two transactions run concurrently.
Transaction A: `UPDATE Products SET Stock = Stock - 1 WHERE ProductID = 1001;`
Transaction B: `UPDATE Products SET Stock = Stock - 2 WHERE ProductID = 1001;`
Both succeed, but the final stock shows only the result of one update instead of both. Which concurrency issue is this?

A. Phantom Read  
B. Lost Update  
C. Non-repeatable Read  
D. Deadlock  

---

### Question 14
During deployment, assume a DevOps engineer observes that a containerized application experiences high latency. What approach should the engineer take first to rectify the issue? Select the correct option from the given choices.

A. Increase the CPU and memory limits  
B. Analyze the network traffic and logs  
C. Restart the container  
D. Reduce the number of containers  

---

## Section 2: Fundamentals of Networking

### Question 15
What is the main purpose of network segmentation in security? Analyze the given choices and select the correct answer.

A. Increasing bandwidth by improving signal strength  
B. Limiting the spread of attacks  
C. Reducing latency  

*(Note: Option D was not captured in the source screenshot.)*

---

### Question 16
Consider that an organization is using a VPN solution that provides strong confidentiality (encryption) and data integrity/authentication for its sensitive communications. Which protocol is specifically designed to provide both these security services for the packet's payload and can operate in tunnel mode?

A. Authentication Header (AH)  
B. Internet Key Exchange (IKE)  
C. Encapsulating Security Payload (ESP)  
D. Generic Routing Encapsulation (GRE)  

---

### Question 17
Assume that an employee at a multinational organization is working from home due to some reason and needs to access the company's internal network to retrieve some files. Which type of Virtual Private Network (VPN) will be best suitable for this case?

A. Remote-access VPN  
B. Site-to-site VPN  
C. MPLS VPN  
D. P2P VPN  

---

### Question 18
Assume a network service requires fast, connectionless communication for simple query-response interactions, where the loss of packets is acceptable but retransmissions will introduce unacceptable delays. Which protocol is best suited for this type of service? Select the correct option from the given choices.

A. HTTP  
B. FTP  
C. DNS  
D. SMTP  

---

### Question 19
During a video call, packets travel from one device to another across different networks. To ensure data arrives correctly and in the right order, which layer of the OSI Model is responsible for error-checking and reliable delivery?

A. Physical Layer  
B. Data Link Layer  
C. Transport Layer  
D. Network Layer  

---

### Question 20
Assume a mid-sized enterprise wants to deploy a firewall that not only filters traffic based on IP addresses, ports, and protocols but also tracks the state of active connections to ensure session integrity. They also prefer to avoid deploying multiple devices for different layers of filtering. Which type of firewall best meets these combined requirements? Select the correct answer from the given choices.

A. A stateful packet inspection firewall  
B. An application-layer firewall  
C. A basic packet-filtering firewall  
D. A software-only firewall without session tracking  

---

### Question 21
Consider that a growing business is searching for a hassle-free solution to access office productivity tools without the complexities of IT management. They aim for a cost-effective approach that allows seamless application delivery over the internet. Based on the scenario, which cloud computing use case would be most suitable for their requirement?

A. Big Data Intelligence  
B. Testing and Building Applications  
C. Software as a Service  
D. Intelligent Energy-Saving Methods  

---

### Question 22
Assume that a company is migrating its legacy data sources to a new cloud-based platform while maintaining operations without downtime. During the migration, they need to ensure that data from both the old and new systems can be accessed simultaneously for real-time reporting and analytics, with data being logically integrated without physical movement. Considering the requirements, which architectural layer would best handle the logical integration and seamless access to data from both environments, ensuring minimal disruption and secure data access? Analyze the given choices and select the correct answer.

A. Connection layer using direct database access protocols  
B. Consumption layer utilizing middleware with abstracted APIs  
C. Abstraction layer that logically unifies disparate data sources  
D. Data caching layer storing temporary data replicas  

---

### Question 23
Assume that you have recently started working for an organization that is transitioning to a cloud-based infrastructure. As part of IT governance, you are responsible for ensuring data security in the cloud environment. You are aware of various cloud deployment models and need to choose the most secure option for your organization's sensitive data. In the context of IT governance and cloud security, which cloud deployment model is typically the most secure choice for organizations with highly sensitive data?

A. Public Cloud  
B. Private Cloud  
C. Hybrid Cloud  
D. Community Cloud  

---

### Question 24
What is the technology that allows multiple operating systems to run on a single physical machine? Analyze the given choices and select the correct answer.

A. Virtualization  
B. Containerization  
C. Clustering  
D. Replication  

---

### Question 25
Which cloud model allows a customer to choose the operating system, influence network configurations, without managing the underlying infrastructure?

A. SAAS  
B. PAAS  
C. IAAS  
D. All the Given Options  

---

### Question 26
Consider that as part of the data center modernization initiative, the IT team is tasked with addressing storage challenges. The goal is to leverage existing storage devices from various vendors and integrate them with the next generation storage solutions. How does resource pooling play a crucial role in achieving elasticity in storage solutions for cloud computing? Select the correct answer from the given choices.

A. By eliminating the need for server virtualization  
B. By minimizing financial and contractual commitments  
C. By ensuring a global-scale, reliable, and resilient storage solution  
D. By optimizing capacity for executing code and running instances  

---

### Question 27
Assume that an embedded system encrypts data using a substitution cipher with a key-driven method to minimize resource usage. After deployment, it is discovered that some characters in the encrypted text are not correctly decrypted, leading to data loss. What is the most likely cause of this issue? Analyze the given choices and select the correct answer.

A. The decryption map incorrectly handles negative indices during character remapping.  
B. The decryption process incorrectly uses the encryption key, leading to incorrect character mapping.  
C. The encryption map creates duplicate character mappings due to key collision, causing data loss.  
D. The length of the characters string causes an incorrect modulo operation during remapping, leading to data corruption.  

---

### Question 28
Assume that in a corporate Wi-Fi setup, employees need secure access. Which EAP authentication method simplifies the process by using only server-side certificates? Select the correct answer from the given choices.

A. EAP-MD-5  
B. EAP-TLS  
C. EAP-TTLS  
D. PEAP  

---

## Section 3

### Question 29
Assume that you want to find the count of the total occurrences of a particular character in the FirstandLastName field. Which of the SQL queries is correctly related to the given case? Note: Suppose the character is 'm' and you need to fetch it from StudentDetails.

A.
```sql
FROM StudentDetails
SELECT FirstandLastName,
COUNT(FirstandLastName) - COUNT(REPLACE(FirstandLastName, 'm', ''));
```

B.
```sql
SELECT FirstandLastName,
COUNT(FirstandLastName) - COUNT(REPLACE(FirstandLastName, 'm', ''))
FROM StudentDetails;
```

C.
```sql
FROM StudentDetails
SELECT FirstandLastName,
LENGTH(FirstandLastName) - LENGTH(REPLACE(FirstandLastName, 'm', ''));
```

D.
```sql
SELECT FirstandLastName,
LENGTH(FirstandLastName) - LENGTH(REPLACE(FirstandLastName, 'm', ''))
FROM StudentDetails;
```

---

### Question 30
Assume that you want to fetch student names and mark records. In this case, you also want to display the student's details even if the marks record is absent. Which SQL query can be used to complete the desired task? Analyze the given choices and select the correct option.

A.
```sql
SELECT E.StudentName FROM M.Mark WHERE StudentDetails E LEFT JOIN GROUP BY StudentMark M IN E.StudentId = M.StudentId;
```

B.
```sql
SELECT E.StudentName, M.Mark FROM StudentDetails E LEFT JOIN GROUP BY StudentMark M IN E.StudentId = M.StudentId;
```

C.
```sql
SELECT E.StudentName, M.Mark FROM StudentDetails E LEFT JOIN StudentMark M ON E.StudentId = M.StudentId;
```

*(Note: Option D was not captured in the source screenshot.)*

---

### Question 31
Write pseudocode to initialize an array named ages with values [25, 30, 22, 28, 35] and print the second element of the array.

A.
```
ARRAY ages[5] = [25, 30, 22, 28, 35]
PRINT ages[2]
```

B.
```
ARRAY ages[5]
ages[1] = 25
ages[2] = 30
ages[3] = 22
ages[4] = 28
ages[5] = 35
PRINT ages[2]
```

C.
```
ARRAY ages[5] = [25, 30, 22, 28, 35]
PRINT ages[1]
```

---

### Question 32
Which of the given options (as values for s) could possibly print the output as "Valid" in the following pseudocode?

```
function validCheck(string s):
    if s matches "[a-zA-Z0-9]{6}"
        then print "Valid"
    else
        then print "Not Valid"
    endif
end function validCheck
```

A. arun32  
B. kkvarun32  
C. arun$2  
D. arun@2  

---

### Question 33
What will be the output of the depicted pseudo code?

```
Integer a,b,c
Set a=8, b=5, c=6

for(each c from 3 to 4)
    b=9+b
    b=(b+7)+a
    b=(b&4)+b
End for

Print a+b
```

A. 78  
B. 69  
C. 55  
D. 65  

---

### Question 34
What will be the output of the given pseudo code?

```
Integer j
Integer arr[2][2] = {{1, 2}, {2, 4}}

arr[0][1] = (arr[1][0] & arr[0][0]) & arr[1][1]

if ((arr[0][0] - arr[0][1]) > (arr[1][1] + arr[0][1]))
    arr[0][0] = (arr[1][1] + arr[1][1]) + arr[0][0]
End if

arr[0][0] = (3+7) & arr[0][0]

Print arr[1][1] + arr[0][0]
```

A. 1.0  
B. 4.0  
C. 8.0  
D. 17.0  

---

### Question 35
What does the following pseudocode accomplish?

```
FUNCTION cal(number):
    IF number is 0 OR number is 1
        RETURN 1
    ELSE:
        RETURN some_operation(number, cal(number - 1))
    END IF
END FUNCTION cal

result = cal(input_number)
PRINT result
```

A. Calculates the factorial of input_number.  
B. Computes the sum of input_number and its predecessors.  
C. Multiplies input_number by the product of its predecessors.  
D. Determines the square of input_number.  

---

### Question 36
What will be the output of the following pseudo code for a=0, b=2, c=7?

```
Integer funn(Integer a, Integer b, Integer c)

if((a+c+b)<(3+b-a))
    a=b+c

    if((b+c+a)<(9+a+6))
        a=(b+a)+b
    Else
        b=(3+4)+a
    End if

    c=(b+c)+c
End if

Print a+b+c
```

A. 6  
B. 9  
C. 13  
D. 27  

---

### Question 37
What will be the output of the following pseudo code?

```
Integer p,q,r
Set p=4, q=8, r=6

if((p+r)>(q-p))
    q=(q+7)+q

    if((4+q^p)<(7+p+r))
        p=(q^p)^r
    Else
        r=5+q
    End if
End if

Print p+q+r
```

A. 50  
B. 59  
C. 55  
D. 63  

---

### Question 38
What will be the output of the following pseudo code for a=1, b=6, c=7?

```
Integer funn(Integer a, Integer b, Integer c)

if((a+8+c)<(6+a))
    a=(a+b)+b

    if((a+b+c)<(b+c+a))
        a=c+c
    Else
        c=(c+a)+b
    End if

    c=7+b
End if

return a+b+c
```

A. 14  
B. 20  
C. 9  
D. 24  

---

## Section 4: Common Applications and OS

### Question 39
Assume a CPU needs to fetch an instruction from the main memory. Which physical component on the motherboard acts as the primary communication pathway for data, addresses, and control signals between the CPU, memory, and I/O devices? Select the correct option from the given choices.

A. Peripheral Component Interconnect (PCI) slot  
B. System Bus  
C. CPU Register  
D. Northbridge/Southbridge Chipset  

---

### Question 40
Suppose you want to implement a bus where the input-output devices are attached to the computer by wires. In this, the data transfer on a bus is carried out by electronic processes. Then the host controller sends messages to the device controller, and the device controller performs the operations. Which device will you choose if these device controllers consist of a built-in cache so that data transfer occurs faster?

A. Enhanced interior drive electronics  
B. Enhanced integrated drive electronics  
C. Enhanced interior driver electronics  
D. Enhanced integrated hard driver  

---

### Question 41
You are designing the file management subsystem of an operating system. Besides creating, deleting, and manipulating files and directories, which additional function would significantly improve the system's ability to organize and access files efficiently?

A. Implementing file compression techniques  
B. Managing file permissions and access control  
C. Supporting file encryption for security  
D. Maintaining file backup and recovery mechanisms  

---

### Question 42
In MS PowerPoint, a presenter wants to automatically highlight key bullet points one by one after explaining each, without manually animating every bullet. What is the best feature to use?

A. Apply a delay on each bullet animation.  
B. Use the 'Appear' animation with trigger action.  
C. Use the 'By Paragraph' animation option.  
D. Group bullets and animate them with 'Wipe'.  

---

### Question 43
John is writing a report and needs to insert today's date without typing it manually. Which shortcut in MS Word allows him to do this?

A. Alt + Shift + D  
B. Ctrl + Shift + T  
C. Ctrl + Alt + D  
D. Shift + F5  

---

### Question 44
In the dataset below, what is the result of the following formula? `=INDEX(A2:A9, MATCH(MAX(C2:C9), C2:C9, 0))`

| Product | Category | Unit Price | Units Sold | Discount % | Sale Date | Region |
|---|---|---|---|---|---|---|
| Laptop | Electronics | 850 | 10 | 5 | 10-01-2023 | North |
| Monitor | Electronics | 200 | 25 | 10 | 15-01-2023 | South |
| Mouse | Accessories | 25 | 100 | 0 | 01-02-2023 | North |
| Keyboard | Accessories | 45 | 60 | 0 | 10-02-2023 | East |
| Printer | Electronics | 300 | 15 | 15 | 05-03-2023 | West |
| Tablet | Electronics | 500 | 20 | 5 | 15-03-2023 | South |
| Webcam | Accessories | 50 | 40 | 0 | 01-04-2023 | North |
| Speaker | Accessories | 70 | 30 | 10 | 10-04-2023 | East |

A. Printer  
B. Laptop  
C. Mouse  
D. Monitor  

---

### Question 45
Assume that you are employed by a company that has recently suffered a security breach in its computer systems. As the IT manager, you are assigned the responsibility of enhancing the company's operating system security. Which property of an operating system will you prioritize in order to achieve this goal? Select the correct answer from the given choices.

A. Access control  
B. User interface  
C. Multitasking  
D. Virtual memory  

---