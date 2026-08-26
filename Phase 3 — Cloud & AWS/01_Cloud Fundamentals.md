# Cloud Computing Fundamentals – Q&A Guide (Placement Prep)

Foundational concepts before diving into AWS-specific services. Short, crisp answers.

---

## Module 1: What is Cloud Computing?

**Q1. What is Cloud Computing?**
On-demand delivery of computing resources (servers, storage, databases, networking, software) over the internet, with pay-as-you-go pricing — instead of owning physical infrastructure.

**Q2. What problem does cloud computing solve?**
Removes the need to buy/maintain physical hardware — offers elasticity, faster deployment, global reach, and cost efficiency (pay only for what you use).

**Q3. What were the traditional ("on-premise") limitations that cloud solves?**
High upfront capital cost, long procurement/setup time, hard to scale up/down quickly, maintenance burden, limited to physical location.

**Q4. What are the essential characteristics of cloud computing (NIST definition)?**
On-demand self-service, broad network access, resource pooling, rapid elasticity, measured service (pay-per-use).

**Q5. What is elasticity in cloud computing?**
The ability to automatically scale resources up or down based on demand, in near real-time.

**Q6. Elasticity vs Scalability — what's the difference?**
**Scalability** = system's capability to handle increased load by adding resources (can be manual/planned). **Elasticity** = doing that automatically and dynamically, including scaling back down when demand drops.

**Q7. What is "pay-as-you-go" pricing?**
You're billed only for the resources you actually consume (compute time, storage used, data transferred) — no fixed upfront cost.

---

## Module 2: Cloud Service Models (IaaS, PaaS, SaaS)

**Q8. What are the three main cloud service models?**
**IaaS** (Infrastructure as a Service), **PaaS** (Platform as a Service), **SaaS** (Software as a Service).

**Q9. What is IaaS? Give an example.**
Provides virtualized computing resources (VMs, storage, networking) — you manage OS, runtime, apps. Example: AWS EC2, Azure VMs.

**Q10. What is PaaS? Give an example.**
Provides a platform (runtime + tools) to build/deploy apps without managing underlying infrastructure. Example: AWS Elastic Beanstalk, Heroku, Google App Engine.

**Q11. What is SaaS? Give an example.**
Fully managed, ready-to-use software delivered over the internet — no infrastructure or platform management at all. Example: Gmail, Salesforce, Dropbox.

**Q12. How does responsibility split across IaaS/PaaS/SaaS?**
IaaS: you manage OS upward (app, runtime, OS); provider manages hardware/virtualization/network. PaaS: you manage just app + data; provider manages OS, runtime, middleware. SaaS: provider manages everything; you just use the software.

**Q13. Where do containers/Kubernetes fit in this model?**
Often called **CaaS** (Containers as a Service) — sits between IaaS and PaaS; provider manages the orchestration layer (e.g., EKS, GKE) while you manage containerized apps.

**Q14. What is FaaS (Function as a Service) / Serverless?**
A model where you deploy individual functions and the cloud provider handles all infrastructure, scaling, and execution — you're billed per invocation. Example: AWS Lambda.

---

## Module 3: Deployment Models

**Q15. What is a Public Cloud?**
Cloud infrastructure owned/operated by a third-party provider (AWS, Azure, GCP) and shared across multiple customers ("multi-tenant").

**Q16. What is a Private Cloud?**
Cloud infrastructure dedicated to a single organization — either on-premise or hosted, offering more control/security but less cost efficiency.

**Q17. What is a Hybrid Cloud?**
Combination of public + private cloud, with data/applications shared between them — used for flexibility, compliance, or gradual migration.

**Q18. What is a Multi-Cloud strategy?**
Using services from more than one cloud provider (e.g., AWS + Azure) to avoid vendor lock-in, improve resilience, or use best-of-breed services.

**Q19. Why would a company choose private cloud over public cloud?**
Stricter compliance/regulatory requirements, sensitive data control, predictable workloads, or existing infrastructure investment.

