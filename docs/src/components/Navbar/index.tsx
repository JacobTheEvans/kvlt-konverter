import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Github from './Github'

const Bar = styled.div`
  width: 100%;
  background-color: #6d6d6d;
  padding: 15px 10px;
  display: flex;
  align-items: center;
`

const LinkWrapper = styled.div`
  & > a {
    color: white;
    font-size: 18px;
    font-family: 'Germania One', cursive;
    margin-right: 10px;
    transition: 0.3s;
    text-decoration: none;
  }
  & > a:first-of-type {
    margin-left: 5px;
  }
  & > a:hover {
    color: #1b1b1b;
  }
  @media only screen and (max-width: 800px) {
    & > a {
      margin-right: 20px;
      font-size: 20px;
    }
  }
`

export default function Navbar () {
  return (
    <Bar>
      <LinkWrapper>
        <Link to='/'>Home</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to='/bots'>Bots</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to='/faq'>FAQ</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to='/ci-cd'>CI/CD</Link>
      </LinkWrapper>
      <Github />
    </Bar>
  )
}
