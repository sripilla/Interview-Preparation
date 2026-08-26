# Docker – Question & Answer Study Guide (Placement Prep)

Module-wise, sequential Q&A. Short, crisp answers — full essence, no fluff.

---

## Module 1: Docker Fundamentals

**Q1. What is Docker?**
A platform to package an app + its dependencies into a **container** that runs consistently anywhere.

**Q2. Why do we need Docker?**
Solves "works on my machine" — packages code, runtime, libs, config together so behavior is identical across dev/test/prod.

**Q3. What is a container?**
A lightweight, isolated, running instance of an image — includes everything needed to run the app.

**Q4. Container vs Virtual Machine?**
VM virtualizes hardware, has its own full OS, needs a hypervisor — heavy, slow to boot. Container virtualizes the OS, shares host kernel — lightweight, boots in seconds.

**Q5. What is containerization?**
Packaging an app + dependencies into an image so it runs reliably anywhere.

**Q6. Does Docker use a hypervisor?**
No. It uses OS-level virtualization (namespaces + cgroups) directly on the host kernel.

**Q7. Is Docker Linux-only?**
Core tech is Linux kernel-based; on Windows/Mac, Docker Desktop runs a small Linux VM under the hood.

**Q8. Key benefits of Docker?**
Portability, consistency, fast startup, efficient resource use, easy scaling, simplified CI/CD, isolation.

---

## Module 2: Docker Architecture

**Q9. Explain Docker's architecture.**
Client-server model: **Docker Client** (CLI) → **Docker Daemon** (dockerd, does the work) → **Registry** (stores images). Client talks to daemon via REST API/socket.

**Q10. What is the Docker daemon?**
Background process (`dockerd`) that manages images, containers, networks, volumes.

**Q11. What is Docker Engine?**
The core runtime = daemon + REST API + CLI client combined.

**Q12. What is a Docker Registry?**
Storage/distribution service for images. Docker Hub is the default public one.

**Q13. What are Linux namespaces?**
Kernel feature that isolates what a process can see (PID, NET, MNT, UTS, IPC, USER) — gives each container its own isolated view.

**Q14. What are cgroups?**
Kernel feature that limits/monitors resource usage (CPU, memory, I/O) per container.

**Q15. Image vs Container?**
Image = read-only template (class). Container = running instance of an image (object).

---

## Module 3: Docker Images

**Q16. What makes up a Docker image?**
Stack of read-only, cached **layers**, each = one filesystem change.

**Q17. Why does layering matter?**
Unchanged layers are reused/cached → faster builds, less storage, shared across images.

**Q18. List local images?**
`docker images`

**Q19. Pull an image?**
`docker pull <image>:<tag>`

**Q20. What if no tag is given?**
Defaults to `latest`.

**Q21. Remove an image?**
`docker rmi <image>`

**Q22. What is a base image?**
The starting image in `FROM`, e.g. `FROM node:18-alpine`.

**Q23. What is a multi-stage build?**
Multiple `FROM` stages in one Dockerfile — build tools used in an early stage, only final artifacts copied to a slim final stage. Shrinks image size.

**Q24. Check image layers/history?**
`docker history <image>`

**Q25. What is Docker Hub?**
Public cloud registry for official and user-published images.

---

## Module 4: Dockerfile

**Q26. What is a Dockerfile?**
A text file of instructions Docker reads to build an image automatically.

**Q27. Common Dockerfile instructions?**
`FROM` base image · `WORKDIR` set dir · `COPY`/`ADD` copy files · `RUN` build-time command · `CMD` default startup command · `ENTRYPOINT` fixed main command · `EXPOSE` document port · `ENV` env var · `ARG` build-time var · `VOLUME` mount point · `USER` set user.

**Q28. CMD vs ENTRYPOINT?**
`CMD` = default args, easily overridden at runtime. `ENTRYPOINT` = fixed executable; runtime args get appended to it. Often used together.

**Q29. COPY vs ADD?**
Both copy files into image. `ADD` also auto-extracts tar files and can fetch URLs. Prefer `COPY` unless you need those extras.

**Q30. RUN vs CMD/ENTRYPOINT — when do they run?**
`RUN` executes at **build time** (creates a layer). `CMD`/`ENTRYPOINT` execute at **container start**.

