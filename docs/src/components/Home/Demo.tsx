import React, { useState, ChangeEvent,  } from 'react'
import styled from 'styled-components'
import { convertStringToKvlt } from 'kvlt-konverter'
import OptionsContext from '../../OptionsContext'
import Options from './Options'

const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px auto;
  @media only screen and (max-width: 800px) {
    width: 100%;
    display: block;
  }
`

const InputTextArea = styled.textarea`
  width: 100%;
  height: 300px;
  overflow-y: auto;
  padding: 8px 9px;
  border: 2px solid #1b1b1b;
  border-width: 2px 0px 2px 2px;
  font-size: 19px;
  line-height: 17px;
  font-family: 'Ubuntu', sans-serif;
  @media only screen and (max-width: 800px) {
    display: block;
    border: 2px solid #1b1b1b;
    margin: 15px auto;
    width: 95%;
  }
`

const DisplayArea = styled.p`
  width: 100%;
  height: 300px;
  overflow-y: auto;
  padding: 8px 9px;
  border: 2px solid #1b1b1b;
  font-size: 19px;
  line-height: 17px;
  font-family: 'Ubuntu', sans-serif;
  width: 100%;
  @media only screen and (max-width: 800px) {
    margin: 15px auto;
    width: 95%;
  }
`

export default function Demo () {
  const [userInput, setUserInput] = useState(
    'This is awesome cult converter! Lets play some country music.'
  )
  const { options } = React.useContext(OptionsContext)


  function handleOnInput (e: ChangeEvent<HTMLTextAreaElement>): void {
    setUserInput(e.target.value)
  }

  const convertedUserInput = convertStringToKvlt(
    userInput,
    options
  )

  return (
    <>
      <Container>
        <InputTextArea
          value={userInput}
          onChange={handleOnInput}
        />
        <DisplayArea>
          {convertedUserInput}
        </DisplayArea>
      </Container>
      <Options />
    </>
  )
}
