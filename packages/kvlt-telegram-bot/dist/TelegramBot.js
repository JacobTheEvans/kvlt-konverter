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
var _log, _username, _bot, _options;
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = __importDefault(require("telegraf"));
const pino_1 = __importDefault(require("pino"));
const config_1 = __importDefault(require("config"));
const kvlt_konverter_1 = require("kvlt-konverter");
class TelegramBot {
    constructor() {
        _log.set(this, pino_1.default());
        _username.set(this, 'kvlt_bot');
        _bot.set(this, new telegraf_1.default(config_1.default.get('telegram.token'), {
            username: __classPrivateFieldGet(this, _username)
        }));
        _options.set(this, {
            convertGodToSatan: config_1.default.get('features.convertGodToSatan') === 'true',
            convertUToV: config_1.default.get('features.convertUToV') === 'true',
            convertCToK: config_1.default.get('features.convertCToK') === 'true',
            convertOToÖ: config_1.default.get('features.convertOToÖ') === 'true',
            convertGenresToTrveNorwegianBlackMetal: config_1.default.get('features.convertGenresToTrveNorwegianBlackMetal') === 'true',
            genres: config_1.default.get('genres').split(', ')
        });
    }
    isNotBotMessage(username) {
        return __classPrivateFieldGet(this, _username) !== username;
    }
    isBotMentioned(messageText) {
        return messageText.includes(__classPrivateFieldGet(this, _username));
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldGet(this, _bot).start((ctx) => {
                ctx.reply('Kvlt translatiön böt started');
            });
            __classPrivateFieldGet(this, _bot).help((ctx) => ctx.reply('See github https://github.com/JacobTheEvans/kvlt-bot'));
            __classPrivateFieldGet(this, _bot).on('message', (ctx) => {
                if (ctx && ctx.message && ctx.message.text) {
                    __classPrivateFieldGet(this, _log).info(`message received: ${ctx.message.text}`);
                    console.log(ctx.update.from);
                    if (this.isNotBotMessage(ctx.me) &&
                        this.isBotMentioned(ctx.message.text)) {
                        const convertedMsg = kvlt_konverter_1.convertStringToKvlt(ctx.message.text, __classPrivateFieldGet(this, _options));
                        __classPrivateFieldGet(this, _log).debug(`sending outgoing message: ${convertedMsg}`);
                        ctx.reply(convertedMsg);
                    }
                }
            });
            try {
                __classPrivateFieldGet(this, _log).info('Kvlt telegram bot logging into telegram...');
                yield __classPrivateFieldGet(this, _bot).launch();
                __classPrivateFieldGet(this, _log).info('Success, kvlt telegram bot has logged into telegram');
            }
            catch (err) {
                __classPrivateFieldGet(this, _log).warn(err, 'Failure, kvlt telegram bot was not able to login into telegram');
                process.exit(1);
            }
        });
    }
}
exports.TelegramBot = TelegramBot;
_log = new WeakMap(), _username = new WeakMap(), _bot = new WeakMap(), _options = new WeakMap();
