const { TelegramBot } = require('./TelegramBot')
import pino from 'pino'

function main () {
  const log = pino()
  const telegramBot = new TelegramBot()
  try {
    telegramBot.start()
  } catch (err) {
    log.warn(err)
    log.warn('Not able to start telegram bot')
    process.exit(1)
  }
}

main()
