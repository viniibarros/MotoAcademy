let funcionario = [
    {
        nome: 'Euclides',
        idade: 21,
        cargo: 'Analista de sistemas',
        tecnologia: 'Node',
    },
    {
        nome: 'Linton',
        idade: 30,
        cargo: 'Analista de sistemas',
        tecnologia: 'Tudo',
    },
];

// console.log(funcionario[0]);

funcionario.push({
    nome: 'Richard',
    idade: 27,
    cargo: 'Aluno',
    tecnologia: 'Android',
})
funcionario.push({
    nome: 'Vinícius',
    idade: 22,
    cargo: 'Aluno',
    tecnologia: 'Python',
})
funcionario.push({
    nome: 'Livia',
    idade: 25,
    cargo: 'Aluno',
    tecnologia: 'Android',
})


//encontrando um funcionário específico:
funcionario.map((resposta)=>{
    if (resposta.nome === 'Livia') {
        // console.log(resposta)
    }
});

for(let i=0; i<funcionario.length; i++){
    if (funcionario[i].nome == 'Richard') {
        // console.log(funcionario[i]);
    }
}

const valor = funcionario.filter((resposta)=>{
    return resposta.nome === 'Euclides';
})





// substituindo a tecnologia de um objeto específico
const substituir = funcionario.map((resposta) => {
    if (resposta.tecnologia == 'Node') {
        resposta.tecnologia = ['Angular', 'Python', 'HTML', 'CSS'];
    }
});
console.log(funcionario[0]);




// acrescentando à array, através do push  (não é possível faze um push em uma string, somente em uma array) 
const substituir1 = funcionario.map((resposta) => {

    if (resposta.nome == "Euclides") {
        resposta.tecnologia.push('React');
        console.log(funcionario[0]);
    }
});

console.log('\n');













