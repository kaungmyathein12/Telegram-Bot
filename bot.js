require("dotenv").config({ path: ".env" });

const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });
// Matches "/echo [whatever]"
bot.onText(/\/echo(.+)/, (msg, match) => {
  // The 'msg' is the received Message from Telegram
  // and 'match' is the result of executing the regexp
  // above on the text content of the message

  const chatId = msg.chat.id;

  // The captured "whatever"
  const resp = match[1];

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.onText(/မင်္ဂလာပါ/, (msg, match) => {
  console.log(msg);
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `မင်္ဂလာပါ😊 @${msg.chat.username}`);
});
