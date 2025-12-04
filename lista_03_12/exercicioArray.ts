// criar uma Collection Array de Objetos do tipo string. 
// O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores 
// e deverá adicioná-las individualmente no Array.

// Mostre na tela todas as cores adicionadas. 
// Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.


import leia = require('readline-sync')

let cores: string[] = []

console.log("Digite 5 cores:");

for (let i = 1; i <= 5; i++) {    //let i = 1 inicializa a variável de controle i com valor 1' i <= 5 é a condição de continuação:
    const cor = leia.question(`Cor ${i}: `); 
     //question() → pergunta ao usuário e lê o que ele digitou/  Cor ${i}: `→ monta a frase "Cor 1:", "Cor 2:",
    cores.push(cor);   //push() adiciona o valor digitado para dentro do array cores.
}

console.log("\nCores digitadas:");

for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}

let coresOrdenadas = [...cores].sort();  
//[...cores] cria uma cópia para não mexer no array original / .sort() coloca as strings em ordem crescente
console.log("\nCores em ordem alfabetica:");

for (let i = 0; i < coresOrdenadas.length; i++) {
    console.log(coresOrdenadas[i])
}


//    ...cores	copia o array
//    [...cores] cria um novo array igual ao original
//      .sort()	ordena em ordem alfabética 