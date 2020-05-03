var store = [{
        "title": "Create a sprinkler system",
        "excerpt":"The objective of this tutorial is to create and control a sprinkler system with a Raspberry PI.      Hydraulic part   Electronic part   Software part   Final Result   ","categories": ["Automation"],
        "tags": ["Raspberry PI","Hydraulic","Electronic","Electrical","Python","Linux","SSH","REST","Internet of Things"],
        "url": "https://jluccisano.github.io/automation/sprinkler/",
        "teaser":"https://jluccisano.github.io/assets/images/anthony-rossbach-59486.jpg"},{
        "title": "Setup a Raspberry PI 3",
        "excerpt":"The objective of this tutorial is to set up a Raspberry PI 3 from scratch. Prerequisites Installation Retrieve Raspberry PI 3 Connect via SSH Set a static IP Address Enable Wifi Prerequisites Components &lt; 60 EUR: Component Site Price Raspberry PI 3 Farnell 37.69 EUR Power supply Micro USB 5V...","categories": ["Raspberry"],
        "tags": ["Raspberry PI","Linux","SSH"],
        "url": "https://jluccisano.github.io/raspberry/setup-raspberry/",
        "teaser":"https://jluccisano.github.io/assets/images/ben-moore-101.jpg"},{
        "title": "Create a reactive weather station",
        "excerpt":"The objective of this tutorial is to design a full reactive architecture interacting with a Raspberry PI 3 as μService producing temperature and humidity data. Prerequisites Overview Run Final Result Prerequisites You must be aware of these posts to understand the environment. Set up a Raspberry PI 3 Interacting with...","categories": ["Automation"],
        "tags": ["Raspberry PI","RabbitMQ","D3js","Docker","Gulp","Java","Maven","InfluxDB","Spring","ReactJs","ES6","Swagger","Python","WebSocket","Git","μService","REST","Internet of Things"],
        "url": "https://jluccisano.github.io/automation/reactive-weather-station/",
        "teaser":"https://jluccisano.github.io/assets/images/jordan-ladikos-62738.jpg"},{
        "title": "Interacting with DHT22 Sensor",
        "excerpt":"The objective of this tutorial is to develop a program interacting with DHT22 Sensor. Prerequisites Electronic wiring Install Adafruit Get Series of data Prerequisites Components &lt; 70 EUR: Component Site Price Raspberry PI 3 Farnell 37.69 EUR Power supply Micro USB 5V 2500mA Amazon 8.99 EUR Micro SD Card (16...","categories": ["Raspberry"],
        "tags": ["Raspberry PI","DHT22","Electronic","Python","Linux"],
        "url": "https://jluccisano.github.io/raspberry/dht22-raspberry/",
        "teaser":"https://jluccisano.github.io/assets/images/caspar-rubin-224229.jpg"},{
        "title": "Install Docker",
        "excerpt":"The objective of this tutorial is to install Docker engine and share some useful command line to interact with it. What’s Docker Installation Install Portainer.io Install Docker Compose Install on Raspberry Useful Docker command line What’s Docker? All you need to know about Docker is here Installation All is here...","categories": ["Linux"],
        "tags": ["Docker","Unix"],
        "url": "https://jluccisano.github.io/linux/install-docker/",
        "teaser":"https://jluccisano.github.io/assets/images/boba-jovanovic-65138.jpg"},{
        "title": "Raspbian basic administration",
        "excerpt":"The objective of this tutorial is to set up basic configuration of Raspbian distribution. Prerequisites Create user Configure SSH Install zsh Prerequisites Create user Change password root Why use “adduser” instead of “useradd” ? a. Add user adduser new_user b. Set password passwd new_user install sudo apt-get install sudo c....","categories": ["Raspberry"],
        "tags": ["Raspberry PI","Linux"],
        "url": "https://jluccisano.github.io/raspberry/setup-linux/",
        "teaser":"https://jluccisano.github.io/assets/images/linux.jpg"},{
        "title": "Interacting with Raspberry GPIO",
        "excerpt":"The objective of this tutorial is to develop a program interacting with Raspberry PI GPIO. Prerequisites Install RPi.GPIO First program Prerequisites Set up a Raspberry PI 3 Install Python Install RPi.GPIO pip install RPi.GPIO First program This program just setup pin 12 as Output with initial value High. Then I...","categories": ["Raspberry"],
        "tags": ["Raspberry PI","Unix","Python"],
        "url": "https://jluccisano.github.io/raspberry/test-gpio/",
        "teaser":"https://jluccisano.github.io/assets/images/raspberry.jpg"},{
        "title": "Generating new SSH Key",
        "excerpt":"The objective of this tutorial is to generate a SSH Key in order to connect to your server without set your password each time. Prerequisites Generating new SSH Key Useful commands Sending SSH key to a server Prerequisites SSH installed (ex: OpenSSH, OpenBSD Secure Shell server) Generating new SSH Key...","categories": ["Linux"],
        "tags": ["SSH","Unix"],
        "url": "https://jluccisano.github.io/linux/generate-rsa-key/",
        "teaser":"https://jluccisano.github.io/assets/images/ssh.jpg"},{
        "title": "Create a Linux service",
        "excerpt":"The objective of this tutorial is to create a system service in order to run a standalone program on background. Prerequisites Create service Useful commands Prerequisites Set up a Raspberry PI 3 Create Service a. Create new service sudo vim /lib/systemd/system/myservice.service b. Edit parameters [Unit] Description=MyService After=multi-user.target [Service] Type=simple ExecStart=/usr/bin/python...","categories": ["Linux"],
        "tags": ["Raspberry PI","Unix"],
        "url": "https://jluccisano.github.io/linux/create-service/",
        "teaser":"https://jluccisano.github.io/assets/images/linux.jpg"},{
        "title": "Install Python",
        "excerpt":"The objective of this tutorial is to install Python and run it with virtual environment. Prerequisites Installation Install PIP Create VirtualEnv (optional) Prerequisites Set up a Raspberry PI 3 Installation Usually Python is already installed with the Raspbian image. Check install: python --version Otherwise you can install it apt-get update...","categories": ["Linux"],
        "tags": ["Raspberry PI","Unix","Python"],
        "url": "https://jluccisano.github.io/linux/install-python/",
        "teaser":"https://jluccisano.github.io/assets/images/python.png"},{
        "title": "Consume data from RabbitMQ",
        "excerpt":"The objective of this tutorial is to develop a reactive server which consuming data from a rabbitmq message broker and publishing data to client via websocket. Prerequisites Architecture overview Setup environment Consume data from Rabbitmq Store data into InfluxDB Create Rest API with Swagger Publish data to client via Websocket...","categories": ["Computer"],
        "tags": ["Raspberry PI","RabbitMQ","Docker","Java","Maven","Spring","Swagger","Python","Git","μService","REST","Internet of Things"],
        "url": "https://jluccisano.github.io/computer/consume-data-from-rabbitmq/",
        "teaser":"https://jluccisano.github.io/assets/images/ray-hennessy-118035.jpg"},{
        "title": "Consume data from reactive client",
        "excerpt":"The objective of this tutorial is to develop a reactive client which consuming temperature and humidity via websocket and showing a dashboard of continuous data via a REST API. Prerequisites Architecture overview Setup environment Create a simple ReactJS component Create a ReactJS socket module via STOMP and sockJS Get data...","categories": ["Computer"],
        "tags": ["Docker","Gulp","ReactJs","ES6","WebSocket","Git","REST","D3js","HTML5","JavaScript","Stomp","Internet of Things"],
        "url": "https://jluccisano.github.io/computer/consume-data-from-reactive-client/",
        "teaser":"https://jluccisano.github.io/assets/images/markus-spiske-109588.jpg"},{
        "title": "Store data into InfluxDB",
        "excerpt":"The objective of this tutorial is to install an InfluxDB container with Docker and interacting with it. Prerequisites Run influxDB on Docker Create Database Connect to influxDB Create retention policy Create continuous query Useful commands Prerequisites Set up a Raspberry PI 3 Interacting with DHT22 Sensor A server or your...","categories": ["Computer"],
        "tags": ["InfluxDB","Docker"],
        "url": "https://jluccisano.github.io/computer/install-influxdb/",
        "teaser":"https://jluccisano.github.io/assets/images/influxdb_templated_query.gif"},{
        "title": "Push data to RabbitMQ",
        "excerpt":"The objective of this tutorial is to publish temperature and humidity to a RabbitMQ message broker. Prerequisites Run RabbitMQ container Create a publisher on your Raspberry Create a consumer on your Raspberry Start publisher as Service Prerequisites Set up a Raspberry PI 3 Interacting with DHT22 Sensor A server or...","categories": ["Computer"],
        "tags": ["Raspberry PI","RabbitMQ","Docker","Python","Git","μService","Internet of Things"],
        "url": "https://jluccisano.github.io/computer/push-data-on-rabbitmq/",
        "teaser":"https://jluccisano.github.io/assets/images/ray-hennessy-118035.jpg"},{
        "title": "Security alarm with Raspberry",
        "excerpt":"In progress   ","categories": ["Project"],
        "tags": ["Raspberry"],
        "url": "https://jluccisano.github.io/project/alarming-system/",
        "teaser":"https://jluccisano.github.io/assets/images/alarming.jpg"},{
        "title": "Install GIT",
        "excerpt":"Useful commands Most useful git commands My useful commands gitg git graph -a Rename last commit git commit --amend or git rebase -i HEAD~1 Squash 2 commits in one git rebase -i HEAD~2 git rebase --interactive --root Set core editor git config --global core.editor \"vim\" Stash git stash git stash...","categories": ["Linux"],
        "tags": ["Git"],
        "url": "https://jluccisano.github.io/linux/install-git/",
        "teaser":"https://jluccisano.github.io/assets/images/6-30-12_Git.jpg"},{
        "title": "NextRun",
        "excerpt":"Create and plan your sport workout.   Web site: www.nextrun.fr   Source on Github   Architecture Overview                     Nextrun Architecture Overview        Docker build   sudo docker run --name mongo-nextrun -v /home/desktop/data/db:/data/db -d mongo:tag -p 27017:27017   ","categories": ["Project"],
        "tags": ["NodeJs","AngularJS","MongoDB","SASS","CSS","HTML5","JavaScript","Google Maps API"],
        "url": "https://jluccisano.github.io/project/nextrun/",
        "teaser":"https://jluccisano.github.io/assets/images/maico-amorim-57141.jpg"},{
        "title": "Install Go on Raspberry",
        "excerpt":"Download ARM Version wget https://storage.googleapis.com/golang/go1.9.1.linux-armv6l.tar.gz Extract sudo tar -C /usr/local -xzf go1.9.1.linux-armv6l.tar.gz Create GOPATH directory mkdir -p /home/pi/workspace/go Export Env Variables Edit your bashrc: sudo vim ~/.bashrc Add vars: export GOPATH=/home/pi/workspace/go export GOROOT=/usr/local/go export PATH=$PATH:$GOPATH/bin:$GOROOT/bin Reload bash . ~/.bashrc Test go version Output: go version go1.9.1 linux/arm Clean up rm...","categories": ["Raspberry"],
        "tags": ["Go","Raspberry"],
        "url": "https://jluccisano.github.io/raspberry/go/",
        "teaser":"https://jluccisano.github.io/assets/images/maico-amorim-57141.jpg"},{
        "title": "Install LCD screen on Raspberry PI 3",
        "excerpt":"The objective of this tutorial is to set up a LCD screen on Raspberry PI 3.      Prerequisites   https://www.amazon.fr/gp/product/B01FX7909Q/ref=oh_aui_detailpage_o04_s00?ie=UTF8&amp;psc=1   ```bash git clone https://github.com/goodtft/LCD-show.git chmod -R 755 LCD-show cd LCD-show/ sudo ./LCD35-show ``  ","categories": ["Raspberry"],
        "tags": ["Raspberry PI","Linux","SSH"],
        "url": "https://jluccisano.github.io/raspberry/Install-raspberry-lcd/",
        "teaser":"https://jluccisano.github.io/assets/images/ben-moore-101.jpg"},{
        "title": "Install Xiaomi Camera ",
        "excerpt":"The objective of this tutorial is to set up a Xiaomi Camera Prerequisites Hacking flashing qr Synology Surveillance Prerequisites Components &lt; 60 EUR: Component Site Price Xiaomi XiaoFang Camera IP Gearbest 37.69 EUR Micro SD Card (32 Go class 10) Amazon 9.99 EUR Total:   56.67 EUR diskutil partitionDisk /dev/disk2...","categories": ["Computer"],
        "tags": ["Linux","SSH"],
        "url": "https://jluccisano.github.io/computer/install-xiaomi-camera/",
        "teaser":"https://jluccisano.github.io/assets/images/ben-moore-101.jpg"},{
        "title": "Kivy software",
        "excerpt":"The objective of this tutorial is      Prerequisites   https://kivy.org/docs/installation/installation-rpi.html  ","categories": ["Raspberry"],
        "tags": ["Raspberry PI","Linux","SSH"],
        "url": "https://jluccisano.github.io/raspberry/kivy-software/",
        "teaser":"https://jluccisano.github.io/assets/images/ben-moore-101.jpg"},{
        "title": "Create a sprinkler system: Hydraulic part",
        "excerpt":"The objective of this tutorial is to describe step by step how to make the hydraulic part of a sprinkler system. Use this tutorial as the guideline in order to design yours, all components (brand, size, quantity, capacity…) described below is my own design as example but each projects are...","categories": ["Automation"],
        "tags": ["Sprinkler","Hidraulic"],
        "url": "https://jluccisano.github.io/automation/sprinkler-hydraulic/",
        "teaser":"https://jluccisano.github.io/assets/images/sprinkler/hydro_components.JPG"},{
        "title": "Create a sprinkler system: Electrical part",
        "excerpt":"The aim of this tutorial is to wire the electrical part of a sprinkler system. At the end of this tutorial, we will be able to control the sprinkler system from a Raspberry PI. Electrical part Electronic part Software part Electrical part Prerequisites Sprinkler hydraulic part Overview Valves box final...","categories": ["Automation"],
        "tags": ["Electrical","Electronic","Linux","Raspberry","Python","Software"],
        "url": "https://jluccisano.github.io/automation/sprinkler-elec/",
        "teaser":"https://jluccisano.github.io/assets/images/anthony-rossbach-59486.jpg"},{
        "title": "Software part",
        "excerpt":"The aim of this tutorial is to control sprinkler from his smartphone anywhere without SSH connection. In the previous tutorial, I explain how to control sprinkler from command line directly by a daemon service on the Raspberry. In order to be able to access of the raspberry from internet we...","categories": ["Automation"],
        "tags": ["Software","Python","Git","Linux"],
        "url": "https://jluccisano.github.io/automation/sprinkler-software/",
        "teaser":"https://jluccisano.github.io/assets/images/anthony-rossbach-59486.jpg"},{
        "title": "Tunelling itunes server",
        "excerpt":"Tunneling Itunes server over SSH Itunes server Prerequisites SSH Config Check your SSH server config: vim /etc/sshd_config You need to have these params AllowTcpForwarding yes Router config Don’t forget forwarding port Restart the SSH daemon sudo synoservicectl --restart sshd Manual Scripting Create an RSA key sudo synoservicectl --restart sshd read...","categories": ["Computer"],
        "tags": ["ssh"],
        "url": "https://jluccisano.github.io/computer/tuneling-itunes-server/",
        "teaser":"https://jluccisano.github.io/assets/images/maico-amorim-57141.jpg"},{
        "title": "Useful linux commands",
        "excerpt":"Useful commands Get procces id by port lsof -i tcp:3690 or netstat -nlp | grep 8080 Find the largest 10 files (linux/bash) find . -type f -print0 | xargs -0 du | sort -n | tail -10 | cut -f2 | xargs -I{} du -sh {} Find the largest 10...","categories": ["Computer"],
        "tags": ["linux"],
        "url": "https://jluccisano.github.io/computer/useful-linux-commands/",
        "teaser":"https://jluccisano.github.io/assets/images/maico-amorim-57141.jpg"},{
        "title": "Organize photo library",
        "excerpt":"Environment Upload Consolidate Backups Show Environment @startuml [SonyA6000] [Iphone1] [Iphone2] [Camera XTrem] [Imac] [SynologyNAS] [DLinkDNS320] [OVHServer] [SonyA6000]–&gt;[Imac] [Camera XTrem]–&gt;[Imac] [Iphone1]—&gt;[SynologyNAS]: DS Photo sync to “Last import” [Iphone2]—&gt;[SynologyNAS]: DS Photo sync to “Last import” [Imac]—&gt;[SynologyNAS]: Upload to “Last import” [SynologyNAS]–&gt; [DLinkDNS320]: Rsync [SynologyNAS] –&gt; [OVHServer]: Rsync @enduml Upload Upload SD Card...","categories": ["Computer"],
        "tags": ["Linux"],
        "url": "https://jluccisano.github.io/computer/organize-photo-library/",
        "teaser":"https://jluccisano.github.io/assets/images/maico-amorim-57141.jpg"},{
        "title": "Deploy release with Travis CI",
        "excerpt":"The objective of this tutorial is to set up Travis Ci in order to deploy release into Github and DockerHub Prerequisites Deploy Github release via personal OAuth Token Deploy Docker image to docker hub Prerequisites Travis CI account DockerHub account Github account Install Ruby https://guides.rubygems.org/rubygems-basics/ Deploy Github release via personal...","categories": ["Computer"],
        "tags": ["Linux","Travis"],
        "url": "https://jluccisano.github.io/computer/travis/",
        "teaser":"https://jluccisano.github.io/assets/images/maico-amorim-57141.jpg"},{
        "title": "Use Netatmo rain sensor to regulate your sprinkler",
        "excerpt":" ","categories": ["Automation"],
        "tags": ["Software","Python","Git","Linux","IoT","Netatmo"],
        "url": "https://jluccisano.github.io/automation/sprinkler-netatmo/",
        "teaser":"https://jluccisano.github.io/assets/images/anthony-rossbach-59486.jpg"},{
        "title": "Ma première roue artisanale",
        "excerpt":"Dans cet article, je vais décrire toutes les étapes qui m’ont permis de réaliser ma première roue artisanale. Dès que j’ai débuté le vélo, je me suis très vite intéressé aux roues de vélo et compris l’importance qu’elles avaient en terme de performance, de confort et de sensations. J’ai acheté...","categories": ["Sport"],
        "tags": ["Sport","Mécanique","Cyclisme"],
        "url": "https://jluccisano.github.io/sport/wheel-building_fr/",
        "teaser":"https://jluccisano.github.io/assets/images/wheel-building/cover.jpg"},{
        "title": "Bike building",
        "excerpt":"I want to share with you how we can build your own custom bike , top of the line with an affordable price. I’m not a professional ! I want to convince those having doubts regarding skills or quality. I bought carbon gears in the same OEM Manufacturer like well-known...","categories": ["Sport"],
        "tags": ["Sport","Cycling","DIY","Bike","Handcrafted"],
        "url": "https://jluccisano.github.io/sport/bike-building/",
        "teaser":"https://jluccisano.github.io/assets/images/bike-building/IMG_4560.jpg"},{
        "title": "My first drone DIY",
        "excerpt":"How to build a drone from scratch Here my first take off drone DIY ! List of components Component Price Link Ardupilot APM 2.8 Flight Controller Board 32.37€ https://www.banggood.com/Ardupilot-APM-2_8-Flight-Control-Board-Bend-Pin-with-Protective-Case-p-1123217.html?rmmds=myorder&amp;ID=528423&amp;cur_warehouse=CN Carbon Fiber Frame Kit Mini Quadcopter 15.45€ https://www.banggood.com/Lisam-LS-210-210mm-Carbon-Fiber-Frame-Kit-Mini-Quadcopter-p-1001216.html?rmmds=myorder&amp;cur_warehouse=CN 4X Racerstar Racing motors 40.03€ https://www.banggood.com/4X-Racerstar-Racing-Edition-2205-BR2205-2300KV-2-4S-Brushless-Motor-For-QAV250-ZMR250-RC-Drone-FPV-Racing-p-1066837.html?rmmds=myorder&amp;cur_warehouse=HK Propeller for Racing 7.22€ https://www.banggood.com/10-Pairs-Kingkong-LDARC-5040-5x4x3-3-Blade-Single-Color-CW-CCW-Propeller-for-Racing-Drone-p-1067875.html?rmmds=myorder&amp;ID=226&amp;cur_warehouse=CN FlySky FS-i6...","categories": ["DIY"],
        "tags": ["Drone","Python","Electonics","DIY"],
        "url": "https://jluccisano.github.io/diy/drone-diy/",
        "teaser":"https://jluccisano.github.io/assets/images/anthony-rossbach-59486.jpg"},{
        "title": "How to hand-build your wheel",
        "excerpt":"In this article, I will describe all the steps that allowed me to make my first homemade wheel. As soon as I started cycling, I quickly became interested in bicycle wheels and understood the importance that they had in terms of performance, comfort and sensations. I bought several pairs, inexpensive...","categories": ["Sport"],
        "tags": ["Sport","Mechanical","Cycling","Wheel building"],
        "url": "https://jluccisano.github.io/sport/wheel-building_en/",
        "teaser":"https://jluccisano.github.io/assets/images/wheel-building/cover.jpg"}]
