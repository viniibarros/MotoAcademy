// array -> utilizados para armazenar mais de um valor em uma única variável. pode ser números, nulo, string, bool, objeto:
// a coisa mais comum é passar array com objeto (json)

// um array não pode ter sua tipagem mudada, seu tamanho é flexível. Ex: lista = "teste" -> da erro!
const lista = [1,2,3,4, null, "coisa", true, {objeto:1}];

console.log(lista);
console.log(lista[2]);

console.log(lista.length);  // tamanho da lista 

lista.push(22);     //adicionando um item a lista
console.log(lista);

console.log(lista.pop());       // excluindo o último item da lista 
console.log(lista);

lista[2] = "pedro";     //substituindo um item
console.log(lista);

lista.splice(1,9,9,9,9);      // é como se fosse um combo, consegue adicionar, remover e substituir, mas é necessario estudar os parametros 
console.log(lista);