---

## Module 4: Core Cloud Concepts

**Q20. What is a Region in cloud computing?**
A geographical area (e.g., "us-east-1") containing multiple isolated data centers, used to reduce latency and meet data residency requirements.

**Q21. What is an Availability Zone (AZ)?**
An isolated data center (or group of them) within a Region, with independent power/cooling/networking — used for high availability/fault tolerance.

**Q22. Why does a Region have multiple Availability Zones?**
So that if one AZ fails (power outage, hardware failure), applications spread across multiple AZs stay available — no single point of failure.

**Q23. What is latency, and why does Region choice matter?**
Latency = delay in data transfer. Choosing a Region close to your users reduces latency and improves app performance.

**Q24. What is virtualization, and why is it foundational to cloud computing?**
Technology that creates virtual (software-based) versions of hardware (servers, storage, networks) — lets one physical machine run multiple isolated virtual machines, enabling cloud providers to share hardware across many customers efficiently.

**Q25. What is a hypervisor?**
Software layer that creates and manages virtual machines on physical hardware — Type 1 (bare-metal, e.g., VMware ESXi) runs directly on hardware; Type 2 (hosted, e.g., VirtualBox) runs on top of an OS.

**Q26. What is multi-tenancy?**
Multiple customers ("tenants") share the same physical infrastructure while their data/resources remain logically isolated from each other.

---

## Module 5: High Availability, Scalability & Fault Tolerance

**Q27. What is High Availability (HA)?**
Designing a system to remain operational and accessible with minimal downtime, typically by eliminating single points of failure (e.g., spreading across AZs).

**Q28. What is Fault Tolerance?**
A system's ability to continue functioning correctly even when a component fails — usually via redundancy (backup components taking over instantly).

**Q29. High Availability vs Fault Tolerance vs Disaster Recovery?**
**HA**: minimize downtime via redundancy. **Fault Tolerance**: system keeps working seamlessly despite failures (stronger guarantee than HA). **Disaster Recovery (DR)**: plan/process to recover systems after a major outage/disaster (may involve some downtime).

**Q30. What is Vertical Scaling vs Horizontal Scaling?**
**Vertical** (scale up): add more power (CPU/RAM) to an existing machine. **Horizontal** (scale out): add more machines/instances to share the load. Cloud favors horizontal scaling for elasticity.

**Q31. What is Load Balancing?**
Distributing incoming traffic across multiple servers/instances to prevent any one from being overwhelmed, improving availability and performance.

**Q32. What is redundancy in cloud architecture?**
Duplicating critical components (servers, data, network paths) so that if one fails, another takes over — the basis of HA and fault tolerance.

**Q33. What is a Single Point of Failure (SPOF)? How does cloud architecture avoid it?**
A component whose failure brings down the entire system. Cloud avoids SPOFs via redundancy — multiple AZs, load balancers, replicated databases.

---

## Module 6: Cloud Storage & Networking Basics

**Q34. What are the main types of cloud storage?**
**Object storage** (files as objects, e.g., S3), **Block storage** (raw storage volumes attached to VMs, e.g., EBS), **File storage** (shared file systems, e.g., EFS/NFS).

**Q35. Object Storage vs Block Storage — when to use which?**
Object storage: unstructured data at scale (images, backups, logs) accessed via API/URL. Block storage: low-latency, high-performance storage attached to a single VM (like a hard disk) — used for OS/databases.

**Q36. What is a CDN (Content Delivery Network)?**
A geographically distributed network of servers that caches content closer to users, reducing latency for static/dynamic content delivery.

**Q37. What is DNS, and why does it matter in cloud architecture?**
Domain Name System — translates human-readable domain names into IP addresses; cloud DNS services also enable routing/failover strategies.

**Q38. What is a VPC (conceptually, not AWS-specific)?**
A logically isolated private network within the cloud provider's infrastructure, where you control IP ranges, subnets, and routing — your own private section of the cloud.

