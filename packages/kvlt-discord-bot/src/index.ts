import { DiscordBot } from './DiscordBot'
import pino from 'pino'

function main () {
  const log = pino()
  const discordBot = new DiscordBot()
  try {
    discordBot.start()
  } catch (err) {
    log.warn(err)
    log.warn('Not able to start discord bot')
    process.exit(1)
  }
}

main()
