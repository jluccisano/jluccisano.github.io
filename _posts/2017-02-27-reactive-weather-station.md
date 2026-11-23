---
title: "Create a reactive weather station"
related: true
header:
  image: /assets/images/jordan-ladikos-62738.jpg
  overlay_image: /assets/images/jordan-ladikos-62738.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
  teaser: /assets/images/jordan-ladikos-62738.jpg
categories:
  - Automation
tags:
  - Raspberry PI
  - RabbitMQ
  - D3js
  - Docker
  - Gulp
  - Java
  - Maven
  - InfluxDB
  - Spring
  - ReactJs
  - ES6
  - Swagger
  - Python
  - WebSocket
  - Git
  - μService
  - REST
  - Internet of Things
---

> **Legacy post.** This article was written between 2016 and 2018. Software versions, commands and services mentioned here may be outdated. Check the official documentation before running anything.

The goal of this tutorial is to design a full reactive architecture that works with a Raspberry PI 3 as a
μService producing temperature and humidity data.

- [Prerequisites](#prerequisites)
- [Overview](#overview)
- [Run](#run)
- [Final Result](#final-result)

###  Prerequisites

Read these posts first to understand the environment.

-  [Set up a Raspberry PI 3]({{ site.url }}{{ site.baseurl }}/raspberry/setup-raspberry)
-  [Interacting with DHT22 Sensor]({{ site.url }}{{ site.baseurl }}/raspberry/dht22-raspberry)
-  [Push data to RabbitMQ]({{ site.url }}{{ site.baseurl }}/computer/push-data-on-rabbitmq)
-  [Consume data from RabbitMQ]({{ site.url }}{{ site.baseurl }}/computer/consume-data-from-rabbitmq)
-  [Consume data from Reactive client]({{ site.url }}{{ site.baseurl }}/computer/consume-data-from-reactive-client)

### Overview

{% include figure image_path="/assets/images/reactive-architecture.png" alt="Reactive Architecture Overview" caption="Reactive Architecture Overview" %}


| Component        |    Role       | Description  |
| ------------- |:-------------:|-------------|
| Raspberry PI 3   | μService | The Raspberry PI gets data from the sensor and pushes it over RabbitMQ |
| Mock device  | μService | This mock Raspberry device provides random data |
| RabbitMQ  | MOM (message-oriented middleware) | RabbitMQ is a message broker that implements the Advanced Message Queuing Protocol (AMQP). See more [here](https://www.rabbitmq.com/features.html)|
| Reactive-server  | Proxy | The server has 2 functions: it consumes data from RabbitMQ and pushes it directly to the socket |
| InfluxDB  | Metric database | InfluxDB is a time series database.|
| Grafana  | Data visualization | Create dynamic dashboards from an InfluxDB data source |
| Reactive-client  | GUI | The GUI consumes data from Reactive-Server via WebSocket |


### Start the full stack with docker-compose


#### Adapt the docker-compose file according to your environment

```yaml
version: '2'
services:
  reactive-server:
    image: "jluccisano/reactive-server:latest"
    environment:
      - PORT=8084
      - RABBITMQ_ENDPOINT=amqp://rabbit_user:rabbit_password@rabbitmq:5672/myvhost
      - RABBITMQ_EXCHANGE=your_exchange_name
      - RABBITMQ_QUEUE=your_queue_name
      - RABBITMQ_GATEWAYID=your_gateway_id
      - INFLUXDB_URL=http://influxdb:8086
      - INFLUXDB_USERNAME=influx_username
      - INFLUXDB_PASSWORD=influx_password
      - INFLUXDB_DATABASE=influx_db_name
      - INFLUXDB_RETENTION_POLICY=influx_rp_name
    ports:
      - "8084:8084"
    links:
      - "rabbitmq:rabbitmq"
      - "influxdb:influxdb"
    depends_on:
      - "rabbitmq"
      - "influxdb"
  rabbitmq:
    image:  "rabbitmq:3-management"
    environment:
      - RABBITMQ_DEFAULT_USER=rabbit_user
      - RABBITMQ_DEFAULT_PASS=rabbit_password
      - RABBITMQ_DEFAULT_VHOST=myvhost
    ports:
     - "5672:5672"
     - "8092:15672"
  influxdb:
    image: "appcelerator/influxdb"
    volumes:
      - './resources/init_script.influxql:/etc/extra-config/influxdb/init_script.influxql:ro'
    ports:
      - "8083:8083"
      - "8086:8086"
  grafana:
    image: 'grafana/grafana'
    links:
      - "influxdb:influxdb"
    depends_on:
      - "influxdb"
    ports:
      - '3600:3000'
  reactive-client:
     image: 'jluccisano/reactive-client:1.0'
     links:
       - "reactive-server:reactive-server"
     depends_on:
       - "reactive-server"
     ports:
       - "8089:80"
  mock-raspberry:
    build:
      context: ./resources
      dockerfile: mock-raspberry.dockerfile
    environment:
      - RABBITMQ_ENDPOINT=amqp://rabbit_user:rabbit_password@rabbitmq:5672/myvhost
      - RABBITMQ_EXCHANGE=your_exchange_name
      - RABBITMQ_GATEWAYID=your_gateway_id
      - PUBLISH_INTERVAL=60
```
Note: mock-raspberry is optional if you run it on a Raspberry Pi.

[See code here](https://raw.githubusercontent.com/jluccisano/portfolio/master/docker-compose.yml)

##### Run

- [Git](https://git-scm.com/download/linux)
- [Docker]({{ site.url }}{{ site.baseurl }}/linux/install-docker)

```bash
docker-compose pull
docker-compose build
docker-compose up -d
```

Go to http://${YOUR_HOST}:8089

[Show online version here](http://<your-public-ip>:8089)

### Final Result

{% include figure image_path="/assets/images/final-result.png" alt="Final result" caption="Final result" %}
