require('./global')
console.log(MinhaApp.saudacao())


console.log(this === exports)
function logThis() {
    console.log('dentro de uma função')
    console.log(this === exports)

}

logThis()