**Q39. Public Subnet vs Private Subnet?**
Public subnet: has a route to the internet (via internet gateway) — used for public-facing resources. Private subnet: no direct internet route — used for internal/backend resources (e.g., databases).

---

## Module 7: Security & Identity Basics

**Q40. What is the Shared Responsibility Model?**
Cloud provider secures the underlying infrastructure ("security **of** the cloud"); customer is responsible for securing what they put in it — data, access control, app configuration ("security **in** the cloud").

**Q41. What is IAM (conceptually)?**
Identity and Access Management — the system for controlling **who** (users/services) can do **what** (permissions) on **which** resources.

**Q42. What is the Principle of Least Privilege?**
Grant users/services only the minimum permissions necessary to perform their task — reduces security risk.

**Q43. What is encryption at rest vs in transit?**
**At rest**: data encrypted while stored (disk/database). **In transit**: data encrypted while moving over the network (e.g., via TLS/HTTPS).

**Q44. What is Multi-Factor Authentication (MFA)?**
Requiring more than one form of verification (e.g., password + OTP) to authenticate — adds a security layer beyond just a password.

---

## Module 8: Pricing & Economics

**Q45. What are the common cloud pricing models?**
**On-Demand** (pay per use, no commitment), **Reserved** (commit for 1-3 years for discount), **Spot** (bid on unused capacity, cheapest but can be reclaimed).

**Q46. What is CapEx vs OpEx, and how does cloud shift this?**
CapEx (Capital Expenditure) = large upfront investment in owned infrastructure. OpEx (Operational Expenditure) = ongoing pay-as-you-go expense. Cloud shifts spending from CapEx to OpEx.

**Q47. What is the "Total Cost of Ownership" (TCO) advantage of cloud?**
Cloud can lower TCO by removing costs of hardware purchase, maintenance, power/cooling, and physical space — while offering elasticity to avoid over-provisioning.

**Q48. What is vendor lock-in, and why is it a concern?**
Difficulty of migrating away from a cloud provider due to proprietary services/APIs/data formats — mitigated via multi-cloud strategy or cloud-agnostic tooling (e.g., Kubernetes, Terraform).

---

## Module 9: Common Interview Questions

**Q49. Why is cloud computing important for modern software/AI development?**
Provides on-demand compute (including GPUs) for training models, managed AI/ML services, massive scalable storage for datasets, and global deployment infrastructure — without needing to own expensive hardware.

**Q50. What are the top cloud providers, and how do they compare at a high level?**
**AWS** (largest market share, broadest service catalog), **Azure** (strong enterprise/Microsoft ecosystem integration), **GCP** (strong in data/AI/ML, Kubernetes origin). Fundamentals are largely transferable across all three.

**Q51. What is "Infrastructure as Code" (IaC)?**
Managing/provisioning infrastructure through machine-readable configuration files (e.g., Terraform, CloudFormation) instead of manual setup — enables version control, repeatability, automation.

**Q52. What is auto-scaling, conceptually?**
A cloud mechanism that automatically adjusts the number of running instances/resources based on real-time demand (metrics like CPU usage), ensuring performance without over-provisioning.

**Q53. Give a simple real-world analogy for cloud computing.**
Like paying an electricity utility for power you use — instead of building and maintaining your own power plant, you draw from a shared grid and pay only for consumption.

---

## Quick Revision Checklist

- [ ] Explain IaaS vs PaaS vs SaaS with examples
- [ ] Region vs Availability Zone
- [ ] Elasticity vs Scalability
- [ ] Vertical vs Horizontal scaling
- [ ] Shared Responsibility Model
- [ ] Object vs Block vs File storage
- [ ] On-Demand vs Reserved vs Spot pricing
- [ ] Public vs Private vs Hybrid cloud
- [ ] High Availability vs Fault Tolerance vs Disaster Recovery

---

*Next: once these fundamentals are solid, move on to the AWS-specific Q&A guide covering actual services (EC2, S3, IAM, Lambda, SageMaker, etc.).*