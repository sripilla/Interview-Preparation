# AWS Tier 1 – Core Services Q&A + Commands (Placement Prep)

Module-wise, sequential. Each module covers one core service: Q&A first, then relevant AWS CLI commands.

---

## Module 1: EC2 (Elastic Compute Cloud)

**Q1. What is EC2?**
A service providing resizable virtual servers ("instances") in the cloud — the core AWS compute building block.

**Q2. What is an AMI (Amazon Machine Image)?**
A template containing the OS, application server, and configuration used to launch an EC2 instance — you can use AWS-provided AMIs or create your own.

**Q3. What is an instance type, and how do you choose one?**
Defines the hardware profile (CPU, RAM, network, storage) of an instance, e.g., `t3.micro`, `m5.large`. Choose based on workload: general purpose (T/M series), compute-optimized (C series), memory-optimized (R series), GPU (P/G series for ML).

**Q4. What is a Security Group?**
A virtual firewall attached to an instance controlling inbound/outbound traffic — rules are **stateful** (allow rule automatically allows the return traffic) and default to deny-all inbound.

**Q5. What is a Key Pair in EC2?**
A public/private key pair used to securely SSH into a Linux instance (or decrypt the admin password on Windows) — AWS stores the public key, you keep the private key (`.pem` file).

**Q6. What are EC2 pricing models?**
**On-Demand** (pay per hour/second, no commitment), **Reserved Instances** (1-3 yr commitment, discounted), **Spot Instances** (bid for unused capacity, cheapest but can be reclaimed), **Savings Plans** (flexible commitment-based discount).

**Q7. What is an Elastic IP?**
A static, public IPv4 address you can allocate and attach to an instance — stays fixed even if the instance is stopped/restarted (unlike the default public IP, which changes).

**Q8. What is User Data in EC2?**
A script passed at launch time that runs automatically on first boot — used to bootstrap/configure the instance (e.g., install software).

**Q9. What is the difference between stopping and terminating an EC2 instance?**
**Stop**: instance shuts down but EBS root volume persists — can be restarted later. **Terminate**: instance is permanently deleted (and its root EBS volume, by default, unless "delete on termination" is disabled).

### EC2 Commands
```bash
aws ec2 describe-instances                          # list instances
aws ec2 run-instances --image-id ami-xxxx --instance-type t2.micro --key-name mykey  # launch instance
aws ec2 start-instances --instance-ids i-xxxx        # start instance
aws ec2 stop-instances --instance-ids i-xxxx         # stop instance
aws ec2 terminate-instances --instance-ids i-xxxx    # terminate instance
aws ec2 describe-security-groups                     # list security groups
aws ec2 create-security-group --group-name mySG --description "my sg"  # create SG
aws ec2 authorize-security-group-ingress --group-id sg-xxxx --protocol tcp --port 22 --cidr 0.0.0.0/0  # allow SSH
aws ec2 describe-images --owners self                # list your AMIs
aws ec2 create-key-pair --key-name mykey --query 'KeyMaterial' --output text > mykey.pem  # create key pair
```

---

## Module 2: S3 (Simple Storage Service)

**Q10. What is S3?**
Object storage service for storing/retrieving any amount of data (files, images, backups, logs) via a simple API, organized into **buckets**.

**Q11. What is a bucket in S3, and what naming rule matters?**
A top-level container for objects. Bucket names must be **globally unique** across all AWS accounts.

**Q12. What is an object in S3?**
A file + its metadata, stored with a unique key (like a path) inside a bucket. Max object size: 5TB.

**Q13. What are S3 storage classes?**
**Standard** (frequent access), **Intelligent-Tiering** (auto-moves data based on access pattern), **Standard-IA**/**One Zone-IA** (infrequent access, cheaper), **Glacier**/**Glacier Deep Archive** (archival, very cheap, slow retrieval).

**Q14. What is S3 versioning?**
Keeps multiple versions of an object in the same bucket — protects against accidental deletion/overwrite; must be explicitly enabled.

**Q15. How do you control access to an S3 bucket/object?**
Via **Bucket Policies** (resource-based, JSON), **IAM Policies** (identity-based), **ACLs** (legacy, object/bucket-level), and **Block Public Access** settings (account/bucket-level safety switch).

**Q16. What is a presigned URL?**
A temporary URL that grants time-limited access to a private S3 object without changing bucket permissions — commonly used for secure downloads/uploads.

**Q17. What is S3 Lifecycle Policy?**
Rules to automatically transition objects between storage classes or delete them after a set time (e.g., move to Glacier after 90 days).

