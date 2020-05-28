import { KvltKonverter } from './KvltKonverter'

export type ConvertStringToKvltOptions = {
  convertGodToSatan?: boolean
  convertUToV?: boolean
  convertCToK?: boolean
  convertOToÖ?: boolean
  convertGenresToTrveNorwegianBlackMetal?: boolean
  genres?: string[]
}

export function convertStringToKvlt (
  str: string,
  {
    convertGodToSatan = false,
    convertUToV = false,
    convertCToK = false,
    convertOToÖ = false,
    convertGenresToTrveNorwegianBlackMetal = false,
    genres = []
  }: ConvertStringToKvltOptions = {}
) {
  let result = str
  if (convertGodToSatan) {
    result = KvltKonverter.convertGodToSatan(result)
  }
  if (convertGenresToTrveNorwegianBlackMetal) {
    result = KvltKonverter.convertGenresToTrveNorwegianBlackMetal(
      result,
      genres
    )
  }
  if (convertUToV) {
    result = KvltKonverter.convertUToV(result)
  }
  if (convertCToK) {
    result = KvltKonverter.convertCToK(result)
  }
  if (convertOToÖ) {
    result = KvltKonverter.convertOToÖ(result)
  }
  return result
}
