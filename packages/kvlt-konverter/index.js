const KvltKonverter = require('./KvltKonverter')
const kvltKonverter = new KvltKonverter()

function convertStringToKvlt (
  str,
  {
    convertGodToSatan = false,
    convertUToV = false,
    convertCToK = false,
    convertOToÖ = false,
    convertGenresToTrveNorwegianBlackMetal = false,
    genres = []
  }
) {
  let result = str
  if (convertGodToSatan) {
    result = kvltKonverter.convertGodToSatan(result)
  }
  if (convertGenresToTrveNorwegianBlackMetal) {
    result = kvltKonverter.convertGenresToTrveNorwegianBlackMetal(
      result,
      genres
    )
  }
  if (convertUToV) {
    result = kvltKonverter.convertUToV(result)
  }
  if (convertCToK) {
    result = kvltKonverter.convertCToK(result)
  }
  if (convertOToÖ) {
    result = kvltKonverter.convertOToÖ(result)
  }
  return result
}

module.exports = {
  convertStringToKvlt
}