**Q18. Is S3 a good choice for hosting a static website?**
Yes — S3 supports static website hosting directly (HTML/CSS/JS), often paired with CloudFront for CDN + HTTPS.

### S3 Commands
```bash
aws s3 ls                                    # list buckets
aws s3 mb s3://my-bucket                     # create (make) bucket
aws s3 rb s3://my-bucket                     # remove bucket
aws s3 cp file.txt s3://my-bucket/           # upload file
aws s3 cp s3://my-bucket/file.txt .          # download file
aws s3 sync ./localfolder s3://my-bucket/    # sync folder to bucket
aws s3 rm s3://my-bucket/file.txt            # delete an object
aws s3 ls s3://my-bucket                     # list objects in bucket
aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Enabled  # enable versioning
aws s3api put-bucket-policy --bucket my-bucket --policy file://policy.json  # apply bucket policy
aws s3 presign s3://my-bucket/file.txt --expires-in 300   # generate presigned URL
```

---

## Module 3: IAM (Identity and Access Management)

**Q19. What is IAM?**
AWS's service for managing users, groups, roles, and permissions — controls who can access what within your AWS account.

**Q20. IAM User vs IAM Group vs IAM Role?**
**User**: identity for a person/app with long-term credentials. **Group**: collection of users sharing the same permissions. **Role**: temporary identity assumed by users/services (no long-term credentials) — best practice for cross-account/service access.

**Q21. What is an IAM Policy, and what format is it in?**
A JSON document specifying `Effect` (Allow/Deny), `Action` (e.g., `s3:GetObject`), `Resource` (ARN), and optionally `Condition`.

**Q22. What are managed policies vs inline policies?**
**Managed**: standalone, reusable policies (AWS-managed or customer-managed) attachable to multiple identities. **Inline**: embedded directly into a single user/group/role — not reusable.

**Q23. What is the principle of least privilege in IAM?**
Grant only the minimum permissions needed to perform a task — reduces blast radius if credentials are compromised.

**Q24. What is MFA in IAM, and why use it?**
Multi-Factor Authentication — requires a second verification factor (e.g., OTP app) beyond just a password, especially critical for the root user.

**Q25. What is an IAM Role commonly used for with EC2?**
Attaching a role to an EC2 instance lets applications on it call other AWS services (e.g., S3) securely, without hardcoding access keys.

### IAM Commands
```bash
aws iam list-users                              # list IAM users
aws iam create-user --user-name john             # create a user
aws iam create-group --group-name developers     # create a group
aws iam add-user-to-group --user-name john --group-name developers  # add user to group
aws iam attach-user-policy --user-name john --policy-arn arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess  # attach policy
aws iam create-role --role-name myrole --assume-role-policy-document file://trust-policy.json  # create role
aws iam attach-role-policy --role-name myrole --policy-arn arn:aws:iam::aws:policy/AmazonEC2FullAccess  # attach policy to role
aws iam list-policies --scope Local              # list customer-managed policies
aws iam create-access-key --user-name john        # generate access key for a user
aws iam delete-user --user-name john              # delete a user
```

---

## Module 4: VPC (Virtual Private Cloud)

**Q26. What is a VPC?**
An isolated, customizable virtual network within AWS where you launch resources — you control the IP range, subnets, routing, and gateways.

**Q27. What is a Subnet?**
A subdivision of a VPC's IP range, tied to a specific Availability Zone — classified as **public** (has internet route) or **private** (no direct internet route).

**Q28. What is an Internet Gateway (IGW)?**
A VPC component that allows communication between resources in a public subnet and the internet.

**Q29. What is a NAT Gateway, and why is it needed?**
Allows resources in a **private** subnet to initiate outbound internet connections (e.g., for updates) without being directly reachable from the internet.

**Q30. What is a Route Table?**
A set of rules ("routes") that determine where network traffic from a subnet is directed.

**Q31. Security Group vs Network ACL (NACL)?**
**Security Group**: instance-level firewall, stateful (return traffic auto-allowed), only "allow" rules. **NACL**: subnet-level firewall, stateless (must explicitly allow both directions), supports both "allow" and "deny" rules.

**Q32. What is VPC Peering?**
A network connection between two VPCs enabling them to communicate using private IP addresses, as if they were in the same network.

**Q33. What is a CIDR block?**
A notation (e.g., `10.0.0.0/16`) defining a range of IP addresses — used to size a VPC or subnet.

