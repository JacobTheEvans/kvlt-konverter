import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  padding: 7px 5px;
  font-family: 'Germania One', cursive;
  font-size: 20px;
  width: 850px;
  margin: 10px auto;
  @media only screen and (max-width: 800px) {
    width: 95%;
    padding: 7px 3px;
  }
`

type TextContainerProps = {
  children: React.ReactNode
}

export default function TextContainer (props: TextContainerProps) {
  const { children } = props
  return (
    <Text>
      {children}
    </Text>
  )
}
