import React from 'react'
import Header from '../common/Header'
import Demo from './Demo'

export default function Home () {
  return (
    <>
      <Header
        header='Kvlt Konverter'
        subtext={`A Trve Kvlt Konverter that turns 'normal' 'boring' text into the köölest blackest metalest text!`}
      />
      <Demo />
    </>
  )
}