### VPC Commands
```bash
aws ec2 describe-vpcs                                     # list VPCs
aws ec2 create-vpc --cidr-block 10.0.0.0/16                # create a VPC
aws ec2 create-subnet --vpc-id vpc-xxxx --cidr-block 10.0.1.0/24  # create a subnet
aws ec2 create-internet-gateway                             # create IGW
aws ec2 attach-internet-gateway --vpc-id vpc-xxxx --internet-gateway-id igw-xxxx  # attach IGW to VPC
aws ec2 create-route-table --vpc-id vpc-xxxx                # create route table
aws ec2 create-route --route-table-id rtb-xxxx --destination-cidr-block 0.0.0.0/0 --gateway-id igw-xxxx  # add internet route
aws ec2 create-nat-gateway --subnet-id subnet-xxxx --allocation-id eipalloc-xxxx  # create NAT gateway
aws ec2 describe-subnets                                    # list subnets
aws ec2 create-vpc-peering-connection --vpc-id vpc-xxxx --peer-vpc-id vpc-yyyy  # create VPC peering
```

---

## Module 5: RDS (Relational Database Service)

**Q34. What is RDS?**
A managed relational database service — AWS handles provisioning, patching, backups, and scaling for engines like MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Aurora.

**Q35. What is Multi-AZ deployment in RDS?**
Automatically maintains a synchronous standby replica in a different AZ — provides automatic failover for high availability (not for read scaling).

**Q36. What is a Read Replica in RDS?**
An asynchronously replicated, read-only copy of the database used to offload read traffic and improve read scalability — can also be promoted to a standalone DB.

**Q37. Multi-AZ vs Read Replica — what's the key difference?**
Multi-AZ = high availability/failover (same Region, standby not readable). Read Replica = read scalability (can be cross-Region, readable).

**Q38. What is Amazon Aurora?**
AWS's proprietary, cloud-optimized relational database engine (MySQL/PostgreSQL-compatible) — offers higher performance and availability than standard RDS engines.

**Q39. How does RDS handle backups?**
Automated daily backups + transaction logs (enabling point-in-time recovery), plus manual DB snapshots you can trigger anytime.

**Q40. What is RDS good for vs when would you use DynamoDB instead?**
RDS: structured data with relationships, need for SQL/joins/transactions. DynamoDB: key-value/document data, need massive scale, low-latency, flexible schema.

### RDS Commands
```bash
aws rds describe-db-instances                        # list DB instances
aws rds create-db-instance --db-instance-identifier mydb --db-instance-class db.t3.micro --engine mysql --master-username admin --master-user-password mypassword --allocated-storage 20  # create DB instance
aws rds start-db-instance --db-instance-identifier mydb   # start DB
aws rds stop-db-instance --db-instance-identifier mydb    # stop DB
aws rds create-db-snapshot --db-instance-identifier mydb --db-snapshot-identifier mydb-snap1  # create snapshot
aws rds restore-db-instance-from-db-snapshot --db-instance-identifier mydb-restored --db-snapshot-identifier mydb-snap1  # restore from snapshot
aws rds create-db-instance-read-replica --db-instance-identifier mydb-replica --source-db-instance-identifier mydb  # create read replica
aws rds delete-db-instance --db-instance-identifier mydb --skip-final-snapshot  # delete DB instance
```

---

## Module 6: Lambda

**Q41. What is AWS Lambda?**
A serverless compute service that runs your code in response to events, without provisioning or managing servers — you're billed per invocation/execution time.

**Q42. What is a "trigger" in Lambda?**
An event source that invokes a Lambda function — e.g., an S3 upload, API Gateway request, DynamoDB stream, CloudWatch schedule, SNS message.

**Q43. What is cold start in Lambda?**
The latency delay when a Lambda function is invoked after being idle — AWS needs to initialize a new execution environment before running the code.

**Q44. What are Lambda's execution limits (awareness-level)?**
Max execution timeout: 15 minutes. Memory: 128MB–10GB (CPU scales with memory). Not suited for long-running processes.

**Q45. What is a Lambda Layer?**
A way to package shared code/libraries separately from your function code, so multiple functions can reuse them without duplicating.

**Q46. How does Lambda pricing work?**
Charged based on number of requests + compute time (GB-seconds, based on memory allocated × execution duration) — no charge when not running.

**Q47. What are common use cases for Lambda?**
Event-driven data processing (e.g., resizing images on S3 upload), API backends (with API Gateway), scheduled jobs (cron-like), glue logic between services.

