#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { KvltBotsStack } from '../lib/kvlt-bots-stack'

const app = new cdk.App()
new KvltBotsStack(app, 'KvltBotsStack')
