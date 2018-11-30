const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '777947545:AAGZjIaHUpgcl5Za0YUt4aBbHL9uG7yCkag'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `${msg.from.first_name}, иди нахуй!!!`)

})
