import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  font-size: 6rem;
  margin: 60px 0px 0px 0px;
  font-family: 'Germania One', cursive;
  width: 100%;
  text-align: center;
  color: #424242;
  @media only screen and (max-width: 800px) {
    font-size: 4rem;
  }
`

const SubText = styled.p`
  padding: 7px 10px 7px 0px;
  font-family: 'Germania One', cursive;
  font-size: 20px;
  width: 850px;
  margin: 30px auto 40px auto;
  @media only screen and (max-width: 800px) {
    width: 95%;
  }
`

type HeaderContainerProps = {
  header: string
  subtext: string
}

export default function HeaderContainer (props: HeaderContainerProps) {
  const {
    header,
    subtext
  } = props
  return (
    <>
      <Header>
        {header}
      </Header>
      <SubText>
        {subtext}
      </SubText>
    </>
  )
}
