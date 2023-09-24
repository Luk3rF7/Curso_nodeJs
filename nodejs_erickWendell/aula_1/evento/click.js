const EventEmitter = require('events');

class MeuEmissor extends EventEmitter { };
const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';

// Observador
meuEmissor.on(nomeEvento, function (click) {
  console.log('Um usuario clicou', click)
})

meuEmissor.emit(nomeEvento, 'na barra de rolagem');
meuEmissor.emit(nomeEvento, 'no Ok');

let count = 0;

setInterval(function () {
  meuEmissor.emit(nomeEvento, 'no Ok: ' + (count++))
}, 1000)