**Q31. Build an image?**
`docker build -t name:tag .`

**Q32. What is "build context"?**
The files at the given path sent to the daemon for build; `COPY`/`ADD` can only reference files inside it.

**Q33. What is `.dockerignore`?**
Like `.gitignore` — excludes files (e.g. `node_modules`) from the build context to shrink build size/time.

**Q34. Why minimize layers?**
Fewer, combined `RUN` commands (e.g. `apt-get update && install && cleanup` in one line) → smaller image, no stale cache left behind.

**Q35. Best practice on root user?**
Avoid running as root; use `USER` to switch to a non-root user for security.

---

## Module 5: Working with Containers

**Q36. Run a container?**
`docker run image` — flags: `-d` detached, `-it` interactive, `-p host:container` port map, `--name`, `-e` env var, `-v` volume.

**Q37. `docker run` vs `docker start`?**
`run` creates a **new** container. `start` restarts an existing stopped one.

**Q38. List containers?**
`docker ps` (running), `docker ps -a` (all, incl. stopped).

**Q39. Stop/remove a container?**
`docker stop` (graceful, SIGTERM) or `docker kill` (force, SIGKILL); `docker rm` to delete.

**Q40. View container logs?**
`docker logs <id>` (`-f` to follow live).

**Q41. Get a shell inside a running container?**
`docker exec -it <id> /bin/bash`

**Q42. `docker exec` vs `docker attach`?**
`exec` starts a **new** process inside the container. `attach` connects to the container's **existing main process** (PID 1).

**Q43. What happens to data when a container is removed?**
Lost, unless it was in a volume or bind mount.

**Q44. Stopping vs removing?**
Stop = pause, filesystem state kept, can restart. Remove = deleted entirely.

**Q45. Map a container port to host?**
`docker run -p host_port:container_port image`

**Q46. Pass env variables?**
`-e KEY=value` or `--env-file .env`

**Q47. Container lifecycle states?**
Created → Running → Paused → Stopped → Removed.

**Q48. View live resource usage?**
`docker stats`

**Q49. Limit CPU/memory?**
`docker run --memory="512m" --cpus="1.5" image`

---

## Module 6: Volumes & Data Persistence

**Q50. Why are volumes needed?**
Container's writable layer is destroyed on removal — volumes persist data beyond the container's life and allow sharing between containers.

**Q51. Types of Docker storage?**
**Volumes** (Docker-managed, recommended) · **Bind mounts** (map a host path directly) · **tmpfs** (in-memory only, never persisted).

**Q52. Create and use a named volume?**
`docker volume create v1` then `docker run -v v1:/path image`

**Q53. Volume vs bind mount?**
Volume = Docker-managed, portable. Bind mount = tied to a specific host path, common for local dev (live code reload).

**Q54. List/remove volumes?**
`docker volume ls`, `docker volume rm <name>`, `docker volume prune`

**Q55. Can multiple containers share a volume?**
Yes — same named volume can be mounted into several containers at once.

---

## Module 7: Docker Networking

**Q56. Docker network drivers?**
**bridge** (default, isolated) · **host** (shares host network) · **none** (no network) · **overlay** (multi-host, Swarm) · **macvlan** (container gets its own MAC, appears as physical device).

**Q57. Default network?**
`bridge`, unless specified otherwise.

**Q58. How do containers on the same custom network talk?**
By **container name** — Docker's embedded DNS resolves it. (Doesn't work on default bridge network.)

**Q59. Create a custom network?**
`docker network create net1` then `docker run --network=net1 image`

**Q60. EXPOSE vs `-p`?**
`EXPOSE` = documentation only. `-p host:container` at runtime actually publishes the port to the host.

**Q61. Inspect a network?**
`docker network inspect <name>`

---

## Module 8: Docker Compose

**Q62. What is Docker Compose?**
Tool to define/run multi-container apps via one YAML file (`docker-compose.yml`) — one command starts everything.

**Q63. Basic structure of docker-compose.yml?**
`version`, `services` (each has image/build, ports, volumes, environment, depends_on), `networks`, `volumes`.

**Q64. Start/stop with Compose?**
`docker compose up -d` to start, `docker compose down` to stop & remove (add `-v` to also drop volumes).

**Q65. What does `depends_on` do?**
Controls **startup order** only — doesn't wait for the dependency to be actually "ready" (use health checks for that).

**Q66. Scale a service?**
`docker compose up --scale service=3`

**Q67. Compose vs Dockerfile?**
Dockerfile builds **one image**. Compose runs/connects **multiple services** as one app.

---

## Module 9: Orchestration Basics

**Q68. Why is orchestration needed?**
To manage containers at scale across hosts: deployment, scaling, load balancing, self-healing, rolling updates.

**Q69. What is Docker Swarm?**
Docker's native clustering tool — turns multiple Docker hosts into one virtual host.

**Q70. Node, Service, Task in Swarm?**
**Node** = a Docker engine in the swarm. **Service** = definition of what to run (e.g. 3 replicas of nginx). **Task** = one running container instance of that service.

**Q71. Swarm vs Kubernetes?**
Swarm: simpler, built into Docker, easy setup. Kubernetes: more powerful, larger ecosystem, industry standard for production at scale.

**Q72. What is a rolling update?**
Replacing old container instances with new ones gradually for zero-downtime deployment.

---

## Module 10: Best Practices & Security

**Q73. How to keep images small?**
Minimal base images (alpine), multi-stage builds, combine RUN commands, `.dockerignore`, avoid unneeded packages.

**Q74. Key security best practices?**
Run as non-root, use trusted base images, scan for vulnerabilities, never bake secrets into images, keep images updated, limit resources/capabilities.

**Q75. Why not store secrets in a Dockerfile?**
Layers are cached and inspectable — a secret added then deleted in a later layer is still recoverable. Use env vars/secrets manager at runtime instead.

**Q76. What does `docker system prune` do?**
Cleans unused containers, dangling images, networks, build cache. `-a` also removes unused (not just dangling) images.

**Q77. What is a dangling image?**
An untagged image layer (`<none>:<none>`), usually left after rebuilding with the same tag.

**Q78. How to improve production reliability?**
Small images, `HEALTHCHECK`, graceful shutdown (signal handling), resource limits.

---

## Module 11: Common Interview Questions

**Q79. Does a stopped (not removed) container keep its data?**
Yes, until `docker rm` deletes it.

**Q80. What if the image isn't local when you `docker run` it?**
Docker auto-pulls it from the registry first.

**Q81. Can two containers bind the same host port?**
No — causes a port conflict.

**Q82. What is UnionFS in Docker's context?**
Filesystem that stacks multiple layers into one unified view — basis for how image layers + writable container layer combine (via drivers like overlay2).

**Q83. Steps when you run `docker run nginx`?**
1) Client sends request to daemon → 2) daemon checks/pulls image if missing → 3) creates container (writable layer added) → 4) allocates network → 5) starts the process (CMD/ENTRYPOINT) → 6) container runs.

**Q84. `docker image` vs `docker container` command groups?**
Object-specific CLI groups (`docker image ls/rm`, `docker container ls/rm`); legacy shortcuts like `docker images`, `docker ps` still work.

**Q85. How to debug a container that exits immediately?**
`docker logs`, check exit code via `docker ps -a`, run interactively (`docker run -it image sh`), verify CMD/ENTRYPOINT isn't a short-lived process.

**Q86. Why does a container exit even if the app "should" keep running"?**
Container lives only as long as its PID 1 process runs — if that process finishes/crashes, container stops.

**Q87. `latest` tag vs a pinned version tag?**
`latest` is mutable and can point to different builds over time. Production should pin specific/immutable tags for reproducibility.

**Q88. Copy files between host and container?**
`docker cp <container>:/path /host/path` (and reverse).

---

## Quick Revision Checklist

- [ ] Container vs VM in 30 seconds
- [ ] Docker architecture: client → daemon → registry
- [ ] Write a basic Dockerfile from memory
- [ ] CMD vs ENTRYPOINT with example
- [ ] Volumes vs bind mounts
- [ ] Simple docker-compose.yml (app + DB)
- [ ] 3 image size optimization techniques
- [ ] 3 container security best practices
- [ ] Step-by-step of `docker run <image>`
- [ ] Swarm vs Kubernetes, high level

---

*Tip: Type out the commands yourself — hands-on recall is what practical interview rounds test most.*