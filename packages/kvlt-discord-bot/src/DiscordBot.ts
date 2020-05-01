import { Client, Collection, User, Role } from 'discord.js'
import pino from 'pino'
import config from 'config'
import { convertStringToKvlt } from 'kvlt-konverter'

export class DiscordBot {
  #log = pino()
  #client = new Client()

  #options = {
    convertGodToSatan: config.get('features.convertGodToSatan') === 'true',
    convertUToV: config.get('features.convertUToV') === 'true',
    convertCToK: config.get('features.convertCToK') === 'true',
    convertOToÖ: config.get('features.convertOToÖ') === 'true',
    convertGenresToTrveNorwegianBlackMetal: config.get('features.convertGenresToTrveNorwegianBlackMetal') === 'true',
    genres: (config.get('genres') as string).split(', ')
  }

  private isNotBotMessage (user: User) {
    if (this.#client && this.#client.user) {
      return this.#client.user.username !== user.username
    }
    return false
  }

  private isBotMentioned (
    users: Collection<string, User>,
    roles: Collection<string, Role>
  ) {
    for (const { username } of users.values()) {
      if (username.includes('kvlt-bot')) return true
    }
    for (const { name } of roles.values()) {
      if (name.includes('kvlt-bot')) return true
    }
    return false
  }

  private removeMention (message: string) {
    if (this.#client.user) {
      const userReplaceRegex = new RegExp(`\<\@.${this.#client.user.id}\>`, 'g')
      return message.replace(userReplaceRegex, '')
    }
    return message
  }

  async start () {
    this.#client.on('ready', () => {
      this.#log.info('Kvlt discord bot running...')
      if (this.#client && this.#client.user) {
        this.#log.info(`Kvlt discord bot logged in as ${this.#client.user.tag}!`)
      }
    })
    this.#client.on('message', msg => {
      this.#log.debug(`message received: ${msg.content}`)
      if (
        this.isNotBotMessage(msg.author) &&
        this.isBotMentioned(msg.mentions.users, msg.mentions.roles)
      ) {
        const messageMinusMention = this.removeMention(msg.content)
        const convertedMsg = convertStringToKvlt(
          messageMinusMention,
          this.#options
        )
        this.#log.debug(`sending outgoing message: ${convertedMsg}`)
        msg.channel.send(convertedMsg)
      }
    })

    try {
      this.#log.info('Kvlt discord bot logging into discord...')
      await this.#client.login(config.get('discord.token'))
      this.#log.info('Success, kvlt discord bot has logged into discord')
    } catch (err) {
      this.#log.warn(
        err,
        'Failure, kvlt discord bot was not able to login into discord'
      )
      process.exit(1)
    }
  }
}
