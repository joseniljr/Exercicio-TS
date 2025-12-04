import { Stack } from "../../Stack";
import leia = require('readline-sync');

const listaLivros: Stack<string> = new Stack<string>();

let opcao: number;
let nomeLivro: string;

do {
  console.log('\n************ MENU **************');
  console.log('  1 - Adicionar livro na pilha');
  console.log('  2 - Listar todos os livros');
  console.log('  3 - Retirar um livro da pilha');
  console.log('  0 - Sair');
  console.log('********************************');

  opcao = leia.questionInt("\nDigite a opcao desejada: ");

  switch (opcao) {

    case 1:
      
      nomeLivro = leia.question("Digite o nome do livro: ");
      listaLivros.push(nomeLivro);

      console.log('Pilha:')
      listaLivros.printStack();        
    //   console.log(`${nomeLivro}`);
      console.log(`Livro adicionado!`);


      break;

    case 2:
      if (listaLivros.isEmpty()) {
        console.log("\nA Pilha está vazia!");
      } else {
      console.log("\nLista de livros na pilha:");
        listaLivros.printStack();
      }
        break
    
      
    case 3:
      
      if (listaLivros.isEmpty()) {
        console.log("\nA pilha esta vazia!");
      } else {
        listaLivros.pop();
        console.log("\nPilha: \n");
        listaLivros.printStack();

        console.log("\nUm Livro foi retirado da pilha!");
        
      }
      break;

    case 0:
      console.log("Programa encerrado!");
      break;

    default:
      console.log("Opcao invalida! Tente novamente.");
  }

} while (opcao !== 0);

