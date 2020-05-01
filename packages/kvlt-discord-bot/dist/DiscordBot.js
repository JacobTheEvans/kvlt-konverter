"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _log, _client, _options;
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const pino_1 = __importDefault(require("pino"));
const config_1 = __importDefault(require("config"));
const kvlt_konverter_1 = require("kvlt-konverter");
class DiscordBot {
    constructor() {
        _log.set(this, pino_1.default());
        _client.set(this, new discord_js_1.Client());
        _options.set(this, {
            convertGodToSatan: config_1.default.get('features.convertGodToSatan') === 'true',
            convertUToV: config_1.default.get('features.convertUToV') === 'true',
            convertCToK: config_1.default.get('features.convertCToK') === 'true',
            convertOToÖ: config_1.default.get('features.convertOToÖ') === 'true',
            convertGenresToTrveNorwegianBlackMetal: config_1.default.get('features.convertGenresToTrveNorwegianBlackMetal') === 'true',
            genres: config_1.default.get('genres').split(', ')
        });
    }
    isNotBotMessage(user) {
        if (__classPrivateFieldGet(this, _client) && __classPrivateFieldGet(this, _client).user) {
            return __classPrivateFieldGet(this, _client).user.username !== user.username;
        }
        return false;
    }
    isBotMentioned(users, roles) {
        for (const { username } of users.values()) {
            if (username.includes('kvlt-bot'))
                return true;
        }
        for (const { name } of roles.values()) {
            if (name.includes('kvlt-bot'))
                return true;
        }
        return false;
    }
    removeMention(message) {
        if (__classPrivateFieldGet(this, _client).user) {
            const userReplaceRegex = new RegExp(`\<\@.${__classPrivateFieldGet(this, _client).user.id}\>`, 'g');
            return message.replace(userReplaceRegex, '');
        }
        return message;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldGet(this, _client).on('ready', () => {
                __classPrivateFieldGet(this, _log).info('Kvlt discord bot running...');
                if (__classPrivateFieldGet(this, _client) && __classPrivateFieldGet(this, _client).user) {
                    __classPrivateFieldGet(this, _log).info(`Kvlt discord bot logged in as ${__classPrivateFieldGet(this, _client).user.tag}!`);
                }
            });
            __classPrivateFieldGet(this, _client).on('message', msg => {
                __classPrivateFieldGet(this, _log).debug(`message received: ${msg.content}`);
                if (this.isNotBotMessage(msg.author) &&
                    this.isBotMentioned(msg.mentions.users, msg.mentions.roles)) {
                    const messageMinusMention = this.removeMention(msg.content);
                    const convertedMsg = kvlt_konverter_1.convertStringToKvlt(messageMinusMention, __classPrivateFieldGet(this, _options));
                    __classPrivateFieldGet(this, _log).debug(`sending outgoing message: ${convertedMsg}`);
                    msg.channel.send(convertedMsg);
                }
            });
            try {
                __classPrivateFieldGet(this, _log).info('Kvlt discord bot logging into discord...');
                yield __classPrivateFieldGet(this, _client).login(config_1.default.get('discord.token'));
                __classPrivateFieldGet(this, _log).info('Success, kvlt discord bot has logged into discord');
            }
            catch (err) {
                __classPrivateFieldGet(this, _log).warn(err, 'Failure, kvlt discord bot was not able to login into discord');
                process.exit(1);
            }
        });
    }
}
exports.DiscordBot = DiscordBot;
_log = new WeakMap(), _client = new WeakMap(), _options = new WeakMap();
