// import {openDb} from './configDB.js';
// import { createTable, insertpessoa, updatepessoas, selectpessoa, deletepessoa } from './Controler/Pessoa.js';

import express from 'express';
const app = express();
app.use(express.json());

import router from './routes.js'
app.use(router);

// createTable();

// app,get('/', function(req, res){
//    res.send("Olá Mundo");
// });

// app,get('/pessoa', async function(req, res){
//    let pessoas = await selectpessoas();
//    res.json(pessoas);
// });

// app,get('/pessoa', async function(req, res){
//    let pessoa = await selectpessoa(req.body.id);
//    res.json(pessoa);
// });

// app.post('/pessoa', function(req, res){
//    insertpessoa(req.body)
//    res.json({
//        "StatusCode": 200
//    })
// });

// app.put('/pessoa', function(req, res){
//    if(req.body && !req.body.id){
//        res.json({
//            "statusCode": "400",
//           "msg" : "Você precisa informar um id" 
//        })
//    }else{
//        updatepessoa(req.body)
//    res.json({
//        "StatusCode": 200
//        })
//    }
// });

// app.delete('/pessoa', async function(req, res){
//    let pessoa = await deletepessoa(req.body.id);
//    res.json(pessoa);
// });

app.listen(3000, ()=>console.log("Api Rodando."))