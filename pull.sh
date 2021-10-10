#!/bin/sh

echo "➡ Production Pull started"
echo "➡ Removing old container"
docker rm -f mike

echo "➡ Removing old image"
docker rmi mikegunyan/resume

echo "➡ Pulling new image"
docker pull mikegunyan/resume

echo "➡ Starting new container"
docker run -d -p 80:3000 --env HOST=$1 --env PASSWORD=$2 --name mike mikegunyan/resume

echo "➡ Production Pull complete"