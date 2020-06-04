import React, { useContext } from 'react'
import styled from 'styled-components'
import { ConvertStringToKvltOptionsKeys } from 'kvlt-konverter'
import Checkbox from './Checkbox'
import OptionsContext from '../../OptionsContext'

const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    display: block;
    border: 2px solid #1b1b1b;
    margin: 15px auto;
    width: 95%;
  }
`

export default function Options () {
  const { options, setOption } = useContext(OptionsContext)
  if (
    (typeof setOption === 'undefined') ||
    (typeof options === 'undefined')
  ) return <p>Loading</p>
  return (
    <OptionsContainer>
      <Checkbox
        label='god to satan'
        onClick={setOption(ConvertStringToKvltOptionsKeys.convertGodToSatan)}
        checked={options[ConvertStringToKvltOptionsKeys.convertGodToSatan] as boolean}
      />
      <Checkbox
        label='u to v'
        onClick={setOption(ConvertStringToKvltOptionsKeys.convertUToV)}
        checked={options[ConvertStringToKvltOptionsKeys.convertUToV] as boolean}
      />
      <Checkbox
        label='c to k'
        onClick={setOption(ConvertStringToKvltOptionsKeys.convertCToK)}
        checked={options[ConvertStringToKvltOptionsKeys.convertCToK] as boolean}
      />
      <Checkbox
        label='o to ö'
        onClick={setOption(ConvertStringToKvltOptionsKeys.convertOToÖ)}
        checked={options[ConvertStringToKvltOptionsKeys.convertOToÖ] as boolean}
      />
      <Checkbox
        label='genres to black metal'
        onClick={setOption(ConvertStringToKvltOptionsKeys.convertGenresToTrveNorwegianBlackMetal)}
        checked={options[ConvertStringToKvltOptionsKeys.convertGenresToTrveNorwegianBlackMetal] as boolean}
      />
    </OptionsContainer>
  )
}
