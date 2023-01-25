require("dotenv").config({ path: ".env" });

const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendSticker(
    chatId,
    "CAACAgUAAxkBAANxY9D4yiDqgu6DrkIaZ82Y_QbwgxYAAisCAAKeUpFVyPSlVJutU5ItBA"
  );
  bot.sendMessage(
    chatId,
    `မင်္ဂလာပါ😊 @${msg.chat.username} သိချင်တာတခုခုမေးပါ`
  );
});

bot.onText(/ဘာမှမသိချင်ဘူး/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendSticker(
    chatId,
    "CAACAgUAAxkBAAN4Y9D55lqcYdNvz8286boK1jRXdkEAAmECAAIF2olVJfQLyeB8DxstBA"
  );
  bot.sendMessage(chatId, `ဘာမှမသိချင်ရင်ဘာလို့လာပြောနေသေးလဲ😑`);
});
bot.onText(/ဘာမှမသိချင်ပါ/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendSticker(
    chatId,
    "CAACAgUAAxkBAAN4Y9D55lqcYdNvz8286boK1jRXdkEAAmECAAIF2olVJfQLyeB8DxstBA"
  );
  bot.sendMessage(chatId, `ဘာမှမသိချင်ရင်ဘာလို့လာပြောနေသေးလဲ😑`);
});

bot.onText(/ချစ်လား/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `မချစ်ပါ 😐`);
});

bot.onText(/နာမည်/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `@${msg.chat.username} 🤪`);
});

bot.onText(/မင်္ဂလာပါ/, async (msg) => {
  const chatId = msg.chat.id;
  const update = await bot.getUpdates();
  console.log(update[0].message);
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
