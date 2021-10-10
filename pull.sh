#!/bin/sh

echo "➡ Production Pull started$1 $2"
echo "➡ Removing old container"
docker rm -f mike

echo "➡ Removing old image"
docker rmi mikegunyan/resume

echo "➡ Pulling new image"
docker pull mikegunyan/resume

echo "➡ Starting new container"
docker run -d -p 80:3000 --env HOST=54.241.75.143 --env PASSWORD=crudroot --name mike mikegunyan/resume

echo "➡ Production Pull complete"