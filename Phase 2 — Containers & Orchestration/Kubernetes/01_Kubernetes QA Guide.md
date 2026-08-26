# Kubernetes – Question & Answer Study Guide (Placement Prep)

Module-wise, sequential Q&A. Short, crisp answers — full essence, no fluff.

---

## Module 1: Kubernetes Fundamentals

**Q1. What is Kubernetes?**
An open-source container **orchestration** platform that automates deployment, scaling, networking, and management of containerized applications.

**Q2. Why do we need Kubernetes when we have Docker?**
Docker runs containers on a single host. Kubernetes manages containers **across many hosts** — handling scaling, self-healing, load balancing, and rolling updates automatically.

**Q3. What problem does Kubernetes solve?**
Manual container management doesn't scale — Kubernetes automates scheduling, scaling, failure recovery, service discovery, and config management for large distributed apps.

**Q4. Who originally created Kubernetes?**
Google (based on their internal system "Borg"), now maintained by the Cloud Native Computing Foundation (CNCF).

**Q5. What are the key features of Kubernetes?**
Auto-scaling, self-healing, load balancing, service discovery, rolling updates/rollbacks, secret/config management, storage orchestration.

**Q6. What is a cluster in Kubernetes?**
A set of machines (nodes) — one or more **control plane** nodes and multiple **worker** nodes — that together run containerized applications.

---

## Module 2: Kubernetes Architecture

**Q7. What are the two main components of a Kubernetes cluster?**
**Control Plane** (manages the cluster) and **Worker Nodes** (run the actual application workloads).

**Q8. What does the Control Plane consist of?**
`kube-apiserver`, `etcd`, `kube-scheduler`, `kube-controller-manager` (and `cloud-controller-manager` if on cloud).

**Q9. What is the kube-apiserver?**
The front door of the cluster — exposes the Kubernetes REST API; all components (and `kubectl`) talk to the cluster through it.

**Q10. What is etcd?**
A distributed key-value store that holds all cluster state and configuration data — the "source of truth" for the cluster.

**Q11. What is the kube-scheduler?**
Watches for newly created Pods with no assigned node and picks the best node to run them on, based on resource needs, constraints, affinity rules.

**Q12. What is the kube-controller-manager?**
Runs controller processes (Node controller, Replication controller, Endpoints controller, etc.) that continuously watch cluster state and reconcile it to match the desired state.

**Q13. What components run on a Worker Node?**
`kubelet`, `kube-proxy`, and a **container runtime** (e.g., containerd).

**Q14. What is the kubelet?**
An agent on each node that ensures containers described in Pod specs are actually running and healthy.

**Q15. What is kube-proxy?**
Maintains network rules on each node, enabling communication to Pods from inside/outside the cluster (implements Service networking).

**Q16. What is a container runtime in Kubernetes?**
The software that actually runs containers (e.g., containerd, CRI-O). Kubernetes talks to it via the **CRI (Container Runtime Interface)**.

---

## Module 3: Pods

**Q17. What is a Pod?**
The smallest deployable unit in Kubernetes — a wrapper around one or more tightly-coupled containers that share network (IP) and storage.

**Q18. Why not deploy containers directly instead of Pods?**
Kubernetes always schedules at Pod granularity — even a single container runs inside a Pod, which provides shared networking/storage context and a consistent management unit.

**Q19. Can a Pod have multiple containers? Give an example use case.**
Yes — a common pattern is a main app container + a **sidecar** container (e.g., a logging agent) that shares the Pod's network/storage.

**Q20. Are Pods permanent?**
No — Pods are ephemeral. If a Pod dies, it is **not** rescheduled by itself; a higher-level controller (like a Deployment) recreates it with a new identity/IP.

**Q21. How do containers within the same Pod communicate?**
Via `localhost` — they share the same network namespace.

**Q22. What is a Pod's IP address lifecycle?**
Each Pod gets its own unique IP, but that IP is not stable — it changes if the Pod is recreated.

**Q23. Basic kubectl command to create a Pod from a YAML file?**
`kubectl apply -f pod.yaml`

