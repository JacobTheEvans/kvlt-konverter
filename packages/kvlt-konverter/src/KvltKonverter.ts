class KvltKonverter {
  static godRegexPattern= /god/ig
  static lowerCaseURegexPattern = /u/g
  static upperCaseURegexPattern = /U/g
  static lowerCaseCRegexPattern = /c/g
  static upperCaseCRegexPattern = /C/g
  static lowerCaseORegexPattern = /o/g
  static upperCaseORegexPattern = /O/g

  static convertGodToSatan (str: string) {
    return str.replace(
      KvltKonverter.godRegexPattern,
      'satan'
    )
  }

  static convertUToV (str: string) {
    const lowerCaseReplacedString = str.replace(
      KvltKonverter.lowerCaseURegexPattern,
      'v'
    )
    const upperCaseReplacedString = lowerCaseReplacedString.replace(
      KvltKonverter.upperCaseURegexPattern,
      'V'
    )
    return upperCaseReplacedString
  }

  static convertCToK (str: string) {
    const lowerCaseReplacedString = str.replace(
      KvltKonverter.lowerCaseCRegexPattern,
      'k'
    )
    const upperCaseReplacedString = lowerCaseReplacedString.replace(
      KvltKonverter.upperCaseCRegexPattern,
      'K'
    )
    return upperCaseReplacedString
  }

  static convertOToÖ (str: string) {
    const lowerCaseReplacedString = str.replace(
      KvltKonverter.lowerCaseORegexPattern,
      'ö'
    )
    const upperCaseReplacedString = lowerCaseReplacedString.replace(
      KvltKonverter.upperCaseORegexPattern,
      'Ö'
    )
    return upperCaseReplacedString
  }

  static convertGenresToTrveNorwegianBlackMetal (
    str: string,
    genres: string[] = []
  ) {
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

export default KvltKonverter
