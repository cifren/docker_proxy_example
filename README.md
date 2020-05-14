# Proxy Example

This example has benn build based on the article from [this blog](https://medium.com/@francoisromain/set-a-local-web-development-environment-with-custom-urls-and-https-3fbe91d2eaf0)

## You need

You need to install `docker`, `docker-compose` and `make`

You need to check that port 80 is free in order to proxy to work

## Get started
### Setup your hosts
First thing first, you need to link your local domaine name to your localhost

Open /etc/hosts file and add 
```
# My docker apps
127.0.0.1 app1.local app2.local app3.local
```

### Start your proxy

You need this proxy to redirect :80 port to each application, this docker will do it for you.

Go to the folder `proxy` and do a simple `make start`, and you are done

### Start app1

It is a php app, so the docker app will have to be started and that is all.

Nothing more than a `make start` in app1 folder

You can now access to `http://app1.local/`

### Start app2

Same as previous app1

You can now access to `http://app2.local/` 

### Start app3

Go to your app3 folder, execute `npm install` and a `make start`

You can now access to `http://app3.local/`

## How it is done

All you need to do in order to register a new service is to :
- add your `app*.local` to your `hosts` file
- add a new env `VIRTUAL_HOST` to `docker-compose.yml` file
- add `nginx-proxy` networks as well to your `docker-compose.yml` file (copy-paste should be enough)

You might have seen that in `docker-compose.yml` file, the port is provided only in app3, it is because by default proxy 
choose `80` port, in case of nodejs app, we usually use `3000` so we need to add `port: 3000:3000` to our conf. 

In case you have more than one port declared on your docker service, you might need to add a new env `VIRTUAL_PORT`, 
which represent the port on the docker service

As well, we don't have `expose` port. 
