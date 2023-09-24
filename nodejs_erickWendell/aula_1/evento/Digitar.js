const EventEmitter = require('events');

class MeuEmissor extends EventEmitter { };
const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';

/* 
 todo pegando evento de escrever:

const stdin = process.openStdin();

stdin.addListener('data', function (value) {
  console.log(`Você Digitou : ${value.toString().trim()}`)
})

*/
//Evento com Promise:

const stdin = process.openStdin();
function main() {
  return new Promise(function (resolve, reject) {
    stdin.addListener('data', function (value) {
      // console.log(`Você Digitou : ${value.toString().trim()}`)
      return resolve(value)
    })
  })
}

main()
  .then(function (resultado) {
    console.log('Digitou:', resultado.toString().trim())
  })