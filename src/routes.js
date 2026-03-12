import { route } from "express";
import { createTable, insertpessoa, updatepessoas, selectpessoa, deletepessoa } from './Controler/Pessoa.js';

const router = Router();

router.get('./', (req, res)=>{
    res.json({
        statusCode: 200,
        msg: "Api Rodando "
    })

})

router.get('/pessoas', selectpessoas);
router.get('/pessoa', selectpessoa);
router.post('/pessoa', selectpessoa);
router.put('/pessoa', selectpessoa);
router.delete('/pessoa', selectpessoa);


export default router;