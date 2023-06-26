const moduloA = require('../../moduleA')
const saudacao =require('saudacao')
const c = require('./pastaC/index')

console.log(c.ola2)
console.log(moduloA.ola)
console.log(saudacao.ola)

const http = require('http')
http.createServer((req,res) =>{
    res.write("Hello, World!")
    res.write("Backend sendo excecutado")
    res.end()
}).listen(8080)