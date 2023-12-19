// const x = require('./moduloA')

// function pegarValorIndex(){
//     const valorIndex = 20;
//     console.log(valorIndex);
// }

// x.valorModuloA()

const express = require('express')
const app = express()

app.use(express.json())

let users = [    //array
    { id: 1, name: "Vinicius" },
    { id: 2, name: "Euclides" },
    { id: 3, name: "Eldorado" },
]


app.get('/', function(req, res) { //função que espera outra função, recebemos uma requisição e uma resposta 
    res.send(users)
})




app.get('/:id', function(req,res){
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id === id) //procura pra mim, se o id do usuário for igual ao id que eu quer e retorna pra mim o proprio usuario 
    if(user) {
        res.json(user)
    }    
    else{
        res.status(400).json({message: "Usuário não encontrado"})
    }
})





app.post("/users", function(req,res){
    const {name} = req.body     // {name} é a mesma coisa que "const name = req.body.name"
    const id = users.length+1
    const newUser = {id,name}

    users.push(newUser)
    res.status(201).json(newUser)  
})




app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    users = users.filter(user => user.id !== id);
    res.sendStatus(204)
})   



app.put('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const {name} = req.body
    userIndex = users.findIndex(user => user.id === id);

    if(userindex !== -1) {
        users[userIndex].name = name;
        res.json(users[userIndex])
    }
    else{
        res.status(400).json({message: "Usuário não encontrado"})
    }
})


app.listen(3000) //fica "escutando o meu servidor na seguinte porta"


