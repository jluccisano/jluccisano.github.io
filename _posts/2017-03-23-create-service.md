---
title: "Create a Linux service"
related: true
header:
  overlay_image: /assets/images/linux.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
  teaser: /assets/images/linux.jpg
categories:
  - Linux
tags:
  - Raspberry PI
  - Unix
---
The goal of this tutorial is to create a system service that runs a standalone program in the background.


- [Prerequisites](#prerequisites)
- [Create service](#create-service)
- [Useful commands](#useful-commands)

### Prerequisites

- [Set up a Raspberry PI 3]({{ site.url }}{{ site.baseurl }}/raspberry/setup-raspberry)

### Create Service

a. Create a new service

```bash
sudo vim /lib/systemd/system/myservice.service
```

b. Edit parameters

```text
[Unit]
Description=MyService
After=multi-user.target

[Service]
Type=simple
ExecStart=/usr/bin/python /opt/script.py
Restart=on-abort
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

c. Enable execution permission of your service

```bash
sudo chmod 644 /lib/systemd/system/myservice.service
```
d. Enable execution permission of your script

```bash
sudo chmod u+x /opt/script.py 
```
e. Create symbolic link 
```bash
sudo ln -s /opt/script.py /usr/bin/myservice
```
f. Reload the daemon 
```bash
sudo systemctl daemon-reload
```
g. Enable the service
```bash
sudo systemctl enable myservice.service
```
h. Start the service
```bash
sudo systemctl start myservice.service
```
i. Check the status
```bash
sudo systemctl status myservice.service
```

### Useful commands

- Stop the service
```bash
sudo systemctl stop myservice.service
```

See more [here](http://www.diegoacuna.me/how-to-run-a-script-as-a-service-in-raspberry-pi-raspbian-jessie/)





 
