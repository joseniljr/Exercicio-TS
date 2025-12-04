import { Queue } from '../../Queue';
import leia = require('readline-sync');

const listaNomes: Queue<string> = new Queue<string>();

let opcao: number;
let nomeCliente: string;

do {
  console.log('\n************ MENU **************');
  console.log('  1 - Adicionar na fila');
  console.log('  2 - Mostrar a fila');
  console.log('  3 - Chamar (retirar) da fila');
  console.log('  0 - Sair');
  console.log('********************************');

  opcao = leia.questionInt("\nDigite a opcao desejada: ");

  switch (opcao) {

    case 1:
      
      nomeCliente = leia.question("Digite o nome do cliente: ");
      listaNomes.enqueue(nomeCliente);
      console.log(`Cliente "${nomeCliente}" adicionado à fila!`);
      break;

    case 2:
      
     
        console.log("\nLista de clientes na fila:");
        listaNomes.printQueue();
        break
    
      

    case 3:
      
      if (listaNomes.isEmpty()) {
        console.log("A fila esta vazia.");
      } else {
        const chamado = listaNomes.dequeue();
        console.log(`\nChamando: ${chamado}`);
      }
      break;

    case 0:
      console.log("Programa encerrado!");
      break;

    default:
      console.log("Opcao invalida! Tente novamente.");
  }

} while (opcao !== 0);

