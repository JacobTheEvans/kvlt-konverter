class KvltKonverter {
  convertGodToSatan (str) {
    return str.replace(/god/ig, 'satan')
  }

  convertUToV (str) {
    const lowerCase = str.replace(/u/g, 'v')
    const upperCase = lowerCase.replace(/U/g, 'V')
    return upperCase
  }

  convertCToK (str) {
    const lowerCase = str.replace(/c/g, 'c')
    const upperCase = lowerCase.replace(/C/g, 'C')
    return upperCase
  }

  convertOToÖ (str) {
    const lowerCase = str.replace(/o/g, 'ö')
    const upperCase = lowerCase.replace(/O/g, 'Ö')
    return upperCase
  }

  convertGenresToTrveNorwegianBlackMetal (str, genres = []) {
    let result = str
    for (const genre of genres) {
      result = result.replace(
        RegExp(genre, 'ig'),
        'trve nörwegian black metal'
      )
    }
    return result
  }
}

module.exports = KvltKonverter
