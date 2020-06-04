import React, { useState } from 'react'
import {
  ConvertStringToKvltOptions,
  ConvertStringToKvltOptionsKeys
} from 'kvlt-konverter'

type OptionsProviderProps = {
  children: React.ReactNode
}

type OptionsContextType = {
  options: ConvertStringToKvltOptions,
  setOption (key: ConvertStringToKvltOptionsKeys): void
}

const defaultState = {
  convertGodToSatan: true,
  convertUToV: true,
  convertCToK: true,
  convertOToÖ: true,
  convertGenresToTrveNorwegianBlackMetal: true,
  genres: ['country', 'rock', 'pop', 'hip hop']
}

const OptionsContext = React.createContext<OptionsContextType>({
  options: defaultState,
  setOption: (key: ConvertStringToKvltOptionsKeys) => {}
})
export default OptionsContext

export function OptionsProvider (props: OptionsProviderProps) {
  const { children } = props
  const [options, setOptions] =  useState(
    defaultState as ConvertStringToKvltOptions
  )

  function setOption (key: ConvertStringToKvltOptionsKeys) {
    return () => {
      setOptions(state => {
        const oldValue = state[key]
        if (typeof oldValue === 'boolean') {
          return {
            ...state,
            [key]: !oldValue
          }
        } else {
          return state
        }
      })
    }
  }

  return (
    <OptionsContext.Provider
      value={{
        options,
        setOption
      }}
    >
      {children}
    </OptionsContext.Provider>
  )
}
