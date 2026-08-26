# AWS Basics – Q&A Guide (Placement Prep)

AWS platform-level fundamentals — before diving into individual services (Tier 1/2/3). Short, crisp answers.

---

## Module 1: What is AWS?

**Q1. What is AWS?**
Amazon Web Services — a cloud platform offering 200+ on-demand services (compute, storage, database, networking, AI/ML, etc.) on a pay-as-you-go basis.

**Q2. When was AWS launched, and why is it significant?**
Launched in 2006. It pioneered the modern public cloud market and remains the largest cloud provider by market share.

**Q3. What are the main categories of AWS services?**
Compute, Storage, Database, Networking, Security/IAM, AI/ML, Analytics, Developer Tools, Management/Monitoring, Application Integration.

**Q4. How do you access/interact with AWS?**
Three main ways: **AWS Management Console** (web UI), **AWS CLI** (command line), **AWS SDKs** (programmatic, e.g., boto3 for Python).

---

## Module 2: AWS Global Infrastructure

**Q5. What is an AWS Region?**
A physical geographic location (e.g., `us-east-1` N. Virginia, `ap-south-1` Mumbai) containing multiple isolated Availability Zones.

**Q6. What is an AWS Availability Zone (AZ)?**
One or more discrete data centers within a Region, each with independent power/cooling/networking, connected via low-latency links — used for fault tolerance.

**Q7. How many AZs does a typical AWS Region have?**
Usually 3 or more (minimum by AWS design), so workloads can be spread for high availability.

**Q8. What is an Edge Location?**
A smaller AWS site (more numerous than Regions) used by CloudFront (CDN) and Route 53 to cache content and reduce latency closer to end users.

**Q9. How do you choose which Region to deploy in?**
Based on: proximity to users (latency), data residency/compliance laws, service availability in that Region, and pricing differences.

**Q10. What is a Local Zone / Wavelength Zone (awareness-level)?**
Extensions of a Region placed closer to large population/industry centers (Local Zones) or telecom networks (Wavelength) for ultra-low-latency use cases.

---

## Module 3: AWS Account & Access Basics

**Q11. What is the AWS root user?**
The account created at sign-up with full, unrestricted access — best practice is to avoid using it day-to-day and instead create IAM users/roles with limited permissions.

**Q12. What is an IAM user vs an IAM role?**
**IAM user**: a persistent identity (with credentials) for a person or app. **IAM role**: a temporary identity assumed by users/services/apps — no long-term credentials, safer for cross-service access.

**Q13. What is an IAM policy?**
A JSON document defining permissions — what actions are allowed/denied on which resources.

**Q14. What is AWS Organizations?**
A service to centrally manage and govern multiple AWS accounts (billing consolidation, policy enforcement) — used by companies with many teams/projects.

**Q15. What is a resource-based policy vs an identity-based policy?**
Identity-based: attached to a user/group/role, defines what *they* can do. Resource-based: attached to a resource (e.g., an S3 bucket), defines who can access *that resource*.

---

## Module 4: Billing & Free Tier

**Q16. What is the AWS Free Tier?**
A set of services offered free up to certain limits for 12 months (or always-free for some services) — used for learning/experimentation without cost.

**Q17. How does AWS billing work at a high level?**
Pay-as-you-go — charged per resource usage (compute hours, storage GB, data transfer, API requests), billed monthly.

**Q18. What is AWS Cost Explorer?**
A tool to visualize, understand, and forecast your AWS spending over time.

**Q19. What is AWS Budgets?**
A service to set custom cost/usage thresholds and get alerts when you're close to or exceed them.

**Q20. What is data transfer cost awareness (a common gotcha)?**
Data transfer **into** AWS is generally free; data transfer **out** to the internet (and sometimes between Regions/AZs) is charged — a common cost surprise for beginners.

---

## Module 5: Core AWS Concepts You'll See Everywhere

**Q21. What is an ARN (Amazon Resource Name)?**
A unique identifier for every AWS resource, e.g., `arn:aws:s3:::my-bucket` — used in IAM policies and cross-service references.

**Q22. What does "Managed Service" mean in AWS context?**
AWS handles the underlying infrastructure, patching, and scaling for you (e.g., RDS is a managed database) — vs. self-managed, where you handle that yourself (e.g., running MySQL on an EC2 instance).

**Q23. What is the AWS Well-Architected Framework?**
A set of best-practice guidelines across 6 pillars: **Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability** — used to evaluate/design cloud architectures.

**Q24. What is an AWS SDK, and why does it matter?**
A language-specific library (e.g., boto3 for Python, AWS SDK for JS) that lets applications programmatically call AWS APIs — how most real-world apps interact with AWS.

**Q25. What is Infrastructure as Code in AWS, and what tool supports it natively?**
Defining AWS infrastructure in code instead of manually via console. AWS's native tool is **CloudFormation**; **Terraform** (third-party, cloud-agnostic) is also very widely used in industry.

**Q26. What is a VPC, in AWS-specific terms?**
Amazon Virtual Private Cloud — an isolated, customizable virtual network within AWS where you launch resources (EC2, RDS, etc.), with your own IP range, subnets, and routing rules.

**Q27. What is the default way AWS ensures security between account and resources?**
Everything is **deny by default** — no access is granted unless explicitly allowed via an IAM policy (principle of least privilege baked in).

---

## Module 6: Deployment & Automation Basics

**Q28. What is the AWS CLI used for?**
Running AWS commands from the terminal/scripts — useful for automation, CI/CD pipelines, and quick operations without the console.

**Q29. What is a common CI/CD flow using AWS (conceptually)?**
Code pushed to a repo → build/test triggered (e.g., CodeBuild) → deployed automatically to AWS compute (EC2/ECS/Lambda) via a pipeline (e.g., CodePipeline).

**Q30. What is tagging in AWS, and why is it useful?**
Attaching key-value metadata (e.g., `Environment: Production`) to resources — helps with cost tracking, automation, and organization at scale.

---

## Module 7: Common Interview Questions

**Q31. Why do most companies choose AWS over building their own data centers?**
Avoids high CapEx, offers elastic scaling, global reach, managed services (less operational overhead), and pay-as-you-go economics.

**Q32. What's the difference between AWS Console, CLI, and SDK — when would you use each?**
Console: manual/exploratory tasks, quick setup. CLI: scripting, automation, one-off commands. SDK: building applications that programmatically interact with AWS.

**Q33. What happens if you deploy resources only in one Availability Zone?**
You create a single point of failure — if that AZ has an outage, your application goes down. Best practice is to spread critical resources across multiple AZs.

**Q34. What's the difference between AWS's global infrastructure model and a traditional single data center?**
AWS spans many Regions/AZs worldwide with redundancy and proximity to users built in; a traditional data center is a single location with no inherent geographic redundancy.

**Q35. As a beginner, what's the recommended first step before touching real AWS services?**
Set up an account, enable MFA on the root user, create an IAM user (don't use root for daily work), and get familiar with the Free Tier limits to avoid unexpected charges.

---

## Quick Revision Checklist

- [ ] Explain Region vs AZ vs Edge Location
- [ ] Root user vs IAM user vs IAM role
- [ ] Console vs CLI vs SDK — when to use each
- [ ] Well-Architected Framework's 6 pillars
- [ ] Why data transfer OUT costs money but IN is usually free
- [ ] What "managed service" means, with an example
- [ ] Principle of least privilege in IAM policies

---

*Next up: Tier 1 core AWS services (EC2, S3, IAM, VPC, RDS, Lambda, etc.) in the same Q&A format.*