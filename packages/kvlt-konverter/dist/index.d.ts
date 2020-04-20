declare type ConvertStringToKvltOptions = {
    convertGodToSatan?: boolean;
    convertUToV?: boolean;
    convertCToK?: boolean;
    convertOToÖ?: boolean;
    convertGenresToTrveNorwegianBlackMetal?: boolean;
    genres?: string[];
};
declare function convertStringToKvlt(str: string, { convertGodToSatan, convertUToV, convertCToK, convertOToÖ, convertGenresToTrveNorwegianBlackMetal, genres }?: ConvertStringToKvltOptions): string;
export default convertStringToKvlt;
