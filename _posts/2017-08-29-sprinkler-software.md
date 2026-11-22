---
title: "Software part"
related: true
header:
  overlay_image: /assets/images/anthony-rossbach-59486.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
  teaser: /assets/images/anthony-rossbach-59486.jpg
categories:
  - Automation
tags:
  - Software
  - Python
  - Git
  - Linux
  
---

The aim of this tutorial is to control the sprinkler from a smartphone, anywhere, without an SSH connection.

In the previous tutorial, I explained how to control the sprinkler from the command line, directly through a daemon service
on the Raspberry. To access the Raspberry from the internet, we need to expose an API
through an HTTP server. Finally, we will be able to control the sprinkler with simple HTTP requests from anywhere.

- [Create HTTP server](#create-http-server)
- [Call API from Smartphone](#call-api-from-smartphone)

### Create HTTP server

It is easy to create a simple HTTP server in Python with Flask. I used basic authentication, which is the minimum
to implement if you want to expose this API everywhere. In addition, ZoneControl already implements all the functions
we need to expose from the HTTP server controller, so we can keep using the daemon and the HTTP server in
parallel. You need to 

TODO create Flask and Swagger

git clone 

start the server 

See more into the readme

### Call API from smartphone

We can now control the sprinkler with simple HTTP requests. At first, I wondered whether I had to code a mobile
application (iOS, Android...). After thinking about it, I asked myself: is there a simple application that can
send requests, like curl or Postman, but on mobile. So I found the perfect application on iPhone [here](https://itunes.apple.com/fr/app/curler-une-interface-pour-vos-api-http/id1210896283?mt=8)
There are a few equivalent applications for iPhone and Android.

**Note**: If you want to access your HTTP server outside your LAN, don't forget to forward the port on your 
router.

So I have just set up all the requests in this application!

TODO screenshot samples.

{% include figure image_path="/assets/images/sprinkler/curler_sprinkler.jpg" alt="Curler sprinkler" 
caption="Curler sprinkler" %}
