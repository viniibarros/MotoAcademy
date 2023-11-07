/*function fn2(){
    setTimeout(() => {
        console.log("oi");
    });
}

function fn1(){
    fn2();
}

function main () {
    fn1();
}

main();
console.log('Tchau mundo')


var nome = "Livía";
console.log(nome);

nome = '22';
console.log(nome);

console.log(nome + 10);

console.log('10' + '2'); //haverá uma concatenação de string

console.log('10' / '2'); // o JavaScript interpreta as strings como números e realiza a operação

existem 3 formas para atribuir variáveis: o var, let e const:


let valor3 = 'ABACATE';

function main(){
    valor3 = 'LARANJO'
    console.log(valor3);
}
main();
console.log(valor3);
*/

// const euclido = 1;

// function main() {
//     // // if(euclido >2 && euclido < 5) {
//     // //     console.log('TA ERRADO');
//     // // }

//     // //para comentar várias linhas de uma vez a gente seleciona, clica ctrl k + ctrl c

//     // const numero = 1;
//     // numero++;
//     // numer' '

//     // && -> e
//     // || -> ou 

//     // ! -> negação

//     // = -> atribuição
//     // == -> verifica a tipagem
//     // === -> verifica a tipagem e a referência


// //     const verdadeiro = 'banana';
// //     if (!verdadeiro == 'banana'){
// //         console.log('VERDADEIRO');
// //     } else {
// //         console.log('FALSO');
// //     }
// // }
// //     main();


// let nome = 'vinicius';
// console.log (nome.toLocaleLowerCase);
// console.log (nome.toUpperCase);

// function saudar(nome) {
//     console.log("Olá, " + nome + "!");
// }

// saudar("João");
// saudar("Maria");


// function funcao(valor1){
//     console.log(valor1.name);
//     console.log(valor1.age);
//     console.log(valor1.id);
// }

// funcao(array[0])


// const funcao = function (valor) {
//     console.log(valor);
// };

// funcao('teste');



// const funcao = () => {
//     'ola';
// };

// console.log(funcao);

// array.map()


// function somar(valor){
//     return valor + 10;
// };

// const teste = (a) => a+ 10;

// console.log(teste(10));


let array = [
    {
        id: 1,
        name: 'John',
        age: 23,
    },
    {
        id: 2,
        name: 'Samuel',
        age: 21,
    },
    {
        id: 3,
        name: 'marvin',
        age: 26,
    },
    {
        id: 4,
        name: 'james',
        age: 28,
    },
];

// o map funciona como se fosse um for, ele vai percorrer por todo o array e vai ferificar cada objeto e executar a função desejada.
const resultado = array.map((resposta) => {
    if (resposta.name == 'John'){
        resposta.age = resposta.age + 10;
    }
    console.log(resposta);
    return '';
});

// o filtro serve para fazer uma busca através de alguma condição que eu colocar, ou seja, conforme o exemplo, se o nome for John, ele irá mostar 
// as informações do John, isso server para qualquer parametro, como por exemplo o id ->  return.id == "1";
const filtro = array.filter((resposta) => {
    return resposta.name === 'John';
})

console.log(filtro);

// irá fazer uma comparação e retornar se é falso ou verdadeiro
const someFuncao = array.some((resposta) => {
    return resposta.id == 4;
})
console.log(someFuncao);