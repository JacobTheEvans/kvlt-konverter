import React from 'react'
import styled from 'styled-components'
import SubHeader from '../common/SubHeader'
import Text from '../common/Text'
import ListLink from '../common/ListLink'
import Image from '../common/Image'
import DiscordImage from './discord-example.png'

const Container = styled.div`
  width: 100%;
  margin: 100px 0px;
`

export default function Discord () {
  return (
    <Container>
      <SubHeader
        text='Discord'
      />
      <Text>
        The Kvlt Konverter Bot supports Discord. To add it to your Discord server simply click on the link below and select the Discord server you would like to add it to.
      </Text>
      <ListLink
        target='_blank'
        href='https://discord.com/oauth2/authorize?client_id=695618136745050137&scope=bot'
      >
        https://discord.com/oauth2/authorize?client_id=695618136745050137&scope=bot
      </ListLink>
      <Image
        src={DiscordImage}
        defaultWidth={850}
      />
    </Container>
  )
}
