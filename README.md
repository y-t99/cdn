# CDN

## Thanks

[Github: cdn-up-and-running](https://github.com/leandromoreira/cdn-up-and-running)

[Github: docker-nginx-vts](https://github.com/mordaha/docker-nginx-vts)

## Step

### Build backend server & Run 

```shell
cd server

docker build -t cdn-server .

docker run -p 8080:80 cdn-server
```

### Build CDN node & Run

```shell
cd edge

docker build -t cdn-edge .

docker run -p 8000:80 cdn-edge
```

### Link CDN node and backend server node

```shell
docker network create cdn-network

docker run --name backend -p 8080:80 --network cdn-network cdn-server

docker run --name edge -p 8000:80 --network cdn-network cdn-edge
```