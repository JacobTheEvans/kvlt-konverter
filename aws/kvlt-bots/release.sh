#!/bin/bash

cd $(dirname `[[ $0 = /* ]] && echo "$0" || echo "$PWD/${0#./}"`)

GIT_COMMIT=$(git rev-parse HEAD)
${GIT_COMMIT} ./node_modules/.bin/cdk deploy -ci