---

## Module 4: Workload Controllers (Deployment, ReplicaSet, StatefulSet, DaemonSet, Job)

**Q24. What is a ReplicaSet?**
Ensures a specified number of identical Pod replicas are running at all times; replaces dead Pods automatically.

**Q25. What is a Deployment, and how does it relate to a ReplicaSet?**
A higher-level object that manages ReplicaSets for you — provides declarative updates, rolling updates, and rollback support. You almost always use Deployments rather than ReplicaSets directly.

**Q26. What is a rolling update in a Deployment?**
Gradually replacing old Pods with new ones (a few at a time) for zero-downtime deployment.

**Q27. How do you roll back a Deployment?**
`kubectl rollout undo deployment/<name>`

**Q28. What is a StatefulSet, and when do you use it?**
Manages Pods that need **stable network identity and persistent storage** (e.g., databases) — each Pod gets a fixed, ordered name (`pod-0`, `pod-1`...) and its own persistent volume.

**Q29. Deployment vs StatefulSet?**
Deployment: stateless apps, Pods are interchangeable. StatefulSet: stateful apps, Pods have stable identity/storage and are created/deleted in order.

**Q30. What is a DaemonSet?**
Ensures a copy of a Pod runs on **every** (or selected) node — used for node-level agents like log collectors or monitoring agents.

**Q31. What is a Job in Kubernetes?**
Runs Pods to completion for a **one-time/batch task**; ensures the task finishes successfully (retries on failure).

**Q32. What is a CronJob?**
A Job that runs on a **recurring schedule**, defined using cron syntax.

---

## Module 5: Services & Networking

**Q33. Why do we need a Service if Pods already have IPs?**
Pod IPs are ephemeral and change on recreation. A **Service** provides a stable IP/DNS name and load-balances traffic across a dynamic set of Pods.

**Q34. What is a Service in Kubernetes?**
An abstraction that defines a logical set of Pods (via label selectors) and a stable way to access them.

**Q35. What are the types of Services?**
- **ClusterIP** (default): accessible only within the cluster.
- **NodePort**: exposes the service on a static port on each node's IP.
- **LoadBalancer**: provisions an external load balancer (cloud provider).
- **ExternalName**: maps the service to an external DNS name.

**Q36. How does a Service find which Pods to route to?**
Via **label selectors** — Pods matching the Service's selector labels become its endpoints.

**Q37. What is kube-proxy's role in Services?**
Implements the virtual IP and load-balancing rules (via iptables/IPVS) that route traffic to the correct backend Pods.

**Q38. What is an Ingress?**
An API object that manages external HTTP/HTTPS access to Services — provides URL routing, virtual hosting, SSL termination, typically via an **Ingress Controller** (e.g., nginx-ingress).

**Q39. Ingress vs Service (LoadBalancer)?**
LoadBalancer Service = one external IP per service (expensive at scale). Ingress = single entry point that can route to many services based on path/host rules.

**Q40. What is a headless Service?**
A Service with `clusterIP: None` — doesn't load-balance; instead returns the individual Pod IPs directly via DNS (used with StatefulSets).

**Q41. How does DNS work inside a Kubernetes cluster?**
CoreDNS runs as a cluster add-on and provides DNS names for Services/Pods, e.g. `my-service.my-namespace.svc.cluster.local`.

---

## Module 6: Configuration – ConfigMaps & Secrets

**Q42. What is a ConfigMap?**
Stores non-confidential configuration data (key-value pairs) separately from application code, injectable into Pods as env vars or mounted files.

**Q43. What is a Secret?**
Similar to ConfigMap but for **sensitive data** (passwords, tokens, keys) — base64-encoded (not encrypted by default; needs additional encryption-at-rest config).

**Q44. ConfigMap vs Secret?**
Same purpose (external config), but Secrets are meant for sensitive data and are handled with tighter access controls.

**Q45. How can a Pod consume a ConfigMap/Secret?**
As environment variables, or mounted as files/volumes inside the container.

