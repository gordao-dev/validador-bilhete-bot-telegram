require('dotenv/config')
// const env = require('./.env')
const telegraf = require('telegraf')

// inicio bot

const bot = new telegraf(process.env.TOKEN)

bot.start(content => {
    const from = content.update.message.from

    console.log(from)

    content.reply(`Muito bem vindo, ${from.first_name}!`)

})

bot.on('text', (content, next) => {
    content.reply('Selecione a opção desejada.\n\n[1] Validar Bilhete\n\n[2] Mandar comprovante\n\n[3] Suporte')
    next()
})

bot.startPolling()