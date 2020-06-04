import React from 'react'
import SubHeader from '../common/SubHeader'
import Text from '../common/Text'
import ListLink from '../common/ListLink'

export default function WhatIsTrveKvlt () {
  return (
    <>
      <SubHeader
        text='What is Kvlt?'
      />
      <Text>
        If your confused to what Kvlt means your not the only one. It is basically a slag term meaning something that embodies underground Norwegian black metal culture but has been parodied so much that is has become a meme.
      </Text>
      <Text>
        Want to learn more? Checkout the links below
      </Text>
      <ListLink
        target='_blank'
        href='https://www.youtube.com/watch?v=QFvAf7rjtC8'
      >
        Pagefire on How to make Norwegian Black Metal
      </ListLink>
      <ListLink
        target='_blank'
        href='https://www.urbandictionary.com/define.php?term=kvlt'
      >
        The totally not offensive and accurate definition from Urban Dictionary
      </ListLink>
    </>
  )
}
