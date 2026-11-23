---
title: "Tunelling itunes server"
related: true
header:
  overlay_image: /assets/images/maico-amorim-57141.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
  teaser: /assets/images/maico-amorim-57141.jpg
categories:
  - Computer
tags:
  - ssh
---

> **Legacy post.** This article was written between 2016 and 2018. Software versions, commands and services mentioned here may be outdated. Check the official documentation before running anything.

Tunneling iTunes server over SSH

iTunes server 

###  Prerequisites

#### SSH Config

Check your SSH server config:

```bash
vim /etc/sshd_config
```

You need to have these parameters

```text
AllowTcpForwarding yes
```

#### Router config

Don't forget to forward the port

#### Restart the SSH daemon

```bash
sudo synoservicectl --restart sshd
```

### Manual

### Scripting

#### Create an RSA key

```bash
sudo synoservicectl --restart sshd
```

read + write
chmod 600 Authorized_keys 
RSAAuthentication yes

sudo synoservicectl --restart sshd
sudo chmod -R 755 /volume1/homes/YOUR_USER

http://www.uponmyshoulder.com/blog/2010/tunneling-itunes-through-ssh/

ssh -p 87 -N <user>@<your-public-ip>  -L 3690:localhost:3689 -f
ssh -A -L 3690:localhost:3689 -N -f <user>@<your-public-ip>
ssh -p 87 -N -L 3690:localhost:3689 <user>@<your-public-ip>
ssh -p 87 -C -N -L  3692:localhost:3689 <user>@<your-public-ip>

dns-sd -P <user> _daap._tcp local 3690 localhost 127.0.0.1 &
dns-sd -P name type domain port host IP [key=value ...]
dns-sd -P <user> _daap._tcp local. 3690 localhost. 127.0.0.1
dns-sd -P <user> _daap._tcp local 3692 localhost.local 127.0.0.1 "ffid=12345"

lsof -i -n | egrep '\<ssh\>'
lsof -i tcp | grep ^ssh
 
The following commands search for iTunes Home Sharing instances

dns-sd -B
dns-sd -B _home-sharing._tcp
dns-sd -B _daap._tcp