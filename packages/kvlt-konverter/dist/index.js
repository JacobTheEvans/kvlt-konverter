"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const KvltKonverter_1 = __importDefault(require("./KvltKonverter"));
function convertStringToKvlt(str, { convertGodToSatan = false, convertUToV = false, convertCToK = false, convertOToÖ = false, convertGenresToTrveNorwegianBlackMetal = false, genres = [] } = {}) {
    let result = str;
    if (convertGodToSatan) {
        result = KvltKonverter_1.default.convertGodToSatan(result);
    }
    if (convertGenresToTrveNorwegianBlackMetal) {
        result = KvltKonverter_1.default.convertGenresToTrveNorwegianBlackMetal(result, genres);
    }
    if (convertUToV) {
        result = KvltKonverter_1.default.convertUToV(result);
    }
    if (convertCToK) {
        result = KvltKonverter_1.default.convertCToK(result);
    }
    if (convertOToÖ) {
        result = KvltKonverter_1.default.convertOToÖ(result);
    }
    return result;
}
exports.default = convertStringToKvlt;