### Lambda Commands
```bash
aws lambda list-functions                              # list functions
aws lambda create-function --function-name myFunc --runtime python3.12 --role arn:aws:iam::xxxx:role/lambda-role --handler index.handler --zip-file fileb://function.zip  # create function
aws lambda invoke --function-name myFunc output.json    # invoke function
aws lambda update-function-code --function-name myFunc --zip-file fileb://function.zip  # update code
aws lambda delete-function --function-name myFunc       # delete function
aws lambda add-permission --function-name myFunc --statement-id s3invoke --action lambda:InvokeFunction --principal s3.amazonaws.com  # allow S3 to trigger it
aws lambda get-function --function-name myFunc          # get function details
```

---

## Module 7: EBS (Elastic Block Store)

**Q48. What is EBS?**
Block-level storage volumes attached to EC2 instances — used like a virtual hard disk, persists independently of the instance lifecycle (unless configured otherwise).

**Q49. What are the types of EBS volumes?**
**gp3/gp2** (general purpose SSD), **io1/io2** (provisioned IOPS SSD, high performance), **st1** (throughput-optimized HDD), **sc1** (cold HDD, cheapest, infrequent access).

**Q50. Can one EBS volume be attached to multiple EC2 instances?**
Generally no — a standard EBS volume attaches to a single instance at a time (except `io1`/`io2` with Multi-Attach enabled, a special case).

**Q51. What is an EBS Snapshot?**
A point-in-time, incremental backup of an EBS volume stored in S3 — used for backup/restore or creating new volumes.

**Q52. EBS vs Instance Store — what's the difference?**
EBS: persistent, network-attached, survives instance stop/termination (if configured). Instance Store: physically attached to the host, **ephemeral** — data lost on stop/termination.

### EBS Commands
```bash
aws ec2 describe-volumes                                 # list volumes
aws ec2 create-volume --availability-zone us-east-1a --size 20 --volume-type gp3  # create volume
aws ec2 attach-volume --volume-id vol-xxxx --instance-id i-xxxx --device /dev/sdf  # attach volume
aws ec2 detach-volume --volume-id vol-xxxx                # detach volume
aws ec2 create-snapshot --volume-id vol-xxxx --description "backup"  # create snapshot
aws ec2 describe-snapshots --owner-ids self                # list your snapshots
aws ec2 delete-volume --volume-id vol-xxxx                 # delete volume
```

---

## Module 8: Elastic Load Balancer (ELB)

**Q53. What is a Load Balancer, and why use one?**
Distributes incoming traffic across multiple targets (EC2 instances, containers, IPs) — improves availability, fault tolerance, and scalability.

**Q54. What are the types of AWS Load Balancers?**
**Application Load Balancer (ALB)**: Layer 7 (HTTP/HTTPS), supports path/host-based routing. **Network Load Balancer (NLB)**: Layer 4 (TCP/UDP), ultra-low latency, high throughput. **Gateway Load Balancer (GWLB)**: for third-party virtual appliances (firewalls, etc.).

**Q55. When would you choose ALB over NLB?**
ALB: web applications needing content-based routing (URL paths, hostnames), SSL termination. NLB: extreme performance/low-latency needs, static IP requirement, TCP/UDP-based protocols.

**Q56. What is a Target Group?**
A set of resources (EC2 instances, IPs, Lambda functions) that a load balancer routes traffic to, along with health check settings.

**Q57. What is a Health Check in a Load Balancer?**
Periodic requests sent to registered targets to verify they're healthy — unhealthy targets are automatically removed from traffic rotation.

### ELB Commands
```bash
aws elbv2 describe-load-balancers                        # list load balancers
aws elbv2 create-load-balancer --name my-alb --subnets subnet-xxxx subnet-yyyy --security-groups sg-xxxx  # create ALB
aws elbv2 create-target-group --name my-targets --protocol HTTP --port 80 --vpc-id vpc-xxxx  # create target group
aws elbv2 register-targets --target-group-arn arn:...:targetgroup/my-targets/xxxx --targets Id=i-xxxx  # register EC2 instance
aws elbv2 create-listener --load-balancer-arn arn:...:loadbalancer/app/my-alb/xxxx --protocol HTTP --port 80 --default-actions Type=forward,TargetGroupArn=arn:...:targetgroup/my-targets/xxxx  # create listener
aws elbv2 describe-target-health --target-group-arn arn:...:targetgroup/my-targets/xxxx  # check target health
```

---

## Module 9: Auto Scaling Groups (ASG)

**Q58. What is an Auto Scaling Group?**
A collection of EC2 instances managed together that automatically adjusts its size (adds/removes instances) based on demand or defined schedules.

**Q59. What is a Launch Template (or Launch Configuration)?**
A blueprint (AMI, instance type, security groups, key pair, etc.) that the ASG uses to launch new instances — Launch Templates are the modern, recommended approach (Launch Configurations are legacy).

