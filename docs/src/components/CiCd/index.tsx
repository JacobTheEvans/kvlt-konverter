import React from 'react'
import Header from '../common/Header'
import Technologies from './Technologies'
import PipelineFlow from './PipelineFlow'

export default function CiCd () {
  return (
    <>
      <Header
        header='CI/CD'
        subtext='This project serves as a simple demo of a CI (continuous integration) / CD (Continuous delivery) pipeline. More details of the technologies used and actually internal process can be found below. If your interested in how this was programmed the source code can be found on Github.'
      />
      <Technologies />
      <PipelineFlow />
    </>
  )
}
