const url ='http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//filtrar pais
const chineses = f => f.pais == 'China'
//filtrar genero
const mulheres = f => f.genero == "F"
//filtar salario
const menorSalario = (func,funcAtual) =>{
    return func.salario > funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    //função que retornara 
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.table(func)

})