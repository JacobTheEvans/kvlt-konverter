"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KvltKonverter_1 = require("./KvltKonverter");
var ConvertStringToKvltOptionsKeys;
(function (ConvertStringToKvltOptionsKeys) {
    ConvertStringToKvltOptionsKeys["convertGodToSatan"] = "convertGodToSatan";
    ConvertStringToKvltOptionsKeys["convertUToV"] = "convertUToV";
    ConvertStringToKvltOptionsKeys["convertCToK"] = "convertCToK";
    ConvertStringToKvltOptionsKeys["convertOTo\u00D6"] = "convertOTo\u00D6";
    ConvertStringToKvltOptionsKeys["convertGenresToTrveNorwegianBlackMetal"] = "convertGenresToTrveNorwegianBlackMetal";
    ConvertStringToKvltOptionsKeys["genres"] = "genres";
})(ConvertStringToKvltOptionsKeys = exports.ConvertStringToKvltOptionsKeys || (exports.ConvertStringToKvltOptionsKeys = {}));
function convertStringToKvlt(str, { convertGodToSatan = false, convertUToV = false, convertCToK = false, convertOToÖ = false, convertGenresToTrveNorwegianBlackMetal = false, genres = [] } = {}) {
    let result = str;
    if (convertGodToSatan) {
        result = KvltKonverter_1.KvltKonverter.convertGodToSatan(result);
    }
    if (convertGenresToTrveNorwegianBlackMetal) {
        result = KvltKonverter_1.KvltKonverter.convertGenresToTrveNorwegianBlackMetal(result, genres);
    }
    if (convertUToV) {
        result = KvltKonverter_1.KvltKonverter.convertUToV(result);
    }
    if (convertCToK) {
        result = KvltKonverter_1.KvltKonverter.convertCToK(result);
    }
    if (convertOToÖ) {
        result = KvltKonverter_1.KvltKonverter.convertOToÖ(result);
    }
    return result;
}
exports.convertStringToKvlt = convertStringToKvlt;
