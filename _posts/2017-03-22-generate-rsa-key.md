---
title: "Generating new SSH Key"
related: true
header:
  overlay_image: /assets/images/ssh.jpg
  teaser: /assets/images/ssh.jpg
categories:
  - Linux
tags:
  - SSH
  - Unix
---
The goal of this tutorial is to generate an SSH key so you can connect to your server without typing your 
password each time.


- [Prerequisites](#prerequisites)
- [Generating new SSH Key](#generating-new-ssh-key)
- [Useful commands](#useful-commands)
- [Sending SSH key to a server](#sending-ssh-key-to-a-server)

### Prerequisites

- SSH installed (for example: OpenSSH, OpenBSD Secure Shell server)

### Generating new SSH Key

1. Run the command below, replacing the email address with yours
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
2. Add the SSH key to ssh-agent

```bash
ssh-add ~/.ssh/id_rsa
```
You can find more in this [tutorial](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

### Useful commands:

a. Get the list of keys:
```bash
ssh-add -L
```
b. Remove a key
```bash
ssh-add -D ~/.ssh/id_rsa
```
c. Copy the key to the clipboard

```bash
pbcopy < id_rsa_git_evs.pub
```
If you don't have pbcopy, you can install it easily. Here is an example for
[Arch Linux](https://gist.github.com/chriscandy/753eb149e9735e852b0b) users.


### Sending SSH key to a server

https://www.skyminds.net/se-connecter-depuis-un-serveur-vers-un-nas-synology-avec-des-cles-ssh-sans-mot-de-passe/

sudo vim /etc/ssh/sshd_config

Protocol 2
LoginGraceTime 2m
RSAAuthentication yes
PubkeyAuthentication yes
AuthorizedKeysFile      .ssh/authorized_keys

chmod 700 /var/services/homes/jluccisano/.ssh
chmod 644 /var/services/homes/jluccisano/.ssh/authorized_keys
chmod 755 /var/services/homes/jluccisano


sudo synoservicectl --reload sshd

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub -p X username@address
```

### Create Alias

```
cd ~/.ssh/
touch config
subl -a config
```

```
Host syno
 Hostname luccihermes.synology.me
 User jluccisano
 Port 87
 AddKeysToAgent yes
 UseKeychain yes
 IdentityFile ~/.ssh/id_rsa_syno
```

```
ssh syno
```