import React from 'react'
import styled from 'styled-components'

const ListLink = styled.a`
  padding: 7px 0px;
  font-family: 'Germania One', cursive;
  font-size: 20px;
  width: 850px;
  margin: 10px auto;
  display: block;
  text-decoration: none;
  color: #6d6d6d;
  &:hover {
    color: #1b1b1b;
  }
  @media only screen and (max-width: 800px) {
    width: 95%;
  }
`

type ListLinkContainerProps = {
  children: React.ReactNode
  href: string
  target: string
}

export default function ListLinkContainer (props: ListLinkContainerProps) {
  const {
    children,
    href,
    target
  } = props
  return (
    <ListLink
      href={href}
      target={target}
    >
      {children}
    </ListLink>
  )
}
