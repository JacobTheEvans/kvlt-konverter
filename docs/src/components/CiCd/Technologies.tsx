import React from 'react'
import SubHeader from '../common/SubHeader'
import ListLink from '../common/ListLink'

export default function Technologies () {
  return (
    <>
      <SubHeader
        text='Technologies'
      />
      <ListLink
        target='_blank'
        href='https://travis-ci.org/'
      >
        Travis CI for CI pipeline software
      </ListLink>
      <ListLink
        target='_blank'
        href='https://mochajs.org/'
      >
        Mocha for testing Kvlt Konverter npm package
      </ListLink>
      <ListLink
        target='_blank'
        href='https://www.npmjs.com/'
      >
        Npm for releasing Kvlt Konverter package
      </ListLink>
      <ListLink
        target='_blank'
        href='https://github.com/aws/aws-cdk'
      >
        AWS CDK for creating and managing infrastructure for CD
      </ListLink>
    </>
  )
}
