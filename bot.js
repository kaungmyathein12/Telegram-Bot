require("dotenv").config({ path: ".env" });

const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    `မင်္ဂလာပါ😊 @${msg.chat.username} သိချင်တာတခုခုမေးပါ`
  );
});

bot.onText(/နာမည်/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `@${msg.chat.username} 🤪`);
});

bot.onText(/မင်္ဂလာပါ/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `မင်္ဂလာပါ😊 @${msg.chat.username}`);
});

bot.onText(/Hello World/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Hello🤪 @${msg.chat.username}`);
});

bot.onText(/နေရောကောင်းရဲ့လား/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `နေလို့ကောင်းပါတယ်`);
});

bot.onText(/ရှင်သန်ရတဲ့အဓိပ္ပာယ်/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `မမဖြစ်လိမ့်မယ်😎`);
});
