# AWS Tier 2 – Strongly Recommended Services Q&A + Commands (Placement Prep)

Module-wise, sequential. Each module covers one service: Q&A first, then relevant AWS CLI commands.

---

## Module 1: DynamoDB

**Q1. What is DynamoDB?**
A fully managed, serverless NoSQL key-value/document database offering single-digit millisecond latency at any scale.

**Q2. What is a Partition Key vs a Sort Key?**
**Partition Key**: determines which physical partition an item is stored in (must be unique if used alone). **Sort Key**: optional second key that orders items sharing the same partition key, enabling range queries — together they form a "composite primary key."

**Q3. How does DynamoDB differ from RDS?**
DynamoDB: schemaless NoSQL, horizontally scales automatically, best for key-value/document access patterns. RDS: structured relational data, fixed schema, supports SQL joins/transactions across tables.

**Q4. What are Read/Write Capacity Modes in DynamoDB?**
**On-Demand**: pay per request, auto-scales instantly, good for unpredictable traffic. **Provisioned**: you specify RCUs/WCUs (capacity units) ahead of time, cheaper for predictable, steady traffic.

**Q5. What is a Global Secondary Index (GSI)?**
An additional index with a different partition/sort key than the base table — allows querying the table via alternate access patterns.

**Q6. What is DynamoDB Streams?**
A time-ordered log of item-level changes (insert/update/delete) in a table — commonly used to trigger Lambda functions reactively.

**Q7. What consistency models does DynamoDB support?**
**Eventually Consistent** reads (default, faster, may show stale data briefly) and **Strongly Consistent** reads (always latest data, slightly higher latency/cost).

### DynamoDB Commands
```bash
aws dynamodb list-tables                                    # list tables
aws dynamodb create-table --table-name Users --attribute-definitions AttributeName=UserId,AttributeType=S --key-schema AttributeName=UserId,KeyType=HASH --billing-mode PAY_PER_REQUEST  # create table
aws dynamodb put-item --table-name Users --item '{"UserId":{"S":"u1"},"Name":{"S":"Alice"}}'  # insert item
aws dynamodb get-item --table-name Users --key '{"UserId":{"S":"u1"}}'  # read item
aws dynamodb query --table-name Users --key-condition-expression "UserId = :id" --expression-attribute-values '{":id":{"S":"u1"}}'  # query items
aws dynamodb scan --table-name Users                         # scan entire table
aws dynamodb delete-item --table-name Users --key '{"UserId":{"S":"u1"}}'  # delete item
aws dynamodb delete-table --table-name Users                 # delete table
```

---

## Module 2: Route 53

**Q8. What is Route 53?**
AWS's scalable DNS (Domain Name System) web service — translates domain names to IP addresses and also handles domain registration and health checking.

