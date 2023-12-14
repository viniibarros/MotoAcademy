// const x = require('./moduloA')

// function pegarValorIndex(){
//     const valorIndex = 20;
//     console.log(valorIndex);
// }

// x.valorModuloA()

const express = require('express')
const app = express()

app.get('/', function(req, res) { //função que espera outra função, recebemos uma requisição e uma resposta 
    res.send({message: "Ola mundo"})
    
})

app.listen(3000) //fica "escutando o meu servidor na seguinte porta"


