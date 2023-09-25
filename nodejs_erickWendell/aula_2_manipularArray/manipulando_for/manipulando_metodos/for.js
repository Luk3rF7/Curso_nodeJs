// exportando dados api
const service = require('../api/service');

//função main

async function main() {
  try {
    // crio instancia para guarda dados requisitado :
    const result = await service.obterPessoa('a');

    //crie variavel para receber :
    const names = []

    console.time('loop-for')
    //faço iteração com loop for
    for (let i = 0; i <= result.results.length - 1; i++) {

      // crio variavel para guarda todo loop
      const pessoa = result.results[i]

      //adiciono no array vazio do loop
      names.push(pessoa.name)
    }
    console.timeEnd('loop-for')
    console.log('personagem: ', names)
  } catch (error) {
    console.log('Deu ruim !', error)
  }
}
main()