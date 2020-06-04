import React from 'react'
import styled from 'styled-components'

const SubHeader = styled.h2`
  font-size: 3rem;
  font-family: 'Germania One', cursive;
  margin: 35px 0px;
  width: 100%;
  text-align: center;
  color: #424242;
`

type SubHeaderContainerProps = {
  text: string
}

export default function SubHeaderContainer (props: SubHeaderContainerProps) {
  const { text } = props
  return (
    <SubHeader>
      {text}
    </SubHeader>
  )
}
