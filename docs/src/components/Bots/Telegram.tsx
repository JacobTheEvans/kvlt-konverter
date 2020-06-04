import React from 'react'
import styled from 'styled-components'
import SubHeader from '../common/SubHeader'
import Text from '../common/Text'
import Image from '../common/Image'
import TelegramImage from './telegram-example.png'

const Container = styled.div`
  width: 100%;
  margin: 100px 0px;
`

export default function Telegram () {
  return (
    <Container>
      <SubHeader
        text='Telegram'
      />
      <Text>
        The Kvlt Konverter Bot supports Telegram. To add it to your Telegram group simply go to the group and add kvlt_bot.
      </Text>
      <Image
        src={TelegramImage}
        defaultWidth={300}
      />
    </Container>
  )
}
