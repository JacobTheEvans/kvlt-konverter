const Discord = require('discord.js')
const config = require('config')
const { convertStringToKvlt } = require('kvlt-konverter')

function main () {
  const client = new Discord.Client()

  const options = {
    convertGodToSatan: config.get('features.convertGodToSatan') === 'true',
    convertUToV: config.get('features.convertUToV') === 'true',
    convertCToK: config.get('features.convertCToK') === 'true',
    convertOToÖ: config.get('features.convertOToÖ') === 'true',
    convertGenresToTrveNorwegianBlackMetal: config.get('features.convertGenresToTrveNorwegianBlackMetal') === 'true',
    genres: config.get('genres').split(', ')
  }

  client.on('ready', () => {
    console.log(`Bot logged in as ${client.user.tag}!`)
  })

  client.on('message', msg => {
    const convertedMsg = convertStringToKvlt(msg.content, options)
    if (convertedMsg !== msg.content) {
      msg.channel.send(`Kvlt translatiön: ${convertedMsg}`)
    }
  })

  client.login(config.get('discord.token'))
}

module.exports = main
