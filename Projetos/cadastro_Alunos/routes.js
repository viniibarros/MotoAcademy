const express = require ('express');
const router = express.Router()
const db = require('./db');

// Endpoint de Leitura de Alunos (Read)

router.get("/alunos", (req,res) =>{
    const query = "SELECT * FROM alunos";

    db.query(query, (err,result)=>{
        if(err){
            res.status(500).send("Erro ao obter alunos");
        } else{
            res.json(result);
        }
    });
});

    

// Endpoint de Criação de Aluno (Create)

router.post("/alunos", (req, res) => {
    const{nome, idade} = req.body;

    const query = `INSERT INTO alunos (nome, idade) VALUES ('${nome}',${idade})`;

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send("Erro ao criar aluno");
        } else {
            res.status(201).send('Aluno criado com sucesso');
        }
    });
});


//Endpoint de Atualização de Aluno (Update)

router.put("/alunos/:id", (req, res) => {

    const { id } = req.params;
    const { nome, idade } = req.body;

    const query = `UPDATE alunos SET nome= '${nome}', idade= ${idade} WHERE id_aluno=${id}`;

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send(`Erro ao atualizar aluno: ${JSON.stringify(err)}`);
        } else {
            res.send('Aluno atualizado com sucesso');
        }
    });
});

//Endpoint de Exclusão de Aluno (Delete)
router.delete("/alunos/:id", (req, res) => {
    const {id} = req.params;

    const query = `DELETE FROM alunos WHERE id_aluno= ${id}`;

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send("Erro ao excluir aluno");
        } else {
            res.send('Aluno excluido com sucesso');
        }
    });
});


// ------------------------------------------------------ AULAS ------------------------------------------------------

// Endpoint de Leitura de Aulas (Read)

router.get("/aulas", (req, res) => {
    const query = 'SELECT * FROM aulas';

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send(`Erro ao obter aulas: ${JSON.stringify(err)}`);
        } else {
            res.json(result);
        }
    });
});




// Endpoint de Criação de Aula (Create)

router.post("/aulas", (req,res) =>{
    const { nome_aula, descricao } = req.body;
    const query = `INSERT INTO aulas (nome_aula, descricao) VALUES ('${ nome_aula }', '${descricao}')`;

    db.query(query, (err,result)=>{
        if(err){
            res.status(500).send("Erro ao criar aula");
        } else{
            res.status(201).send("Aula criada com sucesso");
        }
    });
});

    


//Endpoint de Atualização de Aula (Update)

router.put("/aulas/:id", (req, res) => {

    const { id } = req.params;
    const { nome_aula, descricao } = req.body;

    const query = `UPDATE aulas SET nome_aula= '${nome_aula}', descricao= ${descricao} WHERE id_aula=${id}`;

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send(`Erro ao atualizar aula:${JSON.stringify(err)}`); 
        } else {
            res.send('Aula atualizada com sucesso');
        }               //LEMBRANDO QUE TÁ DANDO ERRO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    });
});

//Endpoint de Exclusão de Aula (Delete)
router.delete("/aulas/:id", (req, res) => {
    const {id} = req.params;

    const query = `DELETE FROM aulas WHERE id_aula= ${id}`;

    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send(`Erro ao excluir aula: ${JSON.stringify(err)}` );
        } else {
            res.send('Aula excluida com sucesso');
        }
    });
});









// -------------------------------------------------- INSCRIÇÃO ------------------------------------------------------

// // Endpoint para verificar inscrição (Read)

// router.get("/inscricao", (req, res) => {
//     const query = 'SELECT * FROM alunos_aulas';

//     db.query(query, (err, result) => {
//         if (err) {
//             res.status(500).send(`Erro ao localizar inscrição: ${JSON.stringify(err)}`);
//         } else {
//             res.json(result);
//         }
//     });
// });



// // Endpoint para realizar inscrição (Create)

// router.post("/inscricao", (req, res) => {
//     const { id_aula, id_aluno } = req.body;
//     const query = `INSERT INTO aulas (id_aula, id_aluno) VALUES ('${id_aula}', '${id_aluno}')`;

//     db.query(query, (err, result) => {
//         if (err) {
//             res.status(500).send("Erro ao realizar inscrição");
//         } else {
//             res.status(201).send("Iscrição realizada com sucesso");
//         }
//     });
// });




// //Endpoint de Atualização de Inscrição (Update)

// router.put("/inscricao/:id", (req, res) => {

//     const { id } = req.params;

//     const query = `UPDATE aulas SET nome_aula= '${nome_aula}', descricao= ${descricao} WHERE id_aula=${id}`;

//     db.query(query, (err, result) => {
//         if (err) {
//             res.status(500).send(`Erro ao atualizar aula:${JSON.stringify(err)}`);
//         } else {
//             res.send('Aula atualizada com sucesso');
//         }
//     });
// });

// //Endpoint de Exclusão de Inscrição (Delete)
// router.delete("/inscricao/:id", (req, res) => {
//     const { id } = req.params;

//     const query = `DELETE FROM aulas WHERE id_aula= ${id}`;

//     db.query(query, (err, result) => {
//         if (err) {
//             res.status(500).send(`Erro ao excluir aula: ${JSON.stringify(err)}`);
//         } else {
//             res.send('Aula excluida com sucesso');
//         }
//     });
// });




module.exports = router