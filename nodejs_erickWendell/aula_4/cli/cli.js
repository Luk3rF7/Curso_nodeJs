// versio nova sintax
const { Command } = require("commander");
const Database = require("./api/database");
const Heroi = require("./heroi");

async function main() {
  // line commandos
  const program = new Command();

  program
    .version("v1")
    .option("-n, --nome [value]", "Nome do Heroi")
    .option("-p, --poder [value]", "Poder do Heroi")
    .option("-i, --id [value]", "Id do Heroi")
    //Crud
    .option("-c, --cadastrar", "Cadastrar um Heroi")
    .option("-r, --remover", "Remove um Heroi")
    .option("-a, --atualizar [value]", "Atualiza um Heroi")
    .option("-l, --listar", "Listar Herois")

  program.parse(process.argv);

  // configura opç para try{}catch
  const options = program.opts();
  const heroi = new Heroi(options);

  try {

    //cadastrar - C
    if (options.cadastrar) {
      delete heroi.id
      const resultado = await Database.cadastrar(heroi);

      if (!resultado) {
        console.error("Heroi não foi cadastrado!");
        return;
      }
      console.log("Heroi cadastrado com sucesso");
    }

    //listar - R
    if (options.listar) {
      const resultado = await Database.listar();
      console.log(resultado);
      return;
    }

    //remover - D
    if (options.remover) {
      const resultado = Database.remover(heroi.id)

      if (!resultado) {
        console.error("Não foi possível remover o Heroi");
        return;
      }
      console.log("Heroi removido com sucesso");
    }

    //atualizar - U
    if (options.atualizar) {
      const idParaAtualizar = parseInt(options.atualizar);
      delete heroi.id;
      const dado = JSON.stringify(heroi);
      const heroiAtualizar = JSON.parse(dado);
      const resultado = await Database.atualizar(idParaAtualizar, heroiAtualizar)
      if (!resultado) {
        console.error("Não foi possível atualizar o Heroi");
        return;
      }
      console.log("Heroi atualizado com sucesso");
    }

  } catch (error) {
    console.error("deu rum", error);
  }
}

main();