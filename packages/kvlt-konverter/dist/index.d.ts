export declare type ConvertStringToKvltOptions = {
    convertGodToSatan?: boolean;
    convertUToV?: boolean;
    convertCToK?: boolean;
    convertOToÖ?: boolean;
    convertGenresToTrveNorwegianBlackMetal?: boolean;
    genres?: string[];
};
export declare enum ConvertStringToKvltOptionsKeys {
    convertGodToSatan = "convertGodToSatan",
    convertUToV = "convertUToV",
    convertCToK = "convertCToK",
    convertOToÖ = "convertOTo\u00D6",
    convertGenresToTrveNorwegianBlackMetal = "convertGenresToTrveNorwegianBlackMetal",
    genres = "genres"
}
export declare function convertStringToKvlt(str: string, { convertGodToSatan, convertUToV, convertCToK, convertOToÖ, convertGenresToTrveNorwegianBlackMetal, genres }?: ConvertStringToKvltOptions): string;