**Q9. What are common Route 53 routing policies?**
**Simple** (single resource), **Weighted** (split traffic by percentage), **Latency-based** (route to lowest-latency Region), **Failover** (active-passive DR), **Geolocation** (route based on user's location), **Multi-value** (return multiple healthy IPs).

**Q10. What is a Hosted Zone?**
A container for DNS records for a specific domain (e.g., `example.com`) — can be **public** (internet-facing) or **private** (within a VPC).

**Q11. What are common DNS record types used in Route 53?**
**A** (maps to IPv4), **AAAA** (IPv6), **CNAME** (alias to another domain name), **MX** (mail server), **Alias** (AWS-specific, points to AWS resources like ELB/CloudFront for free, unlike CNAME).

**Q12. What is a Route 53 Health Check?**
Monitors the health/availability of an endpoint and can trigger DNS failover to a backup resource if the primary becomes unhealthy.

### Route 53 Commands
```bash
aws route53 list-hosted-zones                                # list hosted zones
aws route53 create-hosted-zone --name example.com --caller-reference $(date +%s)  # create hosted zone
aws route53 list-resource-record-sets --hosted-zone-id ZXXXXXXXX  # list DNS records
aws route53 change-resource-record-sets --hosted-zone-id ZXXXXXXXX --change-batch file://record-changes.json  # add/update a DNS record
aws route53 create-health-check --caller-reference $(date +%s) --health-check-config file://healthcheck.json  # create health check
aws route53 get-hosted-zone --id ZXXXXXXXX                    # get hosted zone details
```

---

## Module 3: CloudFront

**Q13. What is CloudFront?**
AWS's Content Delivery Network (CDN) — caches content at globally distributed Edge Locations to reduce latency and offload traffic from origin servers.

**Q14. What is an Origin in CloudFront?**
The source AWS resource (S3 bucket, EC2, ALB, or any HTTP server) that CloudFront pulls content from to cache and serve.

**Q15. What is a Distribution?**
The CloudFront configuration unit that defines origin(s), caching behavior, and delivery settings — you get a unique domain name (`*.cloudfront.net`) to access it.

**Q16. How does CloudFront improve performance?**
Caches content closer to end users at Edge Locations, reducing round-trip time to the origin server and cutting origin load.

**Q17. What is a Cache Behavior?**
Rules within a distribution defining how CloudFront handles requests for specific URL path patterns (e.g., cache duration, allowed methods, which origin to use).

**Q18. How does CloudFront integrate with S3 for static websites?**
CloudFront sits in front of an S3 bucket (as origin), providing HTTPS, caching, and custom domain support — commonly using an **Origin Access Control (OAC)** so the S3 bucket itself stays private.

### CloudFront Commands
```bash
aws cloudfront list-distributions                            # list distributions
aws cloudfront create-distribution --origin-domain-name my-bucket.s3.amazonaws.com  # create distribution
aws cloudfront get-distribution --id EXXXXXXXX               # get distribution details
aws cloudfront update-distribution --id EXXXXXXXX --distribution-config file://config.json  # update distribution
aws cloudfront create-invalidation --distribution-id EXXXXXXXX --paths "/*"  # clear cache (invalidate)
aws cloudfront delete-distribution --id EXXXXXXXX --if-match ETAG  # delete distribution
```

---

## Module 4: API Gateway

**Q19. What is API Gateway?**
A fully managed service to create, publish, secure, and monitor REST, HTTP, and WebSocket APIs — commonly used as the front door for Lambda-based backends.

**Q20. What are the API types API Gateway supports?**
**REST API** (full-featured, older), **HTTP API** (lighter, cheaper, faster — recommended for most new use cases), **WebSocket API** (for real-time, bidirectional communication).

**Q21. How does API Gateway integrate with Lambda?**
API Gateway routes HTTP requests to a Lambda function ("Lambda Proxy Integration"), passing the request as an event and returning the function's response as the HTTP response — the foundation of many serverless APIs.

**Q22. What is a Stage in API Gateway?**
A named deployment snapshot of an API (e.g., `dev`, `prod`) — each stage can have its own configuration, variables, and URL.

**Q23. How does API Gateway handle authorization?**
Via **IAM permissions**, **Lambda Authorizers** (custom logic), **Cognito User Pools** (managed user auth), or API keys with usage plans (for throttling/quota).

**Q24. What is throttling in API Gateway?**
Rate-limiting requests to protect backend services from being overwhelmed — configurable per API key/usage plan.

### API Gateway Commands
```bash
aws apigateway get-rest-apis                                  # list REST APIs
aws apigateway create-rest-api --name myAPI                   # create REST API
aws apigatewayv2 create-api --name myHttpAPI --protocol-type HTTP --target arn:aws:lambda:...:function:myFunc  # quick HTTP API + Lambda integration
aws apigateway get-resources --rest-api-id abcd1234            # list resources/routes
aws apigateway create-deployment --rest-api-id abcd1234 --stage-name prod  # deploy API to a stage
aws apigateway get-stages --rest-api-id abcd1234                # list stages
aws apigateway delete-rest-api --rest-api-id abcd1234            # delete API
```

---

## Module 5: ECS & EKS (Container Orchestration)

**Q25. What is ECS (Elastic Container Service)?**
AWS's native container orchestration service for running Docker containers at scale, without managing Kubernetes yourself.

**Q26. What is EKS (Elastic Kubernetes Service)?**
AWS's managed Kubernetes service — runs a fully conformant Kubernetes control plane, so you can use standard `kubectl` and K8s tooling on AWS.

**Q27. ECS vs EKS — when would you choose which?**
ECS: simpler, AWS-native, easier learning curve, good if you don't need K8s-specific features. EKS: choose if you need Kubernetes portability/ecosystem (Helm, CRDs, multi-cloud potential) or your team already knows K8s.

**Q28. What is Fargate?**
A **serverless compute engine** for containers — works with both ECS and EKS — you don't manage or provision the underlying EC2 instances at all; you just define CPU/memory needs.

**Q29. Fargate vs EC2 launch type in ECS?**
**EC2 launch type**: you manage the underlying EC2 instances (cluster of servers) that run your containers — more control, can be cheaper at scale. **Fargate**: fully serverless, AWS manages the infrastructure — simpler, less ops overhead.

**Q30. What is an ECS Task Definition?**
A blueprint (like a Pod spec in Kubernetes) describing one or more containers to run together — image, CPU/memory, ports, environment variables.

**Q31. What is an ECS Service?**
Ensures a specified number of Task instances are running and (optionally) integrates with a Load Balancer — similar in concept to a Kubernetes Deployment.

### ECS Commands
```bash
aws ecs list-clusters                                          # list ECS clusters
aws ecs create-cluster --cluster-name myCluster                # create a cluster
aws ecs register-task-definition --cli-input-json file://taskdef.json  # register task definition
aws ecs run-task --cluster myCluster --task-definition myTask --launch-type FARGATE --network-configuration file://network.json  # run a task
aws ecs create-service --cluster myCluster --service-name myService --task-definition myTask --desired-count 2 --launch-type FARGATE --network-configuration file://network.json  # create a service
aws ecs update-service --cluster myCluster --service myService --desired-count 4  # scale a service
aws ecs list-tasks --cluster myCluster                          # list running tasks
aws ecs describe-services --cluster myCluster --services myService  # detailed service info
```

### EKS Commands
```bash
aws eks list-clusters                                           # list EKS clusters
aws eks create-cluster --name myEksCluster --role-arn arn:aws:iam::xxxx:role/eks-role --resources-vpc-config subnetIds=subnet-xxxx,subnet-yyyy  # create EKS cluster
aws eks update-kubeconfig --name myEksCluster                    # configure kubectl to use this cluster
aws eks describe-cluster --name myEksCluster                     # cluster details
aws eks create-nodegroup --cluster-name myEksCluster --nodegroup-name myNodes --node-role arn:aws:iam::xxxx:role/node-role --subnets subnet-xxxx subnet-yyyy  # create worker node group
aws eks delete-cluster --name myEksCluster                        # delete cluster
# After update-kubeconfig, standard kubectl commands work directly against the EKS cluster.
```

---

## Module 6: CloudFormation (Infrastructure as Code)

**Q32. What is CloudFormation?**
AWS's native Infrastructure as Code service — define your infrastructure (resources, config) in a YAML/JSON **template**, and CloudFormation provisions/manages it as a **stack**.

**Q33. What is a Stack?**
A collection of AWS resources created and managed together as a single unit, based on a CloudFormation template.

**Q34. What are the benefits of using CloudFormation (or IaC in general)?**
Repeatable, version-controlled infrastructure; consistent environments (dev/staging/prod); easy rollback; reduces manual configuration errors.

**Q35. What happens if a CloudFormation deployment fails partway through?**
By default, CloudFormation automatically **rolls back** the entire stack to its previous stable state.

**Q36. What is a CloudFormation Change Set?**
A preview of what changes will be made to a stack before actually applying them — lets you review impact before committing.

**Q37. CloudFormation vs Terraform — how do they compare?**
CloudFormation: AWS-native, tightly integrated, YAML/JSON only, AWS-only. Terraform: third-party (HashiCorp), cloud-agnostic (works across AWS/Azure/GCP), uses HCL syntax — widely preferred in multi-cloud environments.

### CloudFormation Commands
```bash
aws cloudformation list-stacks                                   # list stacks
aws cloudformation create-stack --stack-name myStack --template-body file://template.yaml  # create a stack
aws cloudformation describe-stacks --stack-name myStack           # get stack details
aws cloudformation update-stack --stack-name myStack --template-body file://template.yaml  # update a stack
aws cloudformation create-change-set --stack-name myStack --change-set-name myChanges --template-body file://template.yaml  # preview changes
aws cloudformation delete-stack --stack-name myStack               # delete a stack
aws cloudformation describe-stack-events --stack-name myStack       # view stack events (debugging)
```

---

## Module 7: SNS & SQS (Messaging)

**Q38. What is SNS (Simple Notification Service)?**
A **pub/sub** messaging service — publishers send messages to a "topic," and all subscribers (email, SMS, Lambda, SQS, HTTP endpoints) receive them instantly (fan-out pattern).

**Q39. What is SQS (Simple Queue Service)?**
A **message queuing** service — producers send messages to a queue, and consumers pull/process them at their own pace, decoupling components.

**Q40. SNS vs SQS — what's the core difference?**
SNS: push-based, one-to-many (fan-out) — message delivered to all subscribers immediately. SQS: pull-based, typically one consumer processes each message — used for decoupling and buffering workloads.

**Q41. What is the SNS + SQS "fan-out" pattern?**
An SNS topic publishes a message once, which fans out to multiple SQS queues (each feeding a different consumer/service) — combines pub/sub with reliable queuing.

**Q42. Standard Queue vs FIFO Queue in SQS?**
**Standard**: high throughput, best-effort ordering, at-least-once delivery (possible duplicates). **FIFO**: strict message ordering, exactly-once processing, lower throughput.

**Q43. What is a Dead Letter Queue (DLQ)?**
A separate queue where messages are sent after repeatedly failing processing (exceeding max retries) — used to isolate and debug problem messages without blocking the main queue.

**Q44. What is Visibility Timeout in SQS?**
The period during which a message, once received by a consumer, is hidden from other consumers — prevents duplicate processing while the first consumer is still working on it.

### SNS Commands
```bash
aws sns list-topics                                       # list topics
aws sns create-topic --name myTopic                        # create a topic
aws sns subscribe --topic-arn arn:aws:sns:...:myTopic --protocol email --notification-endpoint you@example.com  # subscribe an email
aws sns publish --topic-arn arn:aws:sns:...:myTopic --message "Hello subscribers"  # publish a message
aws sns delete-topic --topic-arn arn:aws:sns:...:myTopic    # delete a topic
```

### SQS Commands
```bash
aws sqs list-queues                                         # list queues
aws sqs create-queue --queue-name myQueue                    # create a queue
aws sqs send-message --queue-url https://sqs.../myQueue --message-body "Hello queue"  # send a message
aws sqs receive-message --queue-url https://sqs.../myQueue    # receive message(s)
aws sqs delete-message --queue-url https://sqs.../myQueue --receipt-handle <handle>  # delete processed message
aws sqs delete-queue --queue-url https://sqs.../myQueue        # delete a queue
```

---

## Module 8: CloudTrail

**Q45. What is CloudTrail?**
A service that logs and records all API calls / user activity made within your AWS account — for auditing, compliance, and security investigation.

**Q46. CloudTrail vs CloudWatch — again, what's the difference?**
**CloudTrail**: records **who did what** (API calls/user actions) — audit trail. **CloudWatch**: monitors **performance/operational metrics and logs** of resources — observability.

**Q47. What is a CloudTrail Trail?**
A configuration that enables continuous delivery of event logs to an S3 bucket (and optionally CloudWatch Logs) — without one, only the last 90 days of management events are viewable via Event History.

**Q48. What are Management Events vs Data Events in CloudTrail?**
**Management Events**: control-plane operations (e.g., creating an EC2 instance, IAM changes) — logged by default. **Data Events**: high-volume data-plane operations (e.g., S3 object-level GetObject/PutObject) — must be explicitly enabled, higher cost.

**Q49. Why is CloudTrail important for security?**
Enables forensic investigation after an incident (who accessed what, when, from where) and supports compliance requirements (SOC2, HIPAA, etc.).

### CloudTrail Commands
```bash
aws cloudtrail describe-trails                                 # list trails
aws cloudtrail create-trail --name myTrail --s3-bucket-name my-log-bucket  # create a trail
aws cloudtrail start-logging --name myTrail                     # start logging
aws cloudtrail stop-logging --name myTrail                      # stop logging
aws cloudtrail lookup-events --max-results 10                    # view recent API activity (event history)
aws cloudtrail get-trail-status --name myTrail                    # check trail status
```

---

## Quick Revision Checklist

- [ ] DynamoDB: partition key vs sort key, GSI, capacity modes
- [ ] Route 53: routing policies (weighted, latency, failover, geolocation)
- [ ] CloudFront: origin, distribution, cache behavior
- [ ] API Gateway: REST vs HTTP API, Lambda proxy integration, stages
- [ ] ECS vs EKS, and Fargate vs EC2 launch type
- [ ] CloudFormation: stack, change set, rollback behavior
- [ ] SNS (pub/sub, fan-out) vs SQS (queue, decoupling)
- [ ] SQS: Standard vs FIFO, DLQ, visibility timeout
- [ ] CloudTrail vs CloudWatch — audit vs monitoring

---

*Next: Tier 3 — AI/ML services (SageMaker, Bedrock, Comprehend, Rekognition, Textract, Lex) in the same format.*