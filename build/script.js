"use strict";
/*Crie uma um programa para trabalhar com estoque de uma loja,
o programa deverá trabalhar com Collection do tipo Array de JavaScript para manipular
os dados desse estoque, o programa deverá atender as seguintes funcionalidades:

Armazenar dados da Array
Remover dados da Array;
Atualizar dados da Array.
Apresentar todos os dados da Array.*/
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("Prompt-Sync");
var prompt = PromptSync();
var galpao = [];
console.log(' Escolha uma opção! ');
console.log('1- Armazena');
console.log('2 - Remover');
console.log('3 - Alterar ');
console.log(' 4 - Apresentar lista');
var option = Number(prompt(Escolha, sua, opção));
switch (option) {
    case 1:
        galpao.push();
        break;
    case '2':
        galpao.pop();
        break;
    case '3':
        galpao.splice();
        galpao.push();
        break;
    case '4':
        galpao.forEach();
        {
            console.log();
        }
        break;
}
return;
