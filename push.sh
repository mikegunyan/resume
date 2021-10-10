#!/bin/sh

echo "➡ Production Push started"

echo "➡ Pushing to Github"
# branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
git add . && git commit -m"Docker Push"
git push origin $branch