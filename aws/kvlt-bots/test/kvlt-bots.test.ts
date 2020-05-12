import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert'
import * as cdk from '@aws-cdk/core'
import * as KvltBots from '../lib/kvlt-bots-stack'

test('Empty Stack', () => {
    const app = new cdk.App()
    // WHEN
    const stack = new KvltBots.KvltBotsStack(app, 'MyTestStack')
    // THEN
    expectCDK(stack).to(matchTemplate({
      'Resources': {}
    }, MatchStyle.EXACT))
})
