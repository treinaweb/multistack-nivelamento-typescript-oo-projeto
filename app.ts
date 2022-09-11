import { DiaristaRepository } from "./src/diarista/diarista.repository.js";
import prompt from 'prompt-sync';
import { Diarista } from "./src/diarista/diarista.js";

let teclado = prompt();
let option;
let repository = new DiaristaRepository();
let id = '';

do {
    console.log('\n1 - Listar diaristas');
    console.log('2 - Exibir diarista');
    console.log('3 - Cadastrar diarista');
    console.log('4 - Excluir diarista');
    console.log('q - Sair\n');
    option = teclado('Escolha uma opção acima:');
    switch (option) {
        case '1':
            let diaristas = repository.listar();
            diaristas.forEach(diarista => {
                console.log(`ID: ${diarista.id} - Nome: ${diarista.nome}`)
            });
            break;
        case '2':
            id = teclado('Digite o ID do(a) diarista que deseja exibir: ');
            console.log(repository.exibir(+id));
            break;
        case '3':
            let nome = teclado('Digite o nome do(a) diarista: ');
            let telefone = teclado('Digite o telefine do(a) diarista: ');
            let endereco = teclado('Digite o endereço do(a) diarista: ');
            let diarista = new Diarista(nome, telefone, endereco);
            repository.cadastrar(diarista);
            break
        case '4':
            id = teclado('Digite o ID do(a) diarista que deseja excluir: ');
            repository.excluir(+id);
        default:
            console.log('Entrada Inválida');
            break;
    }
} while (option != 'q');