import { openDb } from '../configDB.js';

export default async function createTsble(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER )')
    })
}

export default async function selectpessoas(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM pessoa')
        .then(pessoas=>res.json(pessoas))
    });
} 

export default async function selectpessoa(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM pessoa WHERE ID=?', [id])
        .then(pessoa=>res.json(pessoa) );
    });
} 

export default async function insertpessoa(req, res){
    let pessoa = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO pessoa (nome, idade) VALUES (?,?)', [pessoa.nome, pessoa.idade]);
    });
    res.json({
        "statusCode": "200"
})
} 

export default async function updatepessoa(req, res){
    let pessoa = req.body;
    openDb().then(db=>{
        db.run('UPDATE pessoa SET nome=?, idade=? WHERE id=?', [pessoa.nome, pessoa.idade]);
    });
    res.json({
        "statusCode": "200"
})
} 

export default async function deletepessoa(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        return db.get('DELETE FROM pessoa WHERE ID=?', [id])
        .then(res=>res)
    });
    res.json({
        "statusCode": "200"
})
} 