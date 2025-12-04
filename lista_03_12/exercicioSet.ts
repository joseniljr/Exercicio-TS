// Criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário, 
// que ele digite via teclado 10 valores inteiros não repetidos 
// e adicione-os individualmente na Collection Set. 

// Mostre na tela todos os elementos da Collection Set.


import leia = require('readline-sync');  //permite ler números digitados pelo usuário no terminal.

let numeros: Set<number> = new Set<number>();   //Cria um Set<number> que não aceita valores repetidos.

console.log("Digite 10 valores inteiros NÃO repetidos:"); //exibe uma mensagem explicando o que o usuário deve digitar.


for (let i = 0; i < 10; i++) { //i = 0 começa da primeira repetição / i < 10: roda até completar 10 números/ i++: soma 

    let valor = leia.questionInt(`Valor ${i + 1}: `);

    
    if (numeros.has(valor)) { // Verificar se já existe no Set / .has(valor) retorna true se o número já estiver lá.
        console.log("Valor repetido! Digite outro número.");
        i--;      // volta 1 posição para refazer a leitura
    } else {
        numeros.add(valor);   // Se o número não estava no Set, ele é adicionado normalmente.   
    }
}

console.log("\nListar dados do Set:");


for (let num of numeros) {  //Um laço for…of, usado para percorrer todos os elementos do Set.
    console.log(num);
}
