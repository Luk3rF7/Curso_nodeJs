const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')
const contadorC = require('./instanciaNovas')()
const contadorD = require('./instanciaNovas')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor,contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor,contadorD.valor)