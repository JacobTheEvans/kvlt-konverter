import Telegraf from 'telegraf'
import pino from 'pino'
import config from 'config'
import { convertStringToKvlt } from 'kvlt-konverter'

export class TelegramBot {
  #log = pino()
  #username = 'kvlt_bot'
  #bot = new Telegraf(
    config.get('telegram.token'),
    {
      username: this.#username
    }
  )

  #options = {
    convertGodToSatan: config.get('features.convertGodToSatan') === 'true',
    convertUToV: config.get('features.convertUToV') === 'true',
    convertCToK: config.get('features.convertCToK') === 'true',
    convertOToÖ: config.get('features.convertOToÖ') === 'true',
    convertGenresToTrveNorwegianBlackMetal: config.get('features.convertGenresToTrveNorwegianBlackMetal') === 'true',
    genres: (config.get('genres') as string).split(', ')
  }

  private isBotMentioned(messageText: string) {
    return messageText.includes(this.#username)
  }

  private removeMention (message: string) {
    const userReplaceRegex = new RegExp(`\@${this.#username}`, 'g')
    return message.replace(userReplaceRegex, '')
  }

  async start () {
    this.#bot.start((ctx) => {
      ctx.reply('Kvlt translatiön böt started')
    })
    this.#bot.help(
      (ctx) => ctx.reply('See github https://github.com/JacobTheEvans/kvlt-bot')
    )
    this.#bot.on('message', (ctx) => {
      if (ctx && ctx.message && ctx.message.text) {
        this.#log.debug(`message received: ${ctx.message.text}`)
        if (this.isBotMentioned(ctx.message.text)) {
          const messageMinusMention = this.removeMention(ctx.message.text)
          const convertedMsg = convertStringToKvlt(
            messageMinusMention,
            this.#options
          )
          this.#log.debug(`sending outgoing message: ${convertedMsg}`)
          ctx.reply(convertedMsg)
        }
      }
    })

    try {
      this.#log.info('Kvlt telegram bot logging into telegram...')
      await this.#bot.launch()
      this.#log.info('Success, kvlt telegram bot has logged into telegram')
    } catch (err) {
      this.#log.warn(
        err,
        'Failure, kvlt telegram bot was not able to login into telegram'
      )
      process.exit(1)
    }
  }
}
