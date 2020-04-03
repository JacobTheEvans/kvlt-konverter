function convertGodToSatan (str) {
  return str.replace(/god/ig, 'satan')
}

function convertUToV (str) {
  const lowerCase = str.replace(/u/g, 'v')
  const upperCase = lowerCase.replace(/U/g, 'V')
  return upperCase
}

function convertCToK (str) {
  const lowerCase = str.replace(/c/g, 'c')
  const upperCase = lowerCase.replace(/C/g, 'C')
  return upperCase
}

function convertOToÖ (str) {
  const lowerCase = str.replace(/o/g, 'ö')
  const upperCase = lowerCase.replace(/O/g, 'Ö')
  return upperCase
}

function convertGenresToTrveNorwegianBlackMetal (str, genres = []) {
  let result = str
  for (const genre of genres) {
    result = result.replace(
      RegExp(genre, 'ig'),
      'trve nörwegian black metal'
    )
  }
  return result
}

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
    result = convertGodToSatan(result)
  }
  if (convertGenresToTrveNorwegianBlackMetal) {
    result = convertGenresToTrveNorwegianBlackMetal(result, genres)
  }
  if (convertUToV) {
    result = convertUToV(result)
  }
  if (convertCToK) {
    result = convertCToK(result)
  }
  if (convertOToÖ) {
    result = convertOToÖ(result)
  }
  return result
}

module.exports = {
  convertGodToSatan,
  convertUToV,
  convertCToK,
  convertOToÖ,
  convertGenresToTrveNorwegianBlackMetal,
  convertStringToKvlt
}
