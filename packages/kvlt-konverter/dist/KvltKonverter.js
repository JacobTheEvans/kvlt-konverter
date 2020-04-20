"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KvltKonverter = /** @class */ (function () {
    function KvltKonverter() {
    }
    KvltKonverter.convertGodToSatan = function (str) {
        return str.replace(KvltKonverter.godRegexPattern, 'satan');
    };
    KvltKonverter.convertUToV = function (str) {
        var lowerCaseReplacedString = str.replace(KvltKonverter.lowerCaseURegexPattern, 'v');
        var upperCaseReplacedString = lowerCaseReplacedString.replace(KvltKonverter.upperCaseURegexPattern, 'V');
        return upperCaseReplacedString;
    };
    KvltKonverter.convertCToK = function (str) {
        var lowerCaseReplacedString = str.replace(KvltKonverter.upperCaseCRegexPattern, 'c');
        var upperCaseReplacedString = lowerCaseReplacedString.replace(KvltKonverter.upperCaseCRegexPattern, 'C');
        return upperCaseReplacedString;
    };
    KvltKonverter.convertOToÖ = function (str) {
        var lowerCaseReplacedString = str.replace(KvltKonverter.lowerCaseORegexPattern, 'ö');
        var upperCaseReplacedString = lowerCaseReplacedString.replace(/O/g, 'Ö');
        return upperCaseReplacedString;
    };
    KvltKonverter.convertGenresToTrveNorwegianBlackMetal = function (str, genres) {
        if (genres === void 0) { genres = []; }
        var result = str;
        for (var _i = 0, genres_1 = genres; _i < genres_1.length; _i++) {
            var genre = genres_1[_i];
            result = result.replace(RegExp(genre, 'ig'), 'trve nörwegian black metal');
        }
        return result;
    };
    KvltKonverter.godRegexPattern = /god/ig;
    KvltKonverter.lowerCaseURegexPattern = /u/g;
    KvltKonverter.upperCaseURegexPattern = /U/g;
    KvltKonverter.lowerCaseCRegexPattern = /c/g;
    KvltKonverter.upperCaseCRegexPattern = /C/g;
    KvltKonverter.lowerCaseORegexPattern = /o/g;
    KvltKonverter.upperCaseORegexPattern = /O/g;
    return KvltKonverter;
}());
exports.default = KvltKonverter;
