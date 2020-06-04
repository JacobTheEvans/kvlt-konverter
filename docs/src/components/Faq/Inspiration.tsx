import React from 'react'
import styled from 'styled-components'
import SubHeader from '../common/SubHeader'
import Text from '../common/Text'
import ListLink from '../common/ListLink'

const Container = styled.div`
  margin-top: 100px;
`

export default function Inspiration () {
  return (
    <Container>
      <SubHeader
        text='Why did you make this?'
      />
      <Text>
        This bot was heavily inspired by stupid jokes with my buddy Felix and the hilarious guys over at Pagefire. This project also gave me an opportunity to demonstrate more complicated software tools in an easy project.
      </Text>
      <Text>
        Want to learn more? Checkout the links below
      </Text>
      <ListLink
        target='_blank'
        href='https://github.com/JacobTheEvans/kvlt-bot'
      >
        Source code of project
      </ListLink>
      <ListLink
        target='_blank'
        href='https://www.redhat.com/en/topics/devops/what-is-ci-cd'
      >
        Overview on what CI/CD pipeline is
      </ListLink>
    </Container>
  )
}
