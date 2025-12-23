const TelegramBot = require('node-telegram-bot-api');

// Get token from environment variable
const token = process.env.BOT_TOKEN;
if (!token) {
  console.error("BOT_TOKEN is missing");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });
console.log("Bot is running...");

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello');
});