**Q60. What scaling policies does ASG support?**
**Target Tracking** (maintain a metric like 50% CPU), **Step Scaling** (scale based on alarm thresholds in steps), **Scheduled Scaling** (scale at specific times), **Simple Scaling** (basic, single-step).

**Q61. What are Min, Max, and Desired capacity in an ASG?**
**Min**: lowest number of instances allowed. **Max**: highest number allowed. **Desired**: the target number ASG tries to maintain at any given time (adjusted automatically by scaling policies).

**Q62. How does ASG work with a Load Balancer?**
ASG automatically registers new instances with the Load Balancer's target group as they launch, and deregisters/terminates unhealthy ones — enabling elastic, self-healing infrastructure.

### Auto Scaling Commands
```bash
aws autoscaling describe-auto-scaling-groups              # list ASGs
aws autoscaling create-launch-template --launch-template-name myTemplate --version-description v1 --launch-template-data file://template.json  # create launch template
aws autoscaling create-auto-scaling-group --auto-scaling-group-name myASG --launch-template LaunchTemplateName=myTemplate --min-size 2 --max-size 5 --desired-capacity 2 --vpc-zone-identifier "subnet-xxxx,subnet-yyyy"  # create ASG
aws autoscaling update-auto-scaling-group --auto-scaling-group-name myASG --desired-capacity 4  # manually adjust desired capacity
aws autoscaling put-scaling-policy --auto-scaling-group-name myASG --policy-name cpu-target --policy-type TargetTrackingScaling --target-tracking-configuration file://policy.json  # add scaling policy
aws autoscaling delete-auto-scaling-group --auto-scaling-group-name myASG --force-delete  # delete ASG
```

---

## Module 10: CloudWatch

**Q63. What is CloudWatch?**
AWS's monitoring and observability service — collects metrics, logs, and events from AWS resources and applications, and can trigger alarms/actions.

**Q64. What is a CloudWatch Metric?**
A time-ordered set of data points (e.g., CPUUtilization, NetworkIn) published by AWS services or custom applications.

**Q65. What is a CloudWatch Alarm?**
A watcher on a metric that triggers an action (e.g., SNS notification, Auto Scaling action) when the metric crosses a defined threshold.

**Q66. What is CloudWatch Logs?**
A service to collect, store, and search log data from applications, Lambda functions, EC2 instances, etc.

**Q67. What is a CloudWatch Dashboard?**
A customizable visual display of metrics/alarms for at-a-glance monitoring of your resources.

**Q68. CloudWatch vs CloudTrail — what's the difference?**
**CloudWatch**: monitors performance/operational metrics and logs (what's happening with resources). **CloudTrail**: logs API calls/user activity for auditing (who did what, and when).

### CloudWatch Commands
```bash
aws cloudwatch list-metrics                               # list available metrics
aws cloudwatch get-metric-statistics --namespace AWS/EC2 --metric-name CPUUtilization --dimensions Name=InstanceId,Value=i-xxxx --start-time 2026-08-24T00:00:00Z --end-time 2026-08-25T00:00:00Z --period 3600 --statistics Average  # get metric data
aws cloudwatch put-metric-alarm --alarm-name high-cpu --metric-name CPUUtilization --namespace AWS/EC2 --statistic Average --period 300 --threshold 80 --comparison-operator GreaterThanThreshold --dimensions Name=InstanceId,Value=i-xxxx --evaluation-periods 2 --alarm-actions arn:aws:sns:...:my-topic  # create alarm
aws cloudwatch describe-alarms                             # list alarms
aws logs describe-log-groups                                # list log groups
aws logs tail /aws/lambda/myFunc --follow                   # stream logs live (CLI v2)
```

---

## Quick Revision Checklist

- [ ] Explain EC2 instance lifecycle (stop vs terminate)
- [ ] S3 storage classes and when to use each
- [ ] IAM User vs Group vs Role vs Policy
- [ ] VPC: public vs private subnet, IGW vs NAT Gateway
- [ ] RDS Multi-AZ vs Read Replica
- [ ] Lambda triggers and cold starts
- [ ] EBS volume types and snapshot mechanics
- [ ] ALB vs NLB — when to use which
- [ ] ASG: Min/Max/Desired, scaling policy types
- [ ] CloudWatch vs CloudTrail

---

*Next: Tier 2 services (DynamoDB, Route 53, CloudFront, API Gateway, ECS/EKS, CloudFormation, SNS/SQS, CloudTrail) in the same format.*