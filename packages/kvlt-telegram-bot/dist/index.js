"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { TelegramBot } = require('./TelegramBot');
const pino_1 = __importDefault(require("pino"));
function main() {
    const log = pino_1.default();
    const telegramBot = new TelegramBot();
    try {
        telegramBot.start();
    }
    catch (err) {
        log.warn(err);
        log.warn('Not able to start telegram bot');
        process.exit(1);
    }
}
main();
