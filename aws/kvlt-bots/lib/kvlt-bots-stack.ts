import * as cdk from '@aws-cdk/core'
import * as ec2 from '@aws-cdk/aws-ec2'
import * as ecs from '@aws-cdk/aws-ecs'
import * as ssm from '@aws-cdk/aws-ssm'

export class KvltBotsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const vpc = new ec2.Vpc(this, 'KvltBotVpcs', {
      maxAzs: 3
    })

    const kvltBotsCluster = new ecs.Cluster(this, 'KvltBotCluster', {
      vpc: vpc
    })

    const discordKvltBotFargateTaskDefinition = new ecs.FargateTaskDefinition(
        this,
        'DiscordKvltBotTaskDef',
        {
          memoryLimitMiB: 1024,
          cpu: 512
        }
    )

    const discordKvltBotApiToken = ssm.StringParameter.valueForStringParameter(
      this,
      'DiscordKvltBotApiToken',
      1
    )
    const telegramKvltBotApiToken = ssm.StringParameter.valueForStringParameter(
      this,
      'TelegramKvltBotApiToken',
      1
    )

    discordKvltBotFargateTaskDefinition.addContainer(
      'DiscordKvltBot',
      {
        image: ecs.ContainerImage.fromRegistry(
          'jacobtheevans/kvlt-discord-bot:latest'
        ),
        memoryLimitMiB: 512,
        cpu: 256,
        environment: {
          DISCORD_TOKEN: discordKvltBotApiToken
        }
      }
    )
    discordKvltBotFargateTaskDefinition.addContainer(
      'TelegramKvltBot',
      {
        image: ecs.ContainerImage.fromRegistry(
          'jacobtheevans/kvlt-telegram-bot:latest'
        ),
        memoryLimitMiB: 512,
        cpu: 256,
        environment: {
          TELEGRAM_TOKEN: telegramKvltBotApiToken
        }
      }
    )

    new ecs.FargateService(this, 'Service', {
      cluster: kvltBotsCluster,
      taskDefinition: discordKvltBotFargateTaskDefinition,
      desiredCount: 1
    });
  }
}
