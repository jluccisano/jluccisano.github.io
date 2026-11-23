---
title: "Install Python"
related: true
header:
  overlay_image: /assets/images/python.png
  teaser: /assets/images/python.png
categories:
  - Linux
tags:
  - Raspberry PI
  - Unix
  - Python
---

> **Legacy post.** This article was written between 2016 and 2018. Software versions, commands and services mentioned here may be outdated. Check the official documentation before running anything.

The goal of this tutorial is to install Python and run it in a virtual environment.


- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Install PIP](#install-pip)
- [Create VirtualEnv (optional)](#create-virtualenv)

### Prerequisites

- [Set up a Raspberry PI 3]({{ site.url }}{{ site.baseurl }}/raspberry/setup-raspberry)

### Installation

Python is usually already installed with the Raspbian image.

Check the installation:

```bash
python --version
```
Otherwise, you can install it:
```bash
apt-get update
apt-get install build-essential python-dev
```

### Install PIP

PIP is a package manager that installs and manages Python packages.

```bash
wget https://bootstrap.pypa.io/get-pip.py
```

```bash
python get-pip.py
```

See more [here](https://pip.pypa.io/en/latest/installing)

### Create VirtualEnv (optional)

A virtual environment is useful to keep the dependencies required by different projects. 

Note: virtualenv includes PIP

#### Installation

```bash
sudo pip install virtualenv
```
##### Create a workspace directory for the Python version.
Example:
```bash
mkdir -p ~/workspace/venv2.7
```
#### Create a virtualenv linked to the Python interpreter of your choice.
Example:
```bash
virtualenv -p /usr/bin/python2.7 ~/workspace/venv2.7/
```
#### Start the virtual environment.
```bash
source ~/workspace/venv2.7/bin/activate
```
You can now install the packages you need in your isolated environment.
Example:
```bash
pip install requests
```

See more [here](http://docs.python-guide.org/en/latest/dev/virtualenvs/)

