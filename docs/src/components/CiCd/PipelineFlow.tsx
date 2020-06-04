import React from 'react'
import styled from 'styled-components'
import SubHeader from '../common/SubHeader'
import Text from '../common/Text'
import Image from '../common/Image'
import KvltCiCdImage from './kvlt-ci-cd.png'

const Container = styled.div`
  margin-top: 100px;
`

export default function PipelineFlow () {
  return (
    <Container>
      <SubHeader
        text='Pipeline Flow'
      />
      <Text>
        Below you will find a sequence diagram explaining the full flow of the CI/CD pipeline for the Kvlt Konverter project.
      </Text>
      <Image
        src={KvltCiCdImage}
        defaultWidth={850}
      />
    </Container>
  )
}
