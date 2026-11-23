---
title: "Install Docker"
related: true
header:
  overlay_image: /assets/images/boba-jovanovic-65138.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
  teaser: /assets/images/boba-jovanovic-65138.jpg
categories:
  - Linux
tags:
  - Docker
  - Unix
---

> **Legacy post.** This article was written between 2016 and 2018. Software versions, commands and services mentioned here may be outdated. Check the official documentation before running anything.

The goal of this tutorial is to install the Docker engine and share some useful command lines to work with it.


- [What's Docker](#what-docker)
- [Installation](#installation)
- [Install Portainer.io](#install-portainer)
- [Install Docker Compose](#install-docker-compose)
- [Install on Raspberry](#install-on-raspberry)
- [Useful Docker command line](#useful-docker-command-line)

### What's Docker?

All you need to know about Docker is [here](https://www.docker.com/what-docker)

### Installation

Everything is [here](https://docs.docker.com/engine/installation/)

### Install Portainer.io 

Manage Docker with a GUI

```bash
docker run -d -p 9000:9000 --name portainer -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer
```

See more about [portainer.io](http://portainer.io/install.html)

### Install Docker Compose

Compose is a tool for defining and running multi-container Docker applications...
See more [here](https://docs.docker.com/compose/overview/)

```bash
curl -L "https://github.com/docker/compose/releases/download/1.10.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

See more [here](https://docs.docker.com/compose/install/)

### Useful docker command line

- Get the list of running containers
```bash
sudo docker ps -a 
```

- Kill a container
```bash
sudo docker kill YOUT_CONTAINER_ID
```
- Remove a container
```bash
docker rm CONTAINER_ID
```

- Get the list of images
```bash
sudo docker images
```

- Remove an image
```bash
docker rmi IMAGE_ID
```

- Interact with the container
```bash
docker exec -i -t CONTAINER_ID /bin/bash
```

- Restart the Docker service

```bash
sudo systemctl restart docker
```

- Avoid using sudo 

```bash
groupadd docker
usermod -aG docker YOUR_USER
```

- Bind your Docker repository to an external file system

```bash
sudo service docker stop
mv /var/lib/docker /docker
sudo ln -s /docker /var/lib/docker
sudo service docker start
```

- Set DOCKER_OPTS

```bash
sudo vim /etc/default/docker >> DOCKER_OPTS="-g $(readlink -f /var/lib/docker)"
```

DOCKER_OPTS is deprecated in recent Docker versions; use /etc/docker/daemon.json instead.

### Install on Raspberry

```bash
curl -sSL https://get.docker.com | sh
```

See more [here](https://www.raspberrypi.org/blog/docker-comes-to-raspberry-pi/)

### Link data to another disk

systemctl stop docker

mv /var/lib/docker /home/<user>/docker

ln -s /home/<user>/docker /var/lib/docker

systemctl start docker




