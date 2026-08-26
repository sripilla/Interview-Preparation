# Kubernetes (kubectl) Commands Cheat Sheet

Module-wise, sequential — just the commands, for quick lookup/revision.

---

## Cluster Info & Context

```bash
kubectl cluster-info                   # cluster endpoint info
kubectl version                        # client & server version
kubectl get nodes                      # list nodes
kubectl describe node <node>           # detailed node info
kubectl config get-contexts            # list available contexts
kubectl config use-context <name>      # switch context/cluster
kubectl config current-context         # show active context
```

## Pods

```bash
kubectl get pods                       # list pods (current namespace)
kubectl get pods -A                    # list pods in all namespaces
kubectl get pods -o wide               # list pods with node/IP info
kubectl describe pod <pod>             # detailed pod info & events
kubectl run mypod --image=nginx        # create a pod imperatively
kubectl apply -f pod.yaml              # create/update pod from YAML
kubectl delete pod <pod>               # delete a pod
kubectl logs <pod>                     # view pod logs
kubectl logs -f <pod>                  # follow logs live
kubectl logs <pod> -c <container>      # logs of a specific container (multi-container pod)
kubectl exec -it <pod> -- /bin/bash    # shell into a pod
kubectl port-forward <pod> 8080:80     # forward local port to pod port
kubectl cp <pod>:/path ./local         # copy file: pod → local
kubectl cp ./local <pod>:/path         # copy file: local → pod
```

## Deployments

```bash
kubectl get deployments                # list deployments
kubectl describe deployment <name>     # detailed deployment info
kubectl create deployment web --image=nginx   # create deployment imperatively
kubectl apply -f deployment.yaml       # create/update from YAML
kubectl scale deployment web --replicas=5     # scale replicas
kubectl set image deployment/web nginx=nginx:1.27   # update container image
kubectl rollout status deployment/web  # check rollout progress
kubectl rollout history deployment/web # view rollout history
kubectl rollout undo deployment/web    # rollback to previous revision
kubectl rollout undo deployment/web --to-revision=2   # rollback to specific revision
kubectl rollout restart deployment/web # restart all pods in deployment
kubectl delete deployment <name>       # delete a deployment
```

## ReplicaSets, DaemonSets, StatefulSets, Jobs

```bash
kubectl get replicasets                # list ReplicaSets
kubectl get daemonsets                 # list DaemonSets
kubectl get statefulsets               # list StatefulSets
kubectl get jobs                       # list Jobs
kubectl get cronjobs                   # list CronJobs
kubectl delete job <name>              # delete a job
kubectl apply -f statefulset.yaml      # apply a StatefulSet manifest
```

## Services & Networking

```bash
kubectl get svc                        # list services
kubectl describe svc <name>            # detailed service info
kubectl expose deployment web --port=80 --type=ClusterIP    # create a service
kubectl expose deployment web --port=80 --type=NodePort      # expose via NodePort
kubectl expose deployment web --port=80 --type=LoadBalancer  # expose via LoadBalancer
kubectl delete svc <name>              # delete a service
kubectl get ingress                    # list ingress resources
kubectl describe ingress <name>        # detailed ingress info
kubectl get endpoints                  # list service endpoints
kubectl get networkpolicy              # list network policies
```

## ConfigMaps & Secrets

```bash
kubectl create configmap myconfig --from-literal=KEY=value   # create configmap
kubectl create configmap myconfig --from-file=config.txt     # from a file
kubectl get configmaps                 # list configmaps
kubectl describe configmap myconfig    # view configmap details
kubectl create secret generic mysecret --from-literal=PASS=1234   # create secret
kubectl get secrets                    # list secrets
kubectl describe secret mysecret       # view secret details (values hidden)
kubectl delete configmap myconfig      # delete configmap
kubectl delete secret mysecret         # delete secret
```

## Storage (PV / PVC)

```bash
kubectl get pv                         # list PersistentVolumes
kubectl get pvc                        # list PersistentVolumeClaims
kubectl describe pv <name>             # detailed PV info
kubectl describe pvc <name>            # detailed PVC info
kubectl apply -f pvc.yaml              # create PVC from YAML
kubectl delete pvc <name>              # delete a PVC
kubectl get storageclass               # list storage classes
```

## Namespaces

```bash
kubectl get namespaces                 # list namespaces
kubectl create namespace dev           # create a namespace
kubectl delete namespace dev           # delete a namespace
kubectl get pods -n dev                # list pods in a specific namespace
kubectl config set-context --current --namespace=dev   # set default namespace
```

## Labels & Selectors

```bash
kubectl get pods --show-labels         # show labels on pods
kubectl label pod mypod env=prod       # add a label
kubectl label pod mypod env-           # remove a label
kubectl get pods -l env=prod           # filter pods by label
kubectl get pods --field-selector status.phase=Running  # filter by field
```

## Scaling & Autoscaling

```bash
kubectl scale deployment web --replicas=10        # manual scale
kubectl autoscale deployment web --min=2 --max=10 --cpu-percent=80   # create HPA
kubectl get hpa                        # list HorizontalPodAutoscalers
kubectl describe hpa web               # detailed HPA info
kubectl top nodes                      # node resource usage (needs metrics-server)
kubectl top pods                       # pod resource usage
```

## Debugging & Troubleshooting

```bash
kubectl get events                     # cluster events (sorted by time)
kubectl get events --sort-by=.metadata.creationTimestamp
kubectl describe pod <pod>             # events + status for a pod
kubectl logs <pod> --previous          # logs from previous crashed instance
kubectl exec -it <pod> -- sh           # shell into pod (alpine-based images)
kubectl debug <pod> -it --image=busybox  # attach an ephemeral debug container
kubectl get pod <pod> -o yaml          # full pod spec/status as YAML
```

## Apply, Edit, Delete (Declarative Basics)

```bash
kubectl apply -f file.yaml             # create/update resource from file
kubectl apply -f ./manifests/          # apply all YAMLs in a folder
kubectl delete -f file.yaml            # delete resource defined in file
kubectl edit deployment web            # edit a live resource in default editor
kubectl diff -f file.yaml              # preview changes before applying
kubectl explain pod.spec               # show docs for a resource field
```

## RBAC

```bash
kubectl get roles                      # list roles (namespace-scoped)
kubectl get clusterroles               # list cluster-wide roles
kubectl get rolebindings               # list role bindings
kubectl get clusterrolebindings        # list cluster role bindings
kubectl auth can-i create pods         # check current user's permissions
kubectl auth can-i create pods --as=someuser   # check for another user
```

## Helm (Package Manager)

```bash
helm install myapp ./mychart           # install a chart
helm upgrade myapp ./mychart           # upgrade a release
helm rollback myapp 1                  # rollback to revision 1
helm uninstall myapp                   # uninstall a release
helm list                              # list installed releases
helm search repo nginx                 # search a chart repo
helm repo add stable https://...       # add a chart repository
```

## Context Cleanup

```bash
kubectl delete all --all               # delete all resources in current namespace
kubectl delete all --all -n dev        # delete all resources in a namespace
kubectl delete namespace dev           # delete namespace and everything in it
```

---

*Tip: Practice these directly against Minikube or Kind (local clusters) — typing them out builds the recall interviewers test in practical rounds.*