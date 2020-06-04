import React from 'react'
import styled from 'styled-components'

interface ImageProps {
  readonly defaultWidth: number
}

const Image = styled.img<ImageProps>`
  width: ${({ defaultWidth }) => `${defaultWidth}px`};
  margin: 40px auto;
  display: block;
  @media only screen and (max-width: 800px) {
    width: 95%;
  }
`

type ImageContainerProps = {
  src: string
  defaultWidth: number
}

export default function ImageContainer (props: ImageContainerProps) {
  const {
    src,
    defaultWidth
  } = props
  return (
    <Image
      src={src}
      defaultWidth={defaultWidth}
    />
  )
}
