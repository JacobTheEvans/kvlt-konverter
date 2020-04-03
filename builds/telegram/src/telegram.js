const Telegraf = require('telegraf')
const config = require('config')
const { convertStringToKvlt } = require('./kvlt')

async function main () {
  const bot = new Telegraf(
    config.get('telegram.token'),
    { username: 'kkvlt_bot' }
  )
  const botInfo = await bot.telegram.getMe()
  bot.options.username = botInfo.username

  const options = {
    convertGodToSatan: config.get('features.convertGodToSatan') === 'true',
    convertUToV: config.get('features.convertUToV') === 'true',
    convertCToK: config.get('features.convertCToK') === 'true',
    convertOToÖ: config.get('features.convertOToÖ') === 'true',
    convertGenresToTrveNorwegianBlackMetal: config.get('features.convertGenresToTrveNorwegianBlackMetal') === 'true',
    genres: config.get('genres').split(', ')
  }

  bot.start((ctx) => ctx.reply('Kvlt translatiön böt started'))
  bot.help(
    (ctx) => ctx.reply('See github https://github.com/JacobTheEvans/kvlt-bot')
  )
  bot.on('message', (ctx) => {
    if (ctx.update.message.text) {
      const convertedMsg = convertStringToKvlt(ctx.update.message.text, options)
      if (convertedMsg !== ctx.update.message.text) {
        ctx.reply(`Kvlt translatiön: ${convertedMsg}`)
      }
    }
  })
  bot.launch()
}

module.exports = main
