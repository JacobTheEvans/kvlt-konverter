declare class KvltKonverter {
    static godRegexPattern: RegExp;
    static lowerCaseURegexPattern: RegExp;
    static upperCaseURegexPattern: RegExp;
    static lowerCaseCRegexPattern: RegExp;
    static upperCaseCRegexPattern: RegExp;
    static lowerCaseORegexPattern: RegExp;
    static upperCaseORegexPattern: RegExp;
    static convertGodToSatan(str: string): string;
    static convertUToV(str: string): string;
    static convertCToK(str: string): string;
    static convertOToÖ(str: string): string;
    static convertGenresToTrveNorwegianBlackMetal(str: string, genres?: string[]): string;
}
export default KvltKonverter;
