import React from 'react'
import Discord from './Discord'
import Telegram from './Telegram'
import Header from '../common/Header'

export default function Bots () {
  return (
    <>
      <Header
        header='Kvlt Konverter Bots'
        subtext={`Trve Kvlt bots that turn 'normal' 'boring' text into the köölest blackest metalest text! These botsw will translate your messages into Trve Kvlt text. Simply @ the bot in your chat with your message and it will reply with the translated message.`}
      />
      <Discord />
      <Telegram />
    </>
  )
}
