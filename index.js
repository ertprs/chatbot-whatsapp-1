const Clientes = require('./models/Clientes');
const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client));

function start(client) {

  client.onMessage((message) => {
    if (/(Oi|Ola|Ei|ei|vitor)/.test(message.body)) {
      Clientes.findOne({ phone: message.from }).then((status) => {
        if(!status) {
          Clientes.create({phone: message.from}).then( (resolve) => {
            console.log('cadastrado');
          } )
        }
      })
      client
        .sendText(message.from, `Olá ${message.sender.name}! sou um assistente virtual já te respondo.`)
        .then((result) => {
          console.log(message); //retorna um objeto de successo
        })
        .catch((erro) => {
          console.error('Erro ao enviar mensagem: ', erro); //return um objeto de erro
        });
    }
  });
}