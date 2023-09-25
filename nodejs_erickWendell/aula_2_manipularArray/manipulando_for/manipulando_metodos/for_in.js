// exportando dados api
const service = require('../api/service');

//função main

async function main() {
  try {
    // crio instancia para guarda dados requisitado :
    const result = await service.obterPessoa('a');

    //crie variavel para receber :
    const names = []
    // utilizando for in 
    // ele vai adicionar incrementador 
    for (let i in result.results) {
      const pessoa = result.results[i];
      names.push(pessoa.name)
    }

    console.log('Nome Personagem :', names)
  } catch (error) {
    console.log('Deu ruim !', error)
  }
}
main()