---

## Module 7: Storage

**Q46. What is a Volume in Kubernetes?**
Storage attached to a Pod that can persist data across container restarts within the Pod's lifetime (unlike the container's own filesystem).

**Q47. What is a PersistentVolume (PV)?**
A piece of storage in the cluster provisioned by an admin (or dynamically) — exists independently of any Pod's lifecycle.

**Q48. What is a PersistentVolumeClaim (PVC)?**
A user's **request** for storage — Kubernetes binds it to a matching PV. Pods reference the PVC, not the PV directly.

**Q49. What is a StorageClass?**
Defines a "class" of storage (e.g., SSD vs HDD) and enables **dynamic provisioning** of PVs on demand, instead of manually pre-creating them.

**Q50. What happens to a PV when its PVC is deleted?**
Depends on the **reclaim policy**: `Retain` (keeps data), `Delete` (deletes underlying storage), or `Recycle` (deprecated, basic scrub).

---

## Module 8: Scheduling & Scaling

**Q51. How does the scheduler decide which node to place a Pod on?**
Filters nodes by resource availability/constraints, then scores/ranks them (considering affinity/anti-affinity, taints/tolerations, resource requests).

**Q52. What are resource requests and limits?**
`requests` = minimum resources guaranteed to a container (used for scheduling). `limits` = maximum resources a container can use (enforced at runtime).

**Q53. What are taints and tolerations?**
A **taint** on a node repels Pods unless the Pod has a matching **toleration** — used to reserve nodes for specific workloads.

**Q54. What is node affinity / anti-affinity?**
Rules that attract or repel Pod scheduling to/from nodes based on node labels — e.g., "prefer nodes with SSD" or "don't co-locate these Pods."

**Q55. What is the Horizontal Pod Autoscaler (HPA)?**
Automatically scales the **number of Pod replicas** up/down based on observed metrics (e.g., CPU/memory usage).

**Q56. What is the Vertical Pod Autoscaler (VPA)?**
Automatically adjusts the **CPU/memory requests/limits** of containers based on usage patterns (fewer, but bigger Pods rather than more Pods).

**Q57. What is Cluster Autoscaler?**
Automatically adds/removes **nodes** in the cluster based on whether Pods are unschedulable due to lack of resources.

**Q58. What is a liveness probe?**
Checks if a container is still running correctly; if it fails, Kubernetes **restarts** the container.

**Q59. What is a readiness probe?**
Checks if a container is ready to accept traffic; if it fails, the Pod is **removed from Service endpoints** (but not restarted).

**Q60. What is a startup probe?**
Checks if a slow-starting container has finished starting up; disables liveness/readiness checks until it succeeds, preventing premature restarts.

---

## Module 9: Namespaces & Organization

**Q61. What is a Namespace?**
A way to divide cluster resources into virtual sub-clusters — used for multi-team/multi-project isolation and resource quota management.

**Q62. What are the default namespaces in Kubernetes?**
`default`, `kube-system` (system components), `kube-public`, `kube-node-lease`.

**Q63. What is a Label vs a Selector?**
**Label**: a key-value pair attached to an object (e.g., `app: frontend`) for identification. **Selector**: a query that matches objects by their labels (used by Services, Deployments, etc.).

**Q64. What are Annotations, and how do they differ from Labels?**
Annotations store non-identifying metadata (e.g., build info, descriptions) — not used for selection like Labels are.

**Q65. What is a ResourceQuota?**
Limits total resource consumption (CPU, memory, object counts) per namespace.

---

## Module 10: kubectl & YAML Basics

**Q66. What is kubectl?**
The command-line tool used to interact with a Kubernetes cluster via the API server.

**Q67. What are the core sections of a Kubernetes YAML manifest?**
`apiVersion`, `kind`, `metadata` (name, labels, namespace), `spec` (desired state).

**Q68. Imperative vs Declarative approach in Kubernetes?**
Imperative: run direct commands (`kubectl run`, `kubectl create`). Declarative: define desired state in YAML and apply it (`kubectl apply -f`) — preferred for production/version control.

**Q69. What does `kubectl apply` do differently from `kubectl create`?**
`create` fails if the resource already exists. `apply` creates or updates the resource to match the YAML (idempotent).

---

## Module 11: Helm & Ecosystem Basics

**Q70. What is Helm?**
A package manager for Kubernetes — bundles related manifests into a reusable, configurable **Chart**, simplifying deployment of complex apps.

**Q71. What is a Helm Chart?**
A collection of YAML templates + a `values.yaml` file defining configurable parameters for an application.

**Q72. What is a Kubernetes Operator?**
A custom controller that extends Kubernetes to manage complex, stateful applications using domain-specific knowledge (e.g., automating DB backups/failover).

**Q73. What is a Custom Resource Definition (CRD)?**
Lets you define your own resource types in Kubernetes, extending the API beyond built-in objects (used heavily by Operators).

---

## Module 12: Best Practices, Security & Common Interview Questions

**Q74. Why should you avoid running Pods as root?**
Reduces attack surface — configure `securityContext` to run as non-root, drop capabilities, and use read-only filesystems where possible.

**Q75. What is RBAC in Kubernetes?**
**Role-Based Access Control** — restricts what users/service accounts can do via `Role`/`ClusterRole` + `RoleBinding`/`ClusterRoleBinding`.

**Q76. What is a Service Account?**
An identity Pods use to authenticate to the Kubernetes API — distinct from a human user account.

**Q77. What is a NetworkPolicy?**
Rules that control traffic flow between Pods/namespaces — a firewall for Pod-to-Pod communication (default: all traffic allowed unless restricted).

**Q78. How does Kubernetes achieve self-healing?**
Controllers continuously reconcile actual state to desired state — dead Pods are recreated, unhealthy containers are restarted (via probes), unresponsive nodes have their Pods rescheduled elsewhere.

**Q79. What happens when a worker node goes down?**
The control plane detects it (via missed heartbeats), marks it NotReady, and — after a timeout — reschedules its Pods onto healthy nodes.

**Q80. Explain the full flow: what happens when you run `kubectl apply -f deployment.yaml`?**
1) `kubectl` sends the manifest to the **API server** → 2) API server validates & stores desired state in **etcd** → 3) **Deployment controller** creates a ReplicaSet → 4) ReplicaSet controller creates Pods → 5) **Scheduler** assigns Pods to nodes → 6) **kubelet** on each node pulls the image and starts containers via the container runtime → 7) **kube-proxy** updates networking rules so Services can reach the new Pods.

**Q81. What is the difference between a Container, Pod, and Node?**
Container = single running app instance. Pod = one or more containers sharing network/storage (smallest deployable unit). Node = a physical/virtual machine that runs Pods.

**Q82. Kubernetes vs Docker Swarm?**
Kubernetes: more powerful, larger ecosystem, steeper learning curve, industry standard for production. Swarm: simpler, Docker-native, faster to set up, less feature-rich.

**Q83. What is "desired state" vs "current state" in Kubernetes?**
Desired state = what you declared in YAML (e.g., 3 replicas). Current state = what's actually running. Controllers continuously reconcile the two.

---

## Quick Revision Checklist

- [ ] Explain Control Plane vs Worker Node components
- [ ] Explain Pod vs Container vs Node
- [ ] Deployment vs ReplicaSet vs StatefulSet vs DaemonSet
- [ ] Service types: ClusterIP, NodePort, LoadBalancer, ExternalName
- [ ] Liveness vs Readiness vs Startup probe
- [ ] PV vs PVC vs StorageClass
- [ ] HPA vs VPA vs Cluster Autoscaler
- [ ] Write a basic Pod/Deployment YAML from memory
- [ ] Explain full flow of `kubectl apply -f deployment.yaml`
- [ ] RBAC basics: Role vs ClusterRole

---

*Tip: Practice writing YAML manifests by hand and running `kubectl` commands on Minikube/Kind — hands-on recall is what interviewers test most in practical rounds.*