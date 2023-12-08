# cdn

## Build server & Run 

cd server

docker build -t cdn-server .

docker run -p 8080:80 cdn-server