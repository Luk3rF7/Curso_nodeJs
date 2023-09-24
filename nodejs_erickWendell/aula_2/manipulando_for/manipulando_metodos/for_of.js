// exportando dados api
const service = require('../api/service');

//função main

async function main() {
  try {
    // crio instancia para guarda dados requisitado :
    const result = await service.obterPessoa('a');

    //crie variavel para receber :
    const names = []
    for (pessoa of result.results) {
      names.push(pessoa.name);
    }
    console.log('personagem: ', names)
  } catch (error) {
    console.log('Deu ruim !', error)
  }
}
main()