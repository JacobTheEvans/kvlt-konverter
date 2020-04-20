"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var KvltKonverter_1 = __importDefault(require("./KvltKonverter"));
function convertStringToKvlt(str, _a) {
    var _b = _a.convertGodToSatan, convertGodToSatan = _b === void 0 ? false : _b, _c = _a.convertUToV, convertUToV = _c === void 0 ? false : _c, _d = _a.convertCToK, convertCToK = _d === void 0 ? false : _d, _e = _a.convertOToÖ, convertOToÖ = _e === void 0 ? false : _e, _f = _a.convertGenresToTrveNorwegianBlackMetal, convertGenresToTrveNorwegianBlackMetal = _f === void 0 ? false : _f, _g = _a.genres, genres = _g === void 0 ? [] : _g;
    var result = str;
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
