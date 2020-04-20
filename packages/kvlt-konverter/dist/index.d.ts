declare type ConvertStringToKvltStringOptions = {
    convertGodToSatan: boolean;
    convertUToV: boolean;
    convertCToK: boolean;
    convertOToÖ: boolean;
    convertGenresToTrveNorwegianBlackMetal: boolean;
    genres: string[];
};
declare function convertStringToKvlt(str: string, { convertGodToSatan, convertUToV, convertCToK, convertOToÖ, convertGenresToTrveNorwegianBlackMetal, genres }: ConvertStringToKvltStringOptions): string;
export default convertStringToKvlt;
