"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KvltKonverter {
    static convertGodToSatan(str) {
        return str.replace(KvltKonverter.godRegexPattern, 'satan');
    }
    static convertUToV(str) {
        const lowerCaseReplacedString = str.replace(KvltKonverter.lowerCaseURegexPattern, 'v');
        const upperCaseReplacedString = lowerCaseReplacedString.replace(KvltKonverter.upperCaseURegexPattern, 'V');
        return upperCaseReplacedString;
    }
    static convertCToK(str) {
        const lowerCaseReplacedString = str.replace(KvltKonverter.lowerCaseCRegexPattern, 'k');
        const upperCaseReplacedString = lowerCaseReplacedString.replace(KvltKonverter.upperCaseCRegexPattern, 'K');
        return upperCaseReplacedString;
    }
    static convertOToÖ(str) {
        const lowerCaseReplacedString = str.replace(KvltKonverter.lowerCaseORegexPattern, 'ö');
        const upperCaseReplacedString = lowerCaseReplacedString.replace(KvltKonverter.upperCaseORegexPattern, 'Ö');
        return upperCaseReplacedString;
    }
    static convertGenresToTrveNorwegianBlackMetal(str, genres = []) {
        let result = str;
        for (const genre of genres) {
            result = result.replace(RegExp(genre, 'ig'), 'trve nörwegian black metal');
        }
        return result;
    }
}
KvltKonverter.godRegexPattern = /god/ig;
KvltKonverter.lowerCaseURegexPattern = /u/g;
KvltKonverter.upperCaseURegexPattern = /U/g;
KvltKonverter.lowerCaseCRegexPattern = /c/g;
KvltKonverter.upperCaseCRegexPattern = /C/g;
KvltKonverter.lowerCaseORegexPattern = /o/g;
KvltKonverter.upperCaseORegexPattern = /O/g;
exports.default = KvltKonverter;
