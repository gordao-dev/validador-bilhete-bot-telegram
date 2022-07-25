require('dotenv/config')
const env = require('./.env')
const telegraf = require('telegraf')



const bot = new telegraf(process.env.TOKEN)

bot.start(content => {
  const from = content.update.message.from

  console.log(from)

  // Response to the start of the conversation with the bot.


  content.reply(`Muito bem vindo, ${from.first_name}!`)
  content.reply('Selecione a opção desejada.\n\n[1] Validar Bilhete\n\n[2] Mandar comprovante\n\n[3] Suporte')

})

// Variable that stores what the user has typed. 

bot.on('text', (ctx) => {
  const message = ctx.message.text;

// Test to see the option selected by the user.  

  if (message === '1')
    return ctx.reply('Informe o número do bilhete que deseja validar.')
  else if (message === '2')
    return ctx.reply('Encaminhe o comprovante para que eu possa validar seu bilhete! ')
  else if (message === '3') 
    return ctx.reply('Um momemento que o "suporte" entrara em contato')
  else if (message > 3)
    return ctx.reply('Numero invalido')
  else if (message === 'tres' , 'quatro' , 'suporte' , '[1] Validar Bilhete' , 'um' , '[2] Mandar comprovante' , '[3] Suporte')
    return ctx.reply('informe um numero de 1 a 3 que corresponda ao seu pedido')
})

bot.startPolling()