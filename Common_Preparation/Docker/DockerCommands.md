# Docker Commands Cheat Sheet

Module-wise, sequential — just the commands, for quick lookup/revision.

---

## Images

```bash
docker images                          # list local images
docker pull <image>:<tag>              # pull image (no tag = latest)
docker rmi <image>                     # remove image
docker build -t name:tag .             # build image from Dockerfile
docker history <image>                 # view image layers/history
docker image inspect <image>           # detailed image info
```

## Containers – Run & Manage

```bash
docker run image                       # run a new container
docker run -d image                    # run detached (background)
docker run -it image                   # run interactive with terminal
docker run --name myapp image          # assign a name
docker run -p 8080:80 image            # map host_port:container_port
docker run -e KEY=value image          # pass env variable
docker run --env-file .env image       # pass env file
docker run -v myvol:/path image        # mount a volume
docker run --memory="512m" --cpus="1.5" image   # limit resources

docker start <container>               # start existing (stopped) container
docker stop <container>                # graceful stop (SIGTERM)
docker kill <container>                # force stop (SIGKILL)
docker restart <container>             # restart a container
docker rm <container>                  # remove container
docker rm -f <container>               # force remove running container
```

## Containers – Inspect & Interact

```bash
docker ps                              # list running containers
docker ps -a                           # list all containers (incl. stopped)
docker logs <container>                # view logs
docker logs -f <container>             # follow logs live
docker exec -it <container> /bin/bash  # open shell in running container
docker attach <container>              # attach to container's main process
docker inspect <container>             # full container details (JSON)
docker stats                           # live CPU/memory usage
docker top <container>                 # running processes inside container
docker cp <container>:/path ./local    # copy file: container → host
docker cp ./local <container>:/path    # copy file: host → container
```

## Volumes

```bash
docker volume create myvol             # create named volume
docker volume ls                       # list volumes
docker volume inspect myvol            # volume details
docker volume rm myvol                 # remove a volume
docker volume prune                    # remove all unused volumes
```

## Networks

```bash
docker network ls                      # list networks
docker network create mynet            # create custom bridge network
docker network inspect mynet           # network details
docker network connect mynet <container>    # attach container to network
docker network disconnect mynet <container> # detach container from network
docker network rm mynet                # remove a network
docker run --network=mynet image       # run container on a specific network
```

## Docker Compose

```bash
docker compose up                      # start services (foreground)
docker compose up -d                   # start services (detached)
docker compose down                    # stop & remove containers/networks
docker compose down -v                 # also remove volumes
docker compose build                   # build/rebuild services
docker compose logs -f                 # follow logs of all services
docker compose ps                      # list services status
docker compose restart                 # restart services
docker compose up --scale service=3    # scale a service to 3 instances
```

## Docker Swarm (Orchestration)

```bash
docker swarm init                      # initialize a swarm (manager node)
docker swarm join --token <token> <ip> # join a node to the swarm
docker node ls                         # list nodes in the swarm
docker service create --name web -p 80:80 --replicas 3 nginx   # create a service
docker service ls                      # list services
docker service scale web=5             # scale a service
docker service update --image nginx:new web   # rolling update
docker stack deploy -c docker-compose.yml mystack   # deploy a stack
```

## Cleanup

```bash
docker system df                       # show disk usage
docker system prune                    # remove unused containers/networks/dangling images/cache
docker system prune -a                 # also remove all unused images
docker container prune                 # remove all stopped containers
docker image prune                     # remove dangling images
docker image prune -a                  # remove all unused images
docker network prune                   # remove unused networks
```

## Misc / Info

```bash
docker version                         # Docker client & server version
docker info                            # system-wide Docker info
docker login                           # log in to a registry
docker push <image>:<tag>              # push image to registry
docker tag <image> newname:tag         # tag an image
docker save -o image.tar image:tag     # export image to tar file
docker load -i image.tar               # import image from tar file
```

---

*Tip: Practice typing these directly instead of copy-pasting — muscle memory matters in practical interview rounds.*