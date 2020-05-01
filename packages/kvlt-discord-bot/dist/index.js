"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DiscordBot_1 = require("./DiscordBot");
const pino_1 = __importDefault(require("pino"));
function main() {
    const log = pino_1.default();
    const discordBot = new DiscordBot_1.DiscordBot();
    try {
        discordBot.start();
    }
    catch (err) {
        log.warn(err);
        log.warn('Not able to start discord bot');
        process.exit(1);
    }
}
main();
