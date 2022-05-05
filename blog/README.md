## Build and deploy pod into minikube

1. build image in directory. ```docker build -t <repository/docker-image-name:tag> .```
2. copy image into minikube ```minikube image load <image name>```
3. Create and deploy pods ```minikube kubectl -- apply -f ./infra/k8s```

* Delete pods ```minikube kubectl -- delete -f ./infra/k8s```
* List pods ```minikube kubectl -- get pods```