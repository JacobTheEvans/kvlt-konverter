#!/bin/bash

cd $(dirname `[[ $0 = /* ]] && echo "$0" || echo "$PWD/${0#./}"`)

DOCKER_USERNAME=$1
DOCKER_PASSWORD=$2

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

GIT_COMMIT=$(git rev-parse HEAD)

docker build -t jacobtheevans/kvlt-discord-bot:${GIT_COMMIT} .

docker push jacobtheevans/kvlt-discord-bot:${GIT_COMMIT}
