#!/bin/bash

cd $(dirname `[[ $0 = /* ]] && echo "$0" || echo "$PWD/${0#./}"`)

AWS_ACCESS_KEY_ID=$1
AWS_SECRET_ACCESS_KEY=$2
REGION=$3

curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
unzip awscli-bundle.zip
sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws

rm ~/.aws/config
mkdir -p ~/.aws
echo "[default]" >  ~/.aws/config
echo "aws_access_key_id=${AWS_ACCESS_KEY_ID}" >>  ~/.aws/config
echo "aws_secret_access_key=${AWS_SECRET_ACCESS_KEY}" >>  ~/.aws/config
echo "region=${REGION}" >>  ~/.aws/config

npm install
