#!/bin/sh

echo "➡ Production Push started"

echo "➡ Pushing to Github"
git add . && git commit -m"$3"
git push origin master

echo "➡ Building Docker build image"
docker build -t mikegunyan/build .

echo "➡ Changing Dockerfile"
mv Dockerfile Dockerfile1
mv Dockerfile2 Dockerfile

echo "➡ Building Docker production image"
docker build . -t mikegunyan/resume --secret id=npmrc,src=.npmrc

echo "➡ Resetting Dockerfile"
mv Dockerfile Dockerfile2
mv Dockerfile1 Dockerfile

echo "➡ Pushing to Dockerhub"
docker push mikegunyan/resume

echo "➡ Removing Docker images"
docker rmi mikegunyan/resume mikegunyan/build

echo "➡ Production Push complete"

ssh -i "../awsKeys/resume.pem" ec2-user@ec2-52-53-58-239.us-west-1.compute.amazonaws.com 'bash -s'  < pull.sh $1 $2