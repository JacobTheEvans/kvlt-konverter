#!/bin/bash

cd $(dirname `[[ $0 = /* ]] && echo "$0" || echo "$PWD/${0#./}"`)

NPM_EMAIL=$1
NPM_TOKEN=$2

rm .npmrc
echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc

PACKAGE_VERSION=$(node -p -e "require('./package.json').version")
NPM_PACAKGE_VERSION=$(npm view kvlt-konverter version)

echo "Current version on npm ${NPM_PACAKGE_VERSION}"
echo "Current version in package.json ${PACKAGE_VERSION}"
if [ "$PACKAGE_VERSION" != "$NPM_PACAKGE_VERSION" ]; then
  echo "Package has been updated publishing..."
  npm publish
fi
