"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const messageHandler_1 = __importDefault(require("./messageHandler"));
const configReader_1 = require("./configReader");
const token = (0, configReader_1.getConfigSync)().token;
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const reply = await (0, messageHandler_1.default)(msg.text, msg.from?.id);
    bot.sendMessage(chatId, reply);
});
