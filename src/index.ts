import TelegramBot from "node-telegram-bot-api";
import messageHandler from './messageHandler';
import { getConfigSync } from "./configReader";

const token = getConfigSync().token;
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;

  const reply = await messageHandler(msg.text, msg.from?.id);
  bot.sendMessage(chatId, reply);
});