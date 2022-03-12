# deno-rest-api


#### build your deno image

```sh
docker build -t kaoutharzrelli/deno-docker:0.0.1 .
```

#### create an image tag using docker

```sh
docker tag 4b8d66a41759  kaoutharzrelli/deno-docker:0.0.1
```

#### docker login

```sh
docker login
```

#### docker push your image
```sh
 docker push kaotharzrelli/deno-docker:0.0.1
```
--------------------------------------------------------------------
#### start your minikube
```sh
minikube start
```

#### check your minikube ip

```sh
minikube ip
```
#### Change /etc/hosts

```sh
sudo nano /etc/hosts
@minikube_ip api.minikube.local //
```


#### Restart  networking  to accept the latest change

```sh
service network-manager restart
""sudo /etc/init.d/networking restart""
```
### create a deployment


```sh
kubectl create/apply -f api.yaml
```


### create a service


```sh
kubectl create/apply -f api-service.yaml
```

### create an ingress


```sh
kubectl create/apply -f ingress.yaml